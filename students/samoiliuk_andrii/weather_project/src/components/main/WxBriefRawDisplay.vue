<template>
    <section class="section">
        <h3 class="section__name">Present weather</h3>
        <div
            class="rawReport"
            v-for="airport in currentDisplay.data.data"
            :key="airport.name"
        >
            <h6 class="name">
                <span
                    v-if="airport.flight_category === 'VFR'"
                    class="category_vfr"
                >
                    {{ airport.flight_category }}
                </span>
                <span
                    v-if="airport.flight_category === 'MVFR'"
                    class="category_mvfr"
                >
                    {{ airport.flight_category }}
                </span>
                <span
                    v-if="airport.flight_category === 'IFR'"
                    class="category_ifr"
                >
                    {{ airport.flight_category }}
                </span>
                <span
                    v-if="airport.flight_category === 'LIFR'"
                    class="category_lifr"
                >
                    {{ airport.flight_category }}
                </span>
                {{ airport.icao }} {{ airport.station.name }}
            </h6>
            <p>{{ airport.raw_text }}</p>
        </div>
    </section>
    <section class="section">
        <h3 class="section__name">Forecast</h3>
        <div
            class="rawReport"
            v-for="forecast in currentDisplay.taf.data"
            :key="forecast.raw_text"
        >
            <h6 class="name">
                {{ forecast.icao }} {{ forecast.station.name }}
            </h6>
            {{ forecast.raw_text }}
        </div>
    </section>
</template>

<script>
export default {
    props: {
        currentDisplay: Object,
    },
};
</script>

<style lang="scss">
</style>
