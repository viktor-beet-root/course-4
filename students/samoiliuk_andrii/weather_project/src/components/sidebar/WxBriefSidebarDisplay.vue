<template>
    <div class="displayGroups">
        <div
            class="displayGroups__item group"
            v-for="group in groups"
            :key="group.index"
        >
            <h3 class="group__name">{{ group.name }}</h3>
            <p class="group__text">{{ group.airports.join(", ") }}</p>
            <div class="group__buttons">
                <button class="group__remove" @click="removeGroup(group.index)">
                    Delete
                </button>

                <button
                    class="group__display"
                    @click="displayMetarTaf(group.index)"
                    :disabled="isDisabled"
                >
                    Display
                </button>
            </div>
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
    width: 100%;
    &__item {
        margin-bottom: 20px;
    }
}

.group {
    border: 1px solid #a1a1a1;
    border-radius: 4px;
    padding: 20px;

    &__name {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        margin-bottom: 20px;
    }

    &__text {
        font-weight: 400;

        line-height: 22px;
        margin-bottom: 20px;
    }
    &__buttons {
        display: flex;
        justify-content: space-between;
    }
    &__display {
        box-sizing: border-box;
        width: 45%;

        line-height: 22px;

        text-align: center;

        color: #f3f3f3;
        padding: 10px;
        background: #1673ff;
        border-radius: 4px;
        border: 1px solid transparent;

        &:hover {
            background: #003688;
        }

        &:active {
            background: transparent;
            border: 1px solid #a1a1a1;
        }

        &:disabled {
            background: transparent;
            border: 1px solid #a1a1a1;
            cursor: wait;
        }
    }

    &__remove {
        box-sizing: border-box;
        width: 45%;

        line-height: 22px;

        text-align: center;

        color: #f3f3f3;
        padding: 10px;
        background: transparent;
        border-radius: 4px;
        border: 1px solid #a1a1a1;

        &:hover {
            border: 1px solid #ffffff;
        }

        &:active {
            border: 1px solid #ffffff;
        }
    }
}
</style>
