<template>
    <div class="tabs">
        <button class="tabs__button" @click="displayDecoded" :style="tabOne">
            Decoded METAR/TAF
        </button>
        <button class="tabs__button" @click="displayRaw" :style="tabTwo">
            Raw METAR/TAF
        </button>
    </div>
    <div class="display">
        <div v-if="decoded">
            <section class="section">
                <h3 class="section__name">Present weather</h3>
                <div class="weatherCards">
                    <div
                        v-for="airport in currentDisplay.data.data"
                        :key="airport.name"
                        class="card weatherCards__item"
                    >
                        <h6 class="name card__name">
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
                        <p class="card__time">
                            Observation time: {{ airport.observed }}
                        </p>
                        <ul class="card__itemList">
                            <li>
                                Pressure:
                                {{ Math.round(airport.barometer.kpa * 10) }} hPa
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
                                Temperature: {{ airport.temperature.celsius }}°C
                            </li>
                            <li class="card__item">
                                Dew point: {{ airport.dewpoint.celsius }}°C
                            </li>
                            <li class="card__item">
                                Visibility:
                                {{ airport.visibility.meters }} meters
                            </li>
                            <li class="card__item">
                                Wind: {{ airport.wind.degrees }} degrees,
                                {{ airport.wind.speed_kts }} knots<span
                                    v-if="airport.wind.gust_kts"
                                    >, gusting
                                    {{ airport.wind.gust_kts }} knots</span
                                >;
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="section">
                <h3 class="section__name">Forecast</h3>
                <div class="weatherCards">
                    <div
                        class="rawReport weatherCards__item forecast"
                        v-for="airportTAF in currentDisplay.taf.data"
                        :key="airportTAF.raw_text"
                    >
                        <h6 class="name forecast__name">
                            TAF {{ airportTAF.icao }}
                            {{ airportTAF.station.name }}
                        </h6>
                        <span class="forecast__time">
                            Issued {{ airportTAF.timestamp.issued }}</span
                        >
                        <ul
                            class="forecast__period"
                            v-for="period in airportTAF.forecast"
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
                </div>
            </section>
        </div>
        <div v-if="raw">
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
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentDisplay: Object,
    },
    data() {
        return {
            decoded: true,
            raw: false,
            tabOne: "",
            tabTwo: "border-bottom: 1px solid black;",
            tabStyle: "border-bottom: 1px solid black;",
        };
    },
    methods: {
        displayDecoded() {
            this.decoded = true;
            this.raw = false;
            this.tabOne = "";
            this.tabTwo = this.tabStyle;
        },
        displayRaw() {
            this.decoded = false;
            this.raw = true;
            this.tabTwo = "";
            this.tabOne = this.tabStyle;
        },
    },
};
</script>

<style lang="scss">
.name {
    font-weight: 700;
}

.category {
    &_vfr {
        font-weight: 400;
        background-color: lightgreen;
    }
    &_mvfr {
        font-weight: 400;
        background-color: rgb(251, 251, 70);
    }

    &_ifr {
        font-weight: 400;
        background-color: rgb(224, 150, 40);
    }

    &_lifr {
        font-weight: 400;
        background-color: rgb(231, 80, 30);
    }
}

.report {
    padding: 15px 0;
}

.rawReport {
    padding: 15px 0;
}

.section {
    padding: 15px;
    &__name {
        font-size: 18px;
        font-weight: 700;
    }
}

.weatherCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 -15px;

    &__item {
        width: 350px;
        padding: 15px;
    }
}
.card {
    line-height: 120%;
    &__name {
        margin-bottom: 5px;
    }

    &__time {
        margin-bottom: 5px;
    }

    &__sublistItem {
        margin-left: 30px;
    }
}

.forecast {
    line-height: 120%;
    &__name {
        margin-bottom: 5px;
    }

    &__time {
        display: block;
        margin-bottom: 5px;
    }
    &__period {
        margin-bottom: 15px;
    }

    &__item {
        margin-left: 30px;
        &:first-of-type {
            margin-left: 0;
        }
    }

    // .forecast__list

    &__list {
    }

    // .forecast__listItem

    &__listItem {
        margin-left: 30px;
    }
}

.tabs {
    background-color: white;
    border-bottom: 1px solid black;
    z-index: 10;
    &__button {
        margin-bottom: -1px;
        background-color: white;
        border: 1px solid black;
        border-radius: 3px 3px 0 0;
        z-index: 20;
        border-bottom: 1px solid white;
    }
}
.display {
    margin-top: 20px;
}
</style>
