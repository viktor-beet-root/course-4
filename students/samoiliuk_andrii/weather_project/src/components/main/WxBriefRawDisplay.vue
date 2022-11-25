<template>
    <div v-if="currentDisplay.data.data" class="table">
        <div class="table__header">
            <div class="table__cell">Airport</div>
            <div class="table__cell">METAR</div>
            <div class="table__cell">TAF</div>
        </div>
        <div
            v-for="airport in currentDisplay.data.data"
            :key="airport.icao"
            class="table__row"
        >
            <div class="table__cell airport">
                <p class="airport__icao">
                    {{ airport.icao }}
                </p>
                <p class="airport__name">
                    {{ airport.station.name }}
                </p>
                <p
                    class="airport__category airport__category_green"
                    v-if="airport.flight_category === 'VFR'"
                >
                    {{ airport.flight_category }}
                </p>
                <p
                    class="airport__category airport__category_yellow"
                    v-if="airport.flight_category === 'MVFR'"
                >
                    {{ airport.flight_category }}
                </p>
                <p
                    class="airport__category airport__category_amber"
                    v-if="airport.flight_category === 'IFR'"
                >
                    {{ airport.flight_category }}
                </p>
                <p
                    class="airport__category airport__category_red"
                    v-if="airport.flight_category === 'LIFR'"
                >
                    {{ airport.flight_category }}
                </p>
            </div>
            <div class="table__cell">
                <div v-if="airport.observed">
                    <p class="card__item">
                        {{ airport.raw_text }}
                    </p>
                </div>
                <div v-else>No data</div>
            </div>
            <div class="table__cell">
                <div v-if="airport.forecast.icao">
                    <p class="card__item">
                        {{ airport.forecast.raw_text }}
                    </p>
                </div>
                <div v-else>No data</div>
            </div>
        </div>
    </div>
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
