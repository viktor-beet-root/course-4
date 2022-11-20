<template>
    <div class="displayGroups">
        <div
            class="displayGroups__item group"
            v-for="group in groups"
            :key="group.index"
        >
            <h3 class="group__name">{{ group.name }}</h3>
            <p class="group__text">{{ group.airports.join(", ") }}</p>
            <button
                class="group__display"
                @click="displayMetarTaf(group.index)"
                :disabled="isDisabled"
            >
                Display
            </button>
            <button class="group__remove" @click="removeGroup(group.index)">
                Remove
            </button>
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
        margin: 15px 0 15px 15px;
    }
}

.group {
    &__name {
        font-weight: 700;
        margin-bottom: 5px;
    }

    &__text {
        margin-bottom: 5px;
    }

    &__display {
        border: 1px solid grey;
        border-radius: 3px;
        width: 49%;
        margin-right: 2%;
    }

    &__remove {
        width: 49%;
        border: 1px solid grey;
        border-radius: 3px;
    }
}
</style>
