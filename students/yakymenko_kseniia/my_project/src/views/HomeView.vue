<template>
    <div class="home">
        <div></div>
        <HomeGreeting msg="Great picture of products" />
        <HelloWorld msg="Welcome to Your Store" />
        <HomeContacts msg="Our social media" />
    </div>
</template>

<script>
// @ is an alias to /src
import HomeGreeting from "@/components/HomeGreeting.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import HomeContacts from "@/components/HomeContacts.vue";

export default {
    name: "HomeView",
    components: {
        HomeGreeting,
        HelloWorld,
        HomeContacts,
    },
};
</script>

<style lang="scss" scoped>
.home {
    background-color: rgb(255, 217, 0);
}
</style>
