<template>
    <wx-brief-header />
    <div class="page">
        <aside class="page__sidebar">
            <wx-brief-sidebar
                :groups="groups"
                :isDisabled="isDisabled"
                @addGroup="addGroup"
                @removeGroup="removeGroup"
                @displayMetarTaf="displayMetarTaf"
            />
        </aside>
        <main class="page__main">
            <wx-brief-main-window :currentDisplay="currentDisplay" />
        </main>
    </div>
</template>

<script>
import WxBriefHeader from "./components/header/WxBriefHeader.vue";
import WxBriefMainWindow from "./components/main/WxBriefMainWindow.vue";
import WxBriefSidebar from "./components/sidebar/WxBriefSidebar.vue";

export default {
    name: "App",
    components: {
        WxBriefSidebar,
        WxBriefMainWindow,
        WxBriefHeader,
    },

    data() {
        return {
            groups: [],
            defaultGroups: [
                {
                    index: 1,
                    name: "Poland",
                    airports: ["EPWA", "EPKK", "EPRZ"],
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
                taf: [],
                data: [],
                time: 0,
            },
            isDisabled: false,
        };
    },

    mounted: function () {
        if (JSON.parse(localStorage.getItem("userAirports"))) {
            this.groups.push(
                ...JSON.parse(localStorage.getItem("userAirports"))
            );
        }

        if (!this.groups.length) {
            this.groups.push(...this.defaultGroups);
        }

        this.metarTafCache.push(
            ...JSON.parse(localStorage.getItem("metarTafCache"))
        );

        this.currentDisplay = {
            data: this.metarTafCache[0].data,
            time: this.metarTafCache[0].time,
            taf: this.metarTafCache[0].taf,
        };
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
            this.metarTafCache.splice(
                this.getIndex(index, this.metarTafCache),
                1
            );
            localStorage.setItem("userAirports", JSON.stringify(this.groups));
            localStorage.setItem(
                "metarTafCache",
                JSON.stringify(this.metarTafCache)
            );
        },

        getMetar(request) {
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

        getTaf(request) {
            this.isDisabled = true;
            const apiKey = "435ea74fd7424bf1ac1065acf9";
            const url = `https://api.checkwx.com/taf/${request}/decoded`;
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
            const timeDelay = 900000;
            const request =
                this.groups[this.getIndex(index, this.groups)].airports.join(
                    ","
                );

            if (indexInArray === -1) {
                this.pushToLocal(
                    await this.getMetar(request),
                    await this.getTaf(request),
                    index
                );
                this.isDisabled = false;
            } else {
                const presentTime = Date.now();
                if (
                    presentTime - this.metarTafCache[indexInArray].time >
                    timeDelay
                ) {
                    this.metarTafCache.splice(indexInArray, 1);
                    this.pushToLocal(
                        await this.getMetar(request),
                        await this.getTaf(request),
                        index
                    );
                    this.isDisabled = false;
                }
            }

            indexInArray = this.getIndex(index, this.metarTafCache);

            this.currentDisplay = {
                data: this.metarTafCache[indexInArray].data,
                time: this.metarTafCache[indexInArray].time,
                taf: this.metarTafCache[indexInArray].taf,
            };
        },

        pushToLocal(data, taf, index) {
            this.metarTafCache.push({
                index: index,
                data: data,
                taf: taf,
                time: Date.now(),
            });
            localStorage.setItem(
                "metarTafCache",
                JSON.stringify(this.metarTafCache)
            );
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

    &__sidebar {
        box-sizing: border-box;
        width: $sidebar-width;
        position: absolute;
        top: 100px;
        left: 0;
        bottom: 0;
        padding-right: 5px;
    }

    &__main {
        position: absolute;
        top: 100px;
        left: $sidebar-width;
        bottom: 0;
        right: 0;
        border-left: 1px solid black;
        overflow-y: scroll;
    }
}
</style>
