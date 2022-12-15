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
                <p class="metar__header">
                    Present weather at
                    <span class="metar__header_bold"
                        >{{ airport.observed.slice(-6, -1) }} UTC,
                        {{ airport.observed.slice(0, 10) }}
                    </span>
                </p>
                <p class="metar__text">
                    <span class="metar__wind metar__item">
                        Wind:
                        {{ airport.wind.degrees }}
                        degrees,
                        {{ airport.wind.speed_kts }}
                        knots<span v-if="airport.wind.gust_kts"
                            >, gusting
                            {{ airport.wind.gust_kts }}
                            knots</span
                        >
                    </span>

                    <span class="metar__visibility metar__item">
                        Visibility:
                        {{ airport.visibility.meters }}
                        meters
                    </span>

                    <span
                        v-if="airport.conditions"
                        class="metar__conditions metar__item"
                    >
                        Conditions:
                        <span
                            class="metar__conditionItem"
                            v-for="condition in airport.conditions"
                            :key="condition"
                        >
                            {{ condition.text }},
                        </span>
                    </span>

                    <span class="metar__clouds metar__item">
                        Clouds:

                        <span
                            class="metar__cloudsItem"
                            v-for="cloud in airport.clouds"
                            :key="cloud"
                        >
                            {{ cloud.text }} {{ cloud.feet }}
                            <span v-if="cloud.feet">ft, </span>
                        </span>
                    </span>

                    <span class="metar__temperature metar__item">
                        Temperature:
                        {{ airport.temperature.celsius }}°C
                    </span>
                    <span class="metar__dewpoint metar__item">
                        Dew point:
                        {{ airport.dewpoint.celsius }}°C
                    </span>
                    <span class="metar__pressure metar__item">
                        Pressure:
                        {{ Math.round(airport.barometer.kpa * 10) }}
                        hPa
                    </span>
                </p>
            </div>
            <div v-else>No data</div>
        </div>
        <div class="weatherCard__taf taf">
            <div v-if="airport.forecast.icao">
                <p class="taf__header">
                    Forecast issued at:
                    {{ airport.forecast.timestamp.issued.slice(-6, -1) }} UTC,
                    {{ airport.forecast.timestamp.issued.slice(0, 10) }}
                </p>
                <div class="taf__periods">
                    <ul
                        class="taf__periodsItem tafPeriod"
                        v-for="period in airport.forecast.forecast"
                        :key="period.timestamp.from"
                    >
                        <li class="tafPeriod__header">
                            <span v-if="period.change">
                                {{ period.change.indicator.text }}
                            </span>
                            {{ period.timestamp.from.slice(-6, -1) }} to
                            {{ period.timestamp.to.slice(-6, -1) }} UTC
                        </li>
                        <li v-if="period.wind" class="tafPeriod__item">
                            Wind:
                            {{ period.wind.degrees }} degrees,
                            {{ period.wind.speed_kts }} knots<span
                                v-if="period.wind.gust_kts"
                                >, gusting
                                {{ period.wind.gust_kts }} knots;</span
                            >;
                        </li>
                        <li v-if="period.visibility" class="tafPeriod__item">
                            Visibility:
                            {{ period.visibility.meters }} meters;
                        </li>
                        <li
                            v-if="period.clouds.length > 0"
                            class="tafPeriod__item"
                        >
                            Clouds:
                            <ul class="tafPeriod__list">
                                <li
                                    class="tafPeriod__listItem"
                                    v-for="cloud in period.clouds"
                                    :key="cloud"
                                >
                                    {{ cloud.text }} {{ cloud.feet }}
                                    <span v-if="cloud.feet">ft</span>
                                </li>
                            </ul>
                        </li>
                        <li v-if="period.conditions" class="tafPeriod__item">
                            Conditions:
                            <ul class="tafPeriod__list">
                                <li
                                    class="tafPeriod__listItem"
                                    v-for="condition in period.conditions"
                                    :key="condition.text"
                                >
                                    {{ condition.text }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
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
.weatherCard {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #a1a1a1;
    padding: 15px 0;
    &:last-of-type {
        margin-bottom: 20px;
        border-bottom: none;
    }

    &__name {
        width: 100%;
        margin-bottom: 15px;
    }

    &__metar {
        margin-bottom: 15px;
    }

    &__taf {
        margin-bottom: 15px;
    }
}

.airportName {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;

    &__category {
        font-size: 16px;
        padding: 10px;
        width: 40px;
        text-align: center;
        color: #000000;
        border-radius: 4px;
        margin-right: 15px;

        &_green {
            background-color: #24ba21;
        }
        &_yellow {
            background-color: #cbce1a;
        }
        &_amber {
            background-color: #cf8b24;
        }
        &_red {
            background-color: #cf2424;
        }
    }
    &__icao {
        margin-right: 15px;
    }

    &__name {
        margin-right: 15px;
    }
}
.metar {
    &__header {
        font-weight: 700;
        margin-bottom: 15px;
    }
    &__item {
        display: inline-block;
        padding: 15px;
        margin: 5px 10px 5px 0;
        border: 1px solid #a2a2a237;
        border-radius: 4px;
    }
}

.taf {
    &__header {
        font-weight: 700;
        margin-bottom: 25px;
    }
    &__periods {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
    }
    &__periodsItem {
        padding: 15px;
        border: 1px solid #a2a2a237;
        border-radius: 4px;
    }
}

.tafPeriod {
    &__header {
        font-weight: 700;
        margin-bottom: 10px;
    }
    &__item {
        margin-bottom: 5px;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
    &__listItem {
        margin-left: 15px;
    }
}
</style>
