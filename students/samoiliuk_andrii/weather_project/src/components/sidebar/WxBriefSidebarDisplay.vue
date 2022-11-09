<template>
    <div class="displayGroups">
        <div
            class="displayGroups__item"
            v-for="group in groups"
            :key="group.name"
        >
            <h3>{{ group.name }}</h3>
            <p>{{ group.airports }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        groups: Array,
    },
};
</script>

<style lang="scss">
.displayGroups {
    overflow-y: scroll;
}
</style>
