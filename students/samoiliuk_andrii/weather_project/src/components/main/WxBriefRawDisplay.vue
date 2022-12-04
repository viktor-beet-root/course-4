<template>
    <div
        v-for="airport in currentDisplay.data.data"
        :key="airport.icao"
        class="weatherCard"
    >
        <div class="weatherCard__airport airportName">
            <p
                class="airportName__category airportName__category_green"
                v-if="airport.flight_category === 'VFR'"
            >
                {{ airport.flight_category }}
            </p>
            <p
                class="airportName__category airportName__category_yellow"
                v-if="airport.flight_category === 'MVFR'"
            >
                {{ airport.flight_category }}
            </p>
            <p
                class="airportName__category airportName__category_amber"
                v-if="airport.flight_category === 'IFR'"
            >
                {{ airport.flight_category }}
            </p>
            <p
                class="airportName__category airportName__category_red"
                v-if="airport.flight_category === 'LIFR'"
            >
                {{ airport.flight_category }}
            </p>
            <p class="airportName__icao">
                {{ airport.icao }}
            </p>
            <p class="airportName__name">
                {{ airport.station.name }}
            </p>
        </div>
        <div class="weatherCard__metar metar">
            <div v-if="airport.observed">
                <p class="metar__text">
                    <span class="metar__raw">
                        METAR {{ airport.raw_text }}
                    </span>
                </p>
            </div>
            <div v-else>No data</div>
        </div>
        <div class="weatherCard__taf taf">
            <div v-if="airport.forecast.icao">
                <p class="taf__text">{{ airport.forecast.raw_text }}</p>
            </div>
            <div v-else>No data</div>
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
.metar {
    &__raw {
        word-spacing: 5px;
    }
}

.taf {
    &__text {
        word-spacing: 5px;
    }
}
</style>
