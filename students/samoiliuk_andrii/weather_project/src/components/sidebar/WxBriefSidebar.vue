<template>
    <div class="sidebar">
        <h3 class="sidebar__header">My Airport Groups</h3>
        <wx-brief-sidebar-create class="sidebar__create" @addGroup="addGroup" />
        <wx-brief-sidebar-display
            class="sidebar__display"
            @removeGroup="removeGroup"
            @displayMetarTaf="displayMetarTaf"
            :groups="groups"
            :isDisabled="isDisabled"
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
        isDisabled: Boolean,
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
    &__header {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 40px;
    }
    &__create {
        padding-bottom: 40px;
        border-bottom: 1px solid #a1a1a1;
        margin-bottom: 40px;
    }

    &__display {
        flex-grow: 2;
    }
}
</style>
