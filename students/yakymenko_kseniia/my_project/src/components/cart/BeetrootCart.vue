<template>
    <div class="cart mb-4">
        <div class="row">
            <beetroot-cart-product
                class="col-4"
                v-for="(product, index) in cartList"
                :key="product.id"
                :product="product"
                :index="index"
            />
        </div>
    </div>
</template>

<script>
import BeetrootCartProduct from "./BeetrootCartProduct.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    components: { BeetrootCartProduct },
    name: "beetroot-cart",
    computed: {
        ...mapGetters(["cartList"]),
    },
    methods: {
        ...mapActions(["getCart"]),
        setQty(value, isNewQty, product) {
            this.$emit("setQty", value, isNewQty, product);
        },
    },
    mounted() {
        this.getCart();
    },
};
</script>
<style>
.row {
    max-width: 100%;
}
</style>
