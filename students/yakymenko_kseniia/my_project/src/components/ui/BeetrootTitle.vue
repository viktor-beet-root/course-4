<template>
    <h2 v-if="level === 2">{{ title }}</h2>
    <h3 v-else-if="level === 3">{{ title }}</h3>
    <h4 v-else-if="level === 4">{{ title }}</h4>
    <h5 v-else-if="level === 5">{{ title }}</h5>
    <h6 v-else-if="level === 6">{{ title }}</h6>
    <h1 v-else>{{ title }}</h1>
</template>

<script>
export default {
    name: "beetroot-title",
    props: {
        title: {
            type: String,
            required: true,
        },
        level: Number,
    },
};
</script>
