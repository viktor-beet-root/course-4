<template>
    <div class="create">
        <label for="groupName" class="create__name">Name:</label>
        <input
            id="groupName"
            v-model="name"
            type="text"
            class="create__nameInput"
            placeholder="Enter name"
        />
        <label for="airports" class="create__airports">Airports:</label>
        <textarea
            id="airports"
            v-model="airports"
            class="create__airportsInput"
            placeholder="Enter 4 letter ICAO airport codes"
        >
        </textarea>
        <button class="create__button" @click="addGroup">Create group</button>
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
    padding: 15px 0 15px 15px;

    &__name {
    }

    &__nameInput {
        box-sizing: border-box;
        width: 100%;
        &::placeholder {
            font-family: Arial, Helvetica, sans-serif;
        }
        margin-bottom: 5px;
        border: 1px solid grey;
    }

    // .create__airports

    &__airports {
    }

    // .create__airportsInput

    &__airportsInput {
        box-sizing: border-box;
        width: 100%;
        &::placeholder {
            font-family: Arial, Helvetica, sans-serif;
        }
        min-height: 80px;
        margin-bottom: 5px;
        border: 1px solid grey;
    }

    // .create__button

    &__button {
        border: 1px solid grey;
        border-radius: 3px;
        box-sizing: border-box;
        width: 100%;
    }
}
</style>
