<template>
    <div class="qty input-group">
        <beetroot-button
            class="btn btn-outline-secondary"
            @click="$emit('setQty', -1)"
            text="-"
        />
        <input
            class="form-control"
            type="number"
            @input="setQty"
            :value="qty"
        />
        <beetroot-button
            class="btn btn-outline-secondary"
            text="+"
            @click="$emit('setQty', 1)"
        />
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
            const qty = +e.target.value;

            if (qty > 0 && !Number.isNaN(qty)) {
                this.$emit("setQty", qty, true);
            } else {
                e.target.value = this.qty;
            }
        },
    },
};
</script>
