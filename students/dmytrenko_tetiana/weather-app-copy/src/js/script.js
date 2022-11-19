import * as Vue from 'vue/dist/vue.esm-browser';

const config = {
    data() {
        return {
            test: "Hello!"
        };
    },
    computed: {

    },
    methods: {

    },
}

const app = Vue.createApp(config);
const vm = app.mount('#app');
