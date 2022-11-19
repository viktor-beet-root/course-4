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
export default {
    name: "beetroot-price",
    props: {
        price: Number,
        specialPrice: Number,
    },
    inject: ["currensySymbol"],
    computed: {
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
