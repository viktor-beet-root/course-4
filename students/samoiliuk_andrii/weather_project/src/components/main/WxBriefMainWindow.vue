<template>
    <div class="mainWindow">
        <h2 class="mainWindow__header">
            Briefing for airport group: {{ currentDisplay.name }}
        </h2>
        <div class="tabsWrapper">
            <div class="mainWindow__tabs tabs">
                <button :class="tabOne" @click="displayDecoded">
                    Decoded <span class="hiddenText">METAR/TAF</span>
                </button>
                <button :class="tabTwo" @click="displayRaw">
                    Raw <span class="hiddenText">METAR/TAF</span>
                </button>
            </div>
            <div class="mobileMenuButton" @click="displaySidebar">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 122.88 122.88"
                    style="enable-background: new 0 0 122.88 122.88"
                    xml:space="preserve"
                >
                    <g>
                        <path
                            class="st0"
                            d="M16.63,105.75c0.01-4.03,2.3-7.97,6.03-12.38L1.09,79.73c-1.36-0.59-1.33-1.42-0.54-2.4l4.57-3.9
    		c0.83-0.51,1.71-0.73,2.66-0.47l26.62,4.5l22.18-24.02L4.8,18.41c-1.31-0.77-1.42-1.64-0.07-2.65l7.47-5.96l67.5,18.97L99.64,7.45
    		c6.69-5.79,13.19-8.38,18.18-7.15c2.75,0.68,3.72,1.5,4.57,4.08c1.65,5.06-0.91,11.86-6.96,18.86L94.11,43.18l18.97,67.5
    		l-5.96,7.47c-1.01,1.34-1.88,1.23-2.65-0.07L69.43,66.31L45.41,88.48l4.5,26.62c0.26,0.94,0.05,1.82-0.47,2.66l-3.9,4.57
    		c-0.97,0.79-1.81,0.82-2.4-0.54l-13.64-21.57c-4.43,3.74-8.37,6.03-12.42,6.03C16.71,106.24,16.63,106.11,16.63,105.75
    		L16.63,105.75z"
                        />
                    </g>
                </svg>
            </div>
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
    emits: ["displaySidebar"],

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

        displaySidebar() {
            this.$emit("displaySidebar");
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

.tabs {
    display: inline-block;
    border: 1px solid #a1a1a1;
    border-radius: 4px;
    overflow: hidden;
    &:hover {
        border: 1px solid #ffffff;
    }
    &__button {
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



.tabsWrapper {
    display: flex;
    justify-content: space-between;
}
</style>
