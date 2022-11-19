<template>
    <div class="displayGroups">
        <div
            class="displayGroups__item"
            v-for="group in groups"
            :key="group.index"
        >
            <h3>{{ group.name }}</h3>
            <p>{{ group.airports.join(", ") }}</p>
            <button
                @click="displayMetarTaf(group.index)"
                :disabled="isDisabled"
            >
                Display
            </button>
            <button @click="removeGroup(group.index)">Remove</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        groups: Array,
        isDisabled: Boolean,
    },
    emits: ["removeGroup", "displayMetarTaf"],
    methods: {
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
.displayGroups {
    overflow-y: scroll;
    &__item {
        padding: 15px;
    }
}
</style>
