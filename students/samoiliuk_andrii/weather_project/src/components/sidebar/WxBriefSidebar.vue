<template>
    <div class="sidebar">
        <h3 class="sidebar__header">My Groups</h3>
        <wx-brief-sidebar-create />
    </div>
</template>

<script>
import WxBriefSidebarCreate from "../sidebar/WxBriefSidebarCreate.vue";

export default {
    components: {
        WxBriefSidebarCreate,
    },
};
</script>

<style lang="sass">
</style>
