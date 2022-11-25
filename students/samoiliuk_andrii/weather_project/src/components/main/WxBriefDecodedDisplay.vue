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
                <p class="airport__category">
                    {{ airport.flight_category }}
                </p>
            </div>
            <div class="table__cell">
                <div v-if="airport.observed">
                    <p class="card__time">
                        Observation time:
                        {{ airport.observed }}
                    </p>
                    <ul class="card__itemList">
                        <li>
                            Pressure:
                            {{ Math.round(airport.barometer.kpa * 10) }}
                            hPa
                        </li>
                        <li class="card__item">
                            Clouds:
                            <ul class="card__sublist">
                                <li
                                    class="card__sublistItem"
                                    v-for="cloud in airport.clouds"
                                    :key="cloud"
                                >
                                    {{ cloud.text }} {{ cloud.feet }}
                                    <span v-if="cloud.feet">ft</span>
                                </li>
                            </ul>
                        </li>
                        <li v-if="airport.conditions" class="card__item">
                            Conditions:
                            <ul class="card__sublist">
                                <li
                                    class="card__sublistItem"
                                    v-for="condition in airport.conditions"
                                    :key="condition"
                                >
                                    {{ condition.text }}
                                </li>
                            </ul>
                        </li>
                        <li class="card__item">
                            Temperature:
                            {{ airport.temperature.celsius }}°C
                        </li>
                        <li class="card__item">
                            Dew point:
                            {{ airport.dewpoint.celsius }}°C
                        </li>
                        <li class="card__item">
                            Visibility:
                            {{ airport.visibility.meters }}
                            meters
                        </li>
                        <li class="card__item">
                            Wind:
                            {{ airport.wind.degrees }}
                            degrees,
                            {{ airport.wind.speed_kts }}
                            knots<span v-if="airport.wind.gust_kts"
                                >, gusting
                                {{ airport.wind.gust_kts }}
                                knots</span
                            >;
                        </li>
                    </ul>
                </div>
                <div v-else>No data</div>
            </div>
            <div class="table__cell">
                <div v-if="airport.forecast.icao">
                    <h6 class="name forecast__name">
                        TAF {{ airport.forecast.icao }}
                        {{ airport.forecast.station.name }}
                    </h6>
                    <span class="forecast__time">
                        Issued
                        {{ airport.forecast.timestamp.issued }}</span
                    >
                    <ul
                        class="forecast__period"
                        v-for="period in airport.forecast.forecast"
                        :key="period.timestamp.from"
                    >
                        <li class="forecast__item">
                            <span v-if="period.change">
                                {{ period.change.indicator.text }}
                            </span>
                            {{ period.timestamp.from.slice(-6) }} to
                            {{ period.timestamp.to.slice(-6) }} <br />
                        </li>
                        <li v-if="period.wind" class="forecast__item">
                            Wind direction:
                            {{ period.wind.degrees }} degrees
                            {{ period.wind.speed_kts }} knots<span
                                v-if="period.wind.gust_kts"
                                >, gusting
                                {{ period.wind.gust_kts }} knots</span
                            >;
                        </li>
                        <li v-if="period.visibility" class="forecast__item">
                            Visibility:
                            {{ period.visibility.meters }} meters;
                        </li>
                        <li
                            v-if="period.clouds.length > 0"
                            class="forecast__item"
                        >
                            Clouds:
                            <ul class="forecast__list">
                                <li
                                    class="forecast__listItem"
                                    v-for="cloud in period.clouds"
                                    :key="cloud"
                                >
                                    {{ cloud.text }} {{ cloud.feet }}
                                    <span v-if="cloud.feet">ft</span>
                                </li>
                            </ul>
                        </li>
                        <li v-if="period.conditions" class="forecast__item">
                            Conditions:
                            <ul class="forecast__list">
                                <li
                                    class="forecast__listItem"
                                    v-for="condition in period.conditions"
                                    :key="condition.text"
                                >
                                    {{ condition.text }}
                                </li>
                            </ul>
                        </li>
                    </ul>
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
.table {
    &__row {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    &__cell {
        width: 33%;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        border-bottom: 1px solid #a1a1a1;
        padding-bottom: 20px;
    }
}
.airport {
    font-weight: 700;
    line-height: 22px;
    &__name {
        margin-bottom: 20px;
    }
}
</style>
