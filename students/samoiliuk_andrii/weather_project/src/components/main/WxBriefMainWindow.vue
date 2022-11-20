<template>
    <div class="tabs">
        <button @click="displayDecoded">Decoded METAR/TAF</button
        ><button @click="displayRaw">Raw METAR/TAF</button>
    </div>
    <div v-if="decoded">
        <section class="section">
            <h3 class="name">Present weather</h3>
            <div
                v-for="airport in currentDisplay.data.data"
                :key="airport.name"
                class="report"
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
                <p class="report__item">
                    Observation time: {{ airport.observed }}
                </p>
                <ul>
                    <li>
                        Pressure:
                        {{ Math.round(airport.barometer.kpa * 10) }} hPa
                    </li>
                    <li>
                        Clouds:
                        <ul>
                            <li v-for="cloud in airport.clouds" :key="cloud">
                                {{ cloud.text }} {{ cloud.feet }}
                                <span v-if="cloud.feet">ft</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li
                                v-for="condition in airport.conditions"
                                :key="condition"
                            >
                                {{ condition.text }}
                            </li>
                        </ul>
                    </li>
                    <li>Temperature: {{ airport.temperature.celsius }}°C</li>
                    <li>Dew point: {{ airport.dewpoint.celsius }}°C</li>
                    <li>Visibility {{ airport.visibility.meters }} meters</li>
                    <li>
                        Wind direction {{ airport.wind.degrees }} degrees, speed
                        {{ airport.wind.speed_kts }} knots<span
                            v-if="airport.wind.gust_kts"
                            >, gusting {{ airport.wind.gust_kts }} knots</span
                        >;
                    </li>
                </ul>
            </div>
        </section>
        <section class="section">
            <h3 class="name">Forecast</h3>
            <div
                class="rawReport"
                v-for="airportTAF in currentDisplay.taf.data"
                :key="airportTAF.raw_text"
            >
                <h6 class="name">
                    TAF {{ airportTAF.icao }} {{ airportTAF.station.name }}
                </h6>
                <span> Issued {{ airportTAF.timestamp.issued }}</span
                ><br /><br />
                <ul
                    v-for="period in airportTAF.forecast"
                    :key="period.timestamp.from"
                >
                    <li>
                        <span v-if="period.change">
                            {{ period.change.indicator.text }},
                        </span>
                        From {{ period.timestamp.from.slice(-6) }} to
                        {{ period.timestamp.to.slice(-6) }} <br />
                    </li>
                    <li v-if="period.wind">
                        Wind direction: {{ period.wind.degrees }} degrees
                        {{ period.wind.speed_kts }} knots<span
                            v-if="period.wind.gust_kts"
                            >, gusting {{ period.wind.gust_kts }} knots</span
                        >;
                    </li>
                    <li v-if="period.visibility">
                        Visibility: {{ period.visibility.meters }} meters;
                    </li>
                    <li v-if="period.clouds.length > 0">
                        Clouds:
                        <ul>
                            <li v-for="cloud in period.clouds" :key="cloud">
                                {{ cloud.text }} {{ cloud.feet }}
                                <span v-if="cloud.feet">ft</span>
                            </li>
                        </ul>
                    </li>
                    <li v-if="period.conditions">
                        <ul>
                            <li
                                v-for="condition in period.conditions"
                                :key="condition.text"
                            >
                                {{ condition.text }}
                            </li>
                        </ul>
                    </li>
                    <li><br /></li>
                </ul>
            </div>
        </section>
    </div>
    <div v-if="raw">
        <section class="section">
            <h3 class="name">Present weather</h3>
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
            <h3 class="name">Forecast</h3>
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
        };
    },
    methods: {
        displayDecoded() {
            this.decoded = true;
            this.raw = false;
        },
        displayRaw() {
            this.decoded = false;
            this.raw = true;
        },
    },
};
</script>

<style lang="scss">
.name {
    font-weight: 700;
    margin-bottom: 5px;
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
}
</style>
