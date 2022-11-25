<template>
    <div class="mainWindow">
        <h2 class="mainWindow__header">
            Briefing for airport group: {{ currentDisplay.name }}
        </h2>
        <div class="mainWindow__tabs tabs">
            <button :class="tabOne" @click="displayDecoded">
                Decoded METAR/TAF
            </button>
            <button :class="tabTwo" @click="displayRaw">Raw METAR/TAF</button>
        </div>
        <div class="mainWindow__display display">
            <div class="display__decoded" v-if="decoded">
                <wx-brief-decoded-display :currentDisplay="currentDisplay" />
            </div>
            <div class="display__raw" v-if="raw">
                <wx-brief-raw-display :currentDisplay="currentDisplay" />
            </div>
        </div>
    </div>
</template>

<script>
import WxBriefRawDisplay from "./WxBriefRawDisplay.vue";
import WxBriefDecodedDisplay from "./WxBriefDecodedDisplay.vue";

export default {
    components: {
        WxBriefRawDisplay,
        WxBriefDecodedDisplay,
    },

    props: {
        currentDisplay: Object,
    },
    data() {
        return {
            decoded: true,
            raw: false,
            tabOne: "tabs__button tabs__selected",
            tabTwo: "tabs__button",
        };
    },
    methods: {
        displayDecoded() {
            this.decoded = true;
            this.raw = false;
            this.tabOne = "tabs__button tabs__selected";
            this.tabTwo = "tabs__button";
        },
        displayRaw() {
            this.decoded = false;
            this.raw = true;
            this.tabTwo = "tabs__button tabs__selected";
            this.tabOne = "tabs__button";
        },
    },
};
</script>

<style lang="scss">
.mainWindow {
    &__header {
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 72px;
    }

    &__tabs {
        margin-bottom: 40px;
    }
}

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
    display: inline-block;
    border: 1px solid #a1a1a1;
    border-radius: 4px;
    overflow: hidden;
    &:hover {
        border: 1px solid #ffffff;
    }
    &__button {
        font-size: 16px;
        line-height: 22px;
        background-color: transparent;
        padding: 10px;
        border: none;
        color: #f3f3f3;
        width: 205px;
        text-align: center;
        border-radius: 4px;
    }
    &__selected {
        background-color: #1673ff;
    }
}
</style>
