<template>
    <div class="cart-product">
        <beetroot-image :src="product.img" :alt="product.name" />
        <beetroot-title :level="6" :title="product.name" />
        <beetroot-price
            :price="product.price"
            :specialPrice="product.specialPrice"
        />
        <beetroot-product-qty :qty="product.qty" @setQty="setProductQty" />
        <beetroot-button text="Remove" @click="removeProductCart(product)" />
        <p>{{ totalProductPrise }}</p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BeetrootPrice from "../BeetrootPrice.vue";
import BeetrootTitle from "../ui/BeetrootTitle.vue";
import BeetrootImage from "../ui/BeetrootImage.vue";
import BeetrootProductQty from "./BeetrootProductQty.vue";
import BeetrootButton from "../ui/BeetrootButton.vue";
export default {
    components: {
        BeetrootImage,
        BeetrootTitle,
        BeetrootPrice,
        BeetrootProductQty,
        BeetrootButton,
    },
    name: "beetroot-cart-product",
    props: {
        product: Object,
        index: Number,
    },
    computed: {
        ...mapGetters(["currensySymbol"]),
        totalProductPrise() {
            const product = this.product;
            const price =
                product.pice > product.specialPrice
                    ? product.price * this.product.qty
                    : product.specialPrice * this.product.qty;

            return `${price.toLocaleString()} ${this.currensySymbol}`;
        },
    },
    methods: {
        ...mapActions(["setQty", "removeProductCart"]),
        setProductQty(value, isNewQty) {
            const qty = isNewQty ? value : this.product.qty + value;

            if (qty > 0) {
                this.setQty({
                    productIndex: this.index,
                    qty,
                });
            }
        },
    },
};
</script>
