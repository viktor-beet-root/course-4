<template>
    <div class="price-box">
        <span class="price-box__price" :class="{ sale: price > specialPrice }">
            {{ textPrice }}
        </span>

        <span v-if="price > specialPrice" class="price-box__special-price">
            {{ specialPrice.toLocaleString() }}&nbsp;{{ currensySymbol }}
        </span>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "beetroot-price",
    props: {
        price: Number,
        specialPrice: Number,
    },
    computed: {
        ...mapGetters(["currensySymbol"]),
        textPrice() {
            return `${this.price.toLocaleString()}\xa0${this.currensySymbol} `;
        },
    },
};
</script>

<style lang="scss" scoped>
.sale {
    text-decoration: line-through;
    font-size: 0.7em;
}
</style>
