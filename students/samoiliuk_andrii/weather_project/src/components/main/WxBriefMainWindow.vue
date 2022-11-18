<template>
    <div>hello</div>
    <p v-for="airport in currentDisplay.data.data" :key="airport.name">
        {{ airport.station.name }} <br />
        {{ airport.raw_text }}
    </p>
</template>

<script>
export default {
    props: {
        currentDisplay: Object,
    },
};
</script>

<style lang="sass">
</style>
