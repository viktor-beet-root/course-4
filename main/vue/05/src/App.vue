<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <beetroot-test
        :message="message"
        @setUserInfo="setUserInfo"
        :list="list"
        @setMessage="setMessage"
    >
        <template #header>
            <h1>Here might be a page title</h1>
        </template>

        <p>d11111111111 {{ firstName }} {{ lastName }}</p>
    </beetroot-test>
    {{ firstName }} {{ lastName }}
</template>

<script>
import BeetrootTest from "./components/BeetrootTest.vue";

export default {
    name: "App",
    components: { BeetrootTest },
    data() {
        return {
            message: "aaasss",
            list: ["sdsdf", "asddfs"],
            firstName: "sdfdfs",
            lastName: "dsdfs",
        };
    },
    methods: {
        setMessage(newMessage) {
            this.message = newMessage;
        },
        setUserInfo(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
