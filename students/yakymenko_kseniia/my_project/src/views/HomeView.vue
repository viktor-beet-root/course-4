<template>
    <div class="home">
        <div></div>
        <HelloWorld msg="Welcome to Your Store" />
        <HomeGreeting msg="Great picture of products" />
        <HomeContacts msg="Our social media" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HomeGreeting from "@/components/HomeGreeting.vue";
import HomeContacts from "@/components/HomeContacts.vue";

export default {
    name: "HomeView",
    components: {
        HelloWorld,
        HomeGreeting,
        HomeContacts,
    },
};
</script>

<style lang="scss" scoped>
.home {
    background-color: rgb(255, 217, 0);
}
</style>
