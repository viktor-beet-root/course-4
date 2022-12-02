<template>
    <div class="page">
        <header class="page__header">
            <wx-brief-header />
        </header>
        <main class="page__main">
            <div class="container">
                <div class="row mobile">
                    <aside
                        :class="'col-3 col-sm-6 mobile__sidebar ' + this.closed"
                    >
                        <wx-brief-sidebar
                            :groups="groups"
                            :isDisabled="isDisabled"
                            @addGroup="addGroup"
                            @removeGroup="removeGroup"
                            @displayMetarTaf="displayMetarTaf"
                        />
                    </aside>
                    <div class="col-9 col-sm-12 mobile__mainWindow">
                        <wx-brief-main-window
                            :currentDisplay="currentDisplay"
                            @displaySidebar="displaySidebar"
                        />
                    </div>
                </div>
            </div>
        </main>
        <footer class="page__footer">
            <wx-brief-footer />
        </footer>
    </div>
</template>

<script>
import WxBriefHeader from "./components/header/WxBriefHeader.vue";
import WxBriefMainWindow from "./components/main/WxBriefMainWindow.vue";
import WxBriefSidebar from "./components/sidebar/WxBriefSidebar.vue";
import WxBriefFooter from "./components/footer/WxBriefFooter.vue";

export default {
    name: "App",
    components: {
        WxBriefSidebar,
        WxBriefMainWindow,
        WxBriefHeader,
        WxBriefFooter,
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
                index: "",
                data: "",
                time: "",
                name: "",
            },
            isDisabled: false,
            closedStyle: "mobile__sidebar_closed",
            closed: "",
        };
    },

    mounted: function () {
        if (JSON.parse(localStorage.getItem("userAirports"))) {
            this.groups.push(
                ...JSON.parse(localStorage.getItem("userAirports"))
            );
        }

        if (this.groups.length === 0) {
            this.groups.push(...this.defaultGroups);
        }

        if (JSON.parse(localStorage.getItem("metarTafCache"))) {
            this.metarTafCache.push(
                ...JSON.parse(localStorage.getItem("metarTafCache"))
            );
        } else {
            this.displayMetarTaf(1);
        }
        if (this.metarTafCache[0]) {
            this.currentDisplay = {
                name: this.groups[0].name,
                data: this.metarTafCache[0].data,
                time: this.metarTafCache[0].time,
                taf: this.metarTafCache[0].taf,
            };
        }

        this.closed = this.closedStyle;
    },

    methods: {
        addGroup(name, airports) {
            this.groups.unshift({
                name: name,
                airports: this.validateAirports(airports),
                index: this.setIndex(),
            });
            localStorage.setItem("userAirports", JSON.stringify(this.groups));
            this.displayMetarTaf(this.groups[0].index);
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
                index: this.metarTafCache[indexInArray].index,
                data: this.metarTafCache[indexInArray].data,
                time: this.metarTafCache[indexInArray].time,
                name: this.groups[this.getIndex(index, this.groups)].name,
            };
        },

        pushToLocal(metar, taf, index) {
            for (let i = 0; i < metar.data.length; i++) {
                metar.data[i].forecast = taf.data.find(function (element) {
                    if (element.icao === metar.data[i].icao) {
                        return true;
                    }
                });
            }

            this.metarTafCache.push({
                index: index,
                time: Date.now(),
                data: metar,
            });
            localStorage.setItem(
                "metarTafCache",
                JSON.stringify(this.metarTafCache)
            );
        },

        displaySidebar() {
            if (this.closed === this.closedStyle) {
                this.closed = "";
            } else if (this.closed === "") {
                this.closed = this.closedStyle;
            }
        },
    },
};
</script>

<style lang="scss">
@import "./assets/css/style.scss";
</style>
