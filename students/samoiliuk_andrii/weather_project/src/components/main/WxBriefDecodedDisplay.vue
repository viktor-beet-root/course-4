<template>
    <div v-if="currentDisplay.data.data" class="table">
        <div class="table__header">
            <div class="table__cell">Airport</div>
            <div class="table__cell">METAR</div>
            <div class="table__cell">TAF</div>
        </div>
        <div
            v-for="n in currentDisplay.data.data.length"
            :key="n"
            class="table__row"
        >
            <div class="table__cell airport">
                <p class="airport__icao">
                    {{ currentDisplay.data.data[n - 1].icao }}
                </p>
                <p class="airport__name">
                    {{ currentDisplay.data.data[n - 1].station.name }}
                </p>
                <p class="airport__category">
                    {{ currentDisplay.data.data[n - 1].flight_category }}
                </p>
            </div>
            <div class="table__cell">
                <p class="card__time">
                    Observation time:
                    {{ currentDisplay.data.data[n - 1].observed }}
                </p>
                <ul class="card__itemList">
                    <li>
                        Pressure:
                        {{
                            Math.round(
                                currentDisplay.data.data[n - 1].barometer.kpa *
                                    10
                            )
                        }}
                        hPa
                    </li>
                    <li class="card__item">
                        Clouds:
                        <ul class="card__sublist">
                            <li
                                class="card__sublistItem"
                                v-for="cloud in currentDisplay.data.data[n - 1]
                                    .clouds"
                                :key="cloud"
                            >
                                {{ cloud.text }} {{ cloud.feet }}
                                <span v-if="cloud.feet">ft</span>
                            </li>
                        </ul>
                    </li>
                    <li
                        v-if="currentDisplay.data.data[n - 1].conditions"
                        class="card__item"
                    >
                        Conditions:
                        <ul class="card__sublist">
                            <li
                                class="card__sublistItem"
                                v-for="condition in currentDisplay.data.data[
                                    n - 1
                                ].conditions"
                                :key="condition"
                            >
                                {{ condition.text }}
                            </li>
                        </ul>
                    </li>
                    <li class="card__item">
                        Temperature:
                        {{
                            currentDisplay.data.data[n - 1].temperature.celsius
                        }}°C
                    </li>
                    <li class="card__item">
                        Dew point:
                        {{ currentDisplay.data.data[n - 1].dewpoint.celsius }}°C
                    </li>
                    <li class="card__item">
                        Visibility:
                        {{ currentDisplay.data.data[n - 1].visibility.meters }}
                        meters
                    </li>
                    <li class="card__item">
                        Wind:
                        {{ currentDisplay.data.data[n - 1].wind.degrees }}
                        degrees,
                        {{ currentDisplay.data.data[n - 1].wind.speed_kts }}
                        knots<span
                            v-if="currentDisplay.data.data[n - 1].wind.gust_kts"
                            >, gusting
                            {{ currentDisplay.data.data[n - 1].wind.gust_kts }}
                            knots</span
                        >;
                    </li>
                </ul>
            </div>
            <div class="table__cell">
                <!-- <h6 class="name forecast__name">
                    TAF {{ currentDisplay.taf.data[n - 1].icao }}
                    {{ currentDisplay.taf.data[n - 1].station.name }}
                </h6>
                <span class="forecast__time">
                    Issued
                    {{ currentDisplay.taf.data[n - 1].timestamp.issued }}</span
                >
                <ul
                    class="forecast__period"
                    v-for="period in currentDisplay.taf.data[n - 1].forecast"
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
                            >, gusting {{ period.wind.gust_kts }} knots</span
                        >;
                    </li>
                    <li v-if="period.visibility" class="forecast__item">
                        Visibility:
                        {{ period.visibility.meters }} meters;
                    </li>
                    <li v-if="period.clouds.length > 0" class="forecast__item">
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
                </ul> -->
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
