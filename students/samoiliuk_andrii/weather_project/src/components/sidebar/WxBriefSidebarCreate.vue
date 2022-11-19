<template>
    <div class="create">
        <label for="groupName">Name:</label>
        <input id="groupName" v-model="name" type="text" />
        <label for="airports">Airports:</label>
        <textarea id="airports" v-model="airports"> </textarea>
        <button @click="addGroup">Create group</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            airports: "",
        };
    },
    emits: ["addGroup"],
    methods: {
        addGroup() {
            if (this.name && this.airports) {
                this.$emit("addGroup", this.name, this.airports);
            }
        },
    },
};
</script>

<style lang="scss">
.create {
    padding: 15px;
}
</style>
