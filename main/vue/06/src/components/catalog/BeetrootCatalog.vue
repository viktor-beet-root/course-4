<template>
    <div>
        <beetroot-title class="title" title="Catalog" />
        <div class="row">
            <beetroot-product
                class="col-4"
                v-for="product in productList"
                :key="product.id"
                :product="product"
                @addToCart="$emit('addToCart', product)"
            />
        </div>
    </div>
</template>

<script>
import BeetrootTitle from "../ui/BeetrootTitle.vue";
import BeetrootProduct from "./BeetrootProduct.vue";

export default {
    components: { BeetrootTitle, BeetrootProduct },
    name: "beetroot-catalog",
    emits: ["addToCart"],
    props: {
        productList: {
            type: Array,
            default() {
                return [];
            },
        },
    },
};
</script>
