<template>
    <slot name="header" />
    <slot>
        <p>Not content</p>
    </slot>
    <p>{{ message }}</p>
    <!-- <button @click="$emit('setMessage')">set message</button> -->
    <p><input v-model="firstName" type="text" /></p>
    <p><input v-model="lastName" type="text" /></p>
    <button @click="setInfo">set message</button>
    <p v-for="item in list" :key="item">
        {{ item }}
    </p>
</template>

<script>
export default {
    name: "beetroot-test",
    emits: ["setMessage", "setUserInfo"],
    //props: ["message", "list"],
    data() {
        return {
            firstName: "",
            lastName: "",
        };
    },
    props: {
        message: {
            type: String,
            validator(value) {
                return value.length > 3;
            },
        },
        list: {
            type: Array,
            required: true,
            default() {
                return [];
            },
            validator(value) {
                return !!value.length;
            },
        },
    },
    methods: {
        setMessage() {
            this.$emit("setMessage", prompt());
        },
        setInfo() {
            this.$emit("setUserInfo", this.firstName, this.lastName);
        },
    },
};
</script>

<style lang="scss"></style>
