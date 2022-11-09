<template>
    <div class="page">
        <div class="page__sidebar">
            <wx-brief-sidebar :groups="groups" @addGroup="addGroup" />
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
            newGroup: {
                name: "",
                airports: "",
            },
        };
    },
    methods: {
        addGroup(name, airports) {
            this.newGroup.name = name;
            this.newGroup.airports = airports;
            this.groups.push(this.newGroup);
            console.log(this.groups);
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
