<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/catalog">Catalog</router-link> |
        <router-link to="/cart">Cart</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
nav {
    padding: 30px;
    background-color: rgb(255, 217, 0);
    position: sticky;
    top: 0;
    a {
        font-weight: bold;
        color: rgb(134, 37, 37);
        &.router-link-exact-active {
            color: white;
            background-color: brown;
        }
    }
}
</style>
