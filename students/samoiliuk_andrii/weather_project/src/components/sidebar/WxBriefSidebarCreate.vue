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
            this.name = "";
            this.airports = "";
        },
    },
};
</script>

<style lang="scss">
.create {
    width: 100%;

    &__name {
        display: block;
        font-weight: 700;
        margin-bottom: 10px;
    }

    &__nameInput {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;

        &::placeholder {
            font-family: inherit;
            color: #939191;
        }

        &:focus {
            border: 1px solid #ffffff;
        }

        font-family: inherit;
        border: 1px solid #a2a2a2;
        border-radius: 4px;
        background-color: transparent;
        color: inherit;
        margin-bottom: 20px;
    }

    // .create__airports

    &__airports {
        display: block;
        font-weight: 700;
        margin-bottom: 10px;
    }

    // .create__airportsInput

    &__airportsInput {
        font-family: inherit;
        box-sizing: border-box;
        width: 100%;
        font-weight: 400;
        background-color: transparent;
        color: inherit;
        padding: 10px;

        &::placeholder {
            font-family: inherit;
            color: #939191;
        }

        &:focus {
            border: 1px solid #ffffff;
        }

        border: 1px solid #a2a2a2;
        border-radius: 4px;
        margin-bottom: 40px;

        height: 45px;
    }

    // .create__button

    &__button {
        box-sizing: border-box;
        width: 100%;
        text-align: center;

        color: #f3f3f3;
        padding: 10px;
        background: #1673ff;
        border-radius: 4px;
        border: 1px solid transparent;

        &:hover {
            background: #003688;
        }

        &:active {
            background: transparent;
            border: 1px solid #a1a1a1;
        }
    }
}
</style>
