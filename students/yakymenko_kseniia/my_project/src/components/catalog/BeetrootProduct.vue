<template>
    <div class="product mb-4">
        <beetroot-image
            class="product__image"
            :src="product.img"
            :alt="product.name"
        />
        <beetroot-title
            class="product__title fw-bold"
            :level="2"
            :title="product.name"
        />
        <beetroot-price
            :price="product.price"
            :specialPrice="product.specialPrice"
        />
        <beetroot-button
            class="product__add-to-cart btn btn-primary w-100"
            text="Add To Cart"
            :disabled="!product.instock"
            @click="addToCart(product)"
        />
    </div>
</template>

<script>
import BeetrootTitle from "../ui/BeetrootTitle.vue";
import BeetrootImage from "../ui/BeetrootImage.vue";
import BeetrootPrice from "../BeetrootPrice.vue";
import BeetrootButton from "../ui/BeetrootButton.vue";
import { mapActions } from "vuex";
export default {
    components: { BeetrootImage, BeetrootTitle, BeetrootPrice, BeetrootButton },
    name: "beetroot-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    methods: {
        ...mapActions(["addToCart"]),
    },
};
</script>
  <style lang="scss" scoped>
.product {
    vertical-align: middle;
}
</style>
