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
        };
    },
    methods: {
        addGroup(name, airports) {
            this.groups.push({
                name: name,
                airports: airports,
                index: this.setIndex(),
            });
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
