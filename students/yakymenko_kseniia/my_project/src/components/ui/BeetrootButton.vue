<template>
    <button :disabled="disabled">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "beetroot-button",
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
