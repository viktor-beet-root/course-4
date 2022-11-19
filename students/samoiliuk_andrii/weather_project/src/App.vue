<template>
    <div class="page">
        <div class="page__sidebar">
            <wx-brief-sidebar
                :groups="groups"
                :isDisabled="isDisabled"
                @addGroup="addGroup"
                @removeGroup="removeGroup"
                @displayMetarTaf="displayMetarTaf"
            />
        </div>
        <div class="page__main">
            <wx-brief-main-window :currentDisplay="currentDisplay" />
        </div>
    </div>
</template>

<script>
import WxBriefMainWindow from "./components/main/WxBriefMainWindow.vue";
import WxBriefSidebar from "./components/sidebar/WxBriefSidebar.vue";

export default {
    name: "App",
    components: {
        WxBriefSidebar,
        WxBriefMainWindow,
    },

    data() {
        return {
            groups: [],
            defaultGroups: [
                {
                    index: 1,
                    name: "Ukraine",
                    airports: ["UKBB", "UKLL", "UKHH", "UKOO"],
                },
                {
                    index: 2,
                    name: "London",
                    airports: ["EGKK", "EGLL", "EGLC", "EGSS"],
                },
                {
                    index: 3,
                    name: "USA",
                    airports: ["KJFK", "KMIA", "KORD"],
                },
            ],
            metarTafCache: [],
            currentDisplay: {
                data: [],
                time: 0,
            },
            isDisabled: false,
        };
    },

    mounted: function () {
        this.groups.push(...JSON.parse(localStorage.getItem("userAirports")));

        if (this.groups.length === 0) {
            this.groups.push(...this.defaultGroups);
        }
    },

    methods: {
        addGroup(name, airports) {
            this.groups.push({
                name: name,
                airports: this.validateAirports(airports),
                index: this.setIndex(),
            });
            localStorage.setItem("userAirports", JSON.stringify(this.groups));
        },

        validateAirports(airportsString) {
            let string = airportsString.replace(/[^a-zA-Z ]/g, "");
            string = string.toUpperCase();
            let array = string.split(" ");
            return array.filter((airportCode) => airportCode.length === 4);
        },

        setIndex() {
            if (this.groups.length === 0) {
                return 1;
            } else {
                return (
                    Math.max(
                        ...this.groups.map(function (element) {
                            return element.index;
                        })
                    ) + 1
                );
            }
        },

        getIndex(groupIndex, array) {
            return array.findIndex(function (element) {
                if (element.index === groupIndex) {
                    return true;
                }
            });
        },

        removeGroup(index) {
            this.groups.splice(this.getIndex(index, this.groups), 1);
            localStorage.setItem("userAirports", JSON.stringify(this.groups));
        },

        getMetarTaf(request) {
            this.isDisabled = true;
            const apiKey = "435ea74fd7424bf1ac1065acf9";
            const url = `https://api.checkwx.com/metar/${request}/decoded`;
            const options = {
                method: "GET",
                headers: {
                    "X-API-Key": apiKey,
                },
            };
            return fetch(url, options).then((response) => response.json());
        },

        async displayMetarTaf(index) {
            let indexInArray = this.getIndex(index, this.metarTafCache);
            const timeDelay = 600000;
            const request =
                this.groups[this.getIndex(index, this.groups)].airports.join(
                    ","
                );

            if (indexInArray === -1) {
                this.pushToLocal(await this.getMetarTaf(request), index);
                this.isDisabled = false;
            } else {
                const presentTime = Date.now();
                if (
                    presentTime - this.metarTafCache[indexInArray].time >
                    timeDelay
                ) {
                    this.metarTafCache.splice(indexInArray, 1);
                    this.pushToLocal(await this.getMetarTaf(request), index);
                    this.isDisabled = false;
                }
            }

            indexInArray = this.getIndex(index, this.metarTafCache);
            console.log(indexInArray);

            this.currentDisplay = {
                data: this.metarTafCache[indexInArray].data,
                time: this.metarTafCache[indexInArray].time,
            };

            console.log(this.currentDisplay);
        },

        pushToLocal(data, index) {
            this.metarTafCache.push({
                index: index,
                data: data,
                time: Date.now(),
            });
        },
    },
};
</script>

<style lang="scss">
@import "./assets/css/reset.scss";
.page {
    $sidebar-width: 200px;
    $main-color: #2c3e50;

    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $main-color;
    margin-top: 60px;

    &__sidebar {
        width: $sidebar-width;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        border: 1px solid $main-color;
    }

    &__main {
        padding-left: $sidebar-width;
    }
}
</style>
