<template>
    <div class="sidebar">
        <h3 class="sidebar__header">My Groups</h3>
        <wx-brief-sidebar-create class="sidebar__create" @addGroup="addGroup" />
        <wx-brief-sidebar-display
            class="sidebar__display"
            @removeGroup="removeGroup"
            @displayMetarTaf="displayMetarTaf"
            :groups="groups"
        />
    </div>
</template>

<script>
import WxBriefSidebarCreate from "../sidebar/WxBriefSidebarCreate.vue";
import WxBriefSidebarDisplay from "../sidebar/WxBriefSidebarDisplay.vue";

export default {
    components: {
        WxBriefSidebarCreate,
        WxBriefSidebarDisplay,
    },
    props: {
        groups: Array,
    },
    emits: ["addGroup", "removeGroup", "displayMetarTaf"],
    methods: {
        addGroup(name, airports) {
            this.$emit("addGroup", name, airports);
        },
        removeGroup(index) {
            this.$emit("removeGroup", index);
        },
        displayMetarTaf(index) {
            this.$emit("displayMetarTaf", index);
        },
    },
};
</script>

<style lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;

    &__display {
        flex-grow: 2;
    }
}
</style>
