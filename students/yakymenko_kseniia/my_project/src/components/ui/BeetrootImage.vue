<template>
    <img :src="require('@/assets/' + src)" :alt="alt" />
</template>

<script>
export default {
    name: "beetroot-image",
    props: {
        src: {
            type: String,
            required: true,
            default() {
                return "";
            },
        },
        alt: {
            type: String,
            default() {
                return "";
            },
        },
    },
};
</script>

<style lang="scss" scoped>
img {
    max-width: 100%;
    padding: 20px;
}
</style>
