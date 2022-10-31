<template>
    <div class="cart mb-4">
        <div class="row">
            <beetroot-cart-product
                class="col-4"
                v-for="product in cartList"
                :key="product.id"
                :product="product"
                @setQty="setQty"
            />
        </div>
    </div>
</template>

<script>
import BeetrootCartProduct from "./BeetrootCartProduct.vue";
import { mapGetters } from "vuex";

export default {
    components: { BeetrootCartProduct },
    name: "beetroot-cart",
    emits: ["setQty"],
    computed: {
        ...mapGetters(["cartList"]),
    },
    methods: {
        setQty(value, isNewQty, product) {
            this.$emit("setQty", value, isNewQty, product);
        },
    },
};
</script>
