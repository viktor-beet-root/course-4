<template>
  <div class="cart-product">
    <beetroot-image :src="product.img" :alt="product.name" />
    <beetroot-title :level="6" :title="product.name" />
    <beetroot-price
      :price="product.price"
      :specialPrice="product.specialPrice"
    />
    <beetroot-product-qty :qty="product.qty" @setQty="setQty" />
    <p>{{ totalProductPrise }}</p>
  </div>
</template>

<script>
import BeetrootPrice from "../BeetrootPrice.vue";
import BeetrootTitle from "../ui/BeetrootTitle.vue";
import BeetrootImage from "../ui/BeetrootImage.vue";
import BeetrootProductQty from "./BeetrootProductQty.vue";
export default {
  components: {
    BeetrootImage,
    BeetrootTitle,
    BeetrootPrice,
    BeetrootProductQty,
  },
  emits: ["setQty"],
  name: "beetroot-cart-product",
  props: {
    product: Object,
  },
  inject: ["currensySymbol"],
  computed: {
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
    setQty(value, isNewQty) {
      this.$emit("setQty", value, isNewQty, this.product);
    },
  },
};
</script>
