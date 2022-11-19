<template>
    <div class="qty">
        <beetroot-button class="btn" @action="$emit('setQty', 1)" text="+" />
        <input type="number" @input="setQty" :value="qty" />
        <beetroot-button class="btn" text="-" @action="$emit('setQty', -1)" />
    </div>
</template>

<script>
import BeetrootButton from "../ui/BeetrootButton.vue";
export default {
    components: { BeetrootButton },
    name: "beetroot-product-qty",
    emits: ["setQty"],
    props: {
        qty: Number,
    },
    methods: {
        setQty(e) {
            this.$emit("setQty", +e.target.value, true);
        },
    },
};
</script>
