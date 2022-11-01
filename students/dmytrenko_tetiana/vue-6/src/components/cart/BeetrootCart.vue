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
export default {
    components: { BeetrootCartProduct },
    name: "beetroot-cart",
    emits: ["setQty"],
    props: {
        cartList: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    methods: {
        setQty(value, isNewQty, product) {
            this.$emit("setQty", value, isNewQty, product);
        },
    },
};
</script>
