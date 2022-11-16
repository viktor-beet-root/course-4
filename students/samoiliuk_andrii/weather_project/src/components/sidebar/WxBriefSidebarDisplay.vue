<template>
    <div class="displayGroups">
        <div
            class="displayGroups__item"
            v-for="group in groups"
            :key="group.name"
        >
            <h3>{{ group.name }}</h3>
            <p>{{ group.airports }}</p>
            <button>Display</button>
            <button @click="removeGroup(group.index)">Remove</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        groups: Array,
    },
    emits: ["removeGroup"],
    methods: {
        removeGroup(index) {
            this.$emit("removeGroup", index);
        },
    },
};
</script>

<style lang="scss">
.displayGroups {
    overflow-y: scroll;
}
</style>
