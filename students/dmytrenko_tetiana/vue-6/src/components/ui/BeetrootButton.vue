<template>
    <button @click="$emit('action')" :disabled="disabled">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "beetroot-button",
    emits: ["action"],
    props: {
        text: {
            type: String,
            required: true,
            default() {
                return "Ok";
            },
        },
        disabled: {
            type: Boolean,
            default() {
                return false;
            },
        },
    },
};
</script>
