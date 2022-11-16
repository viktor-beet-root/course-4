<template>
    <div class="page">
        <div class="page__sidebar">
            <wx-brief-sidebar
                :groups="groups"
                @addGroup="addGroup"
                @removeGroup="removeGroup"
            />
        </div>
        <div class="page__main"></div>
    </div>
</template>

<script>
import WxBriefSidebar from "./components/sidebar/WxBriefSidebar.vue";

export default {
    name: "App",
    components: {
        WxBriefSidebar,
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
        getIndex(groupIndex) {
            return this.groups.findIndex(function (element) {
                if (element.index === groupIndex) {
                    return true;
                }
            });
        },
        removeGroup(index) {
            this.groups.splice(this.getIndex(index), 1);
            localStorage.setItem("userAirports", JSON.stringify(this.groups));
        },
    },
};
</script>

<style lang="scss">
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
