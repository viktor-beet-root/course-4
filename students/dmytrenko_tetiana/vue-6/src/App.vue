<template>
    <header>
        <div class="container-lg">
            <beetroot-cart :cartList="cart" @setQty="setQty" />
        </div>
    </header>
    <main>
        <div class="container-lg">
            <beetroot-catalog @addToCart="addToCart" :productList="products" />
        </div>
    </main>
</template>

<script>
import BeetrootCatalog from "./components/catalog/BeetrootCatalog.vue";
import products from "@/assets/products.js";
import BeetrootCart from "./components/cart/BeetrootCart.vue";

export default {
    name: "App",
    components: { BeetrootCatalog, BeetrootCart },
    data() {
        return {
            products,
            cart: [],
        };
    },
    provide: {
        currensySymbol: "$",
    },
    methods: {
        addToCart(product) {
            const newProduct = this.getProductInCart(product.id);

            if (newProduct) {
                this.setQty(newProduct.qty + 1, true, newProduct);
                return;
            }

            this.cart.push({
                id: this.getCartId(),
                productId: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                specialPrice: product.specialPrice,
                qty: 1,
            });
        },
        getCartId() {
            return this.cart.length ? this.cart.at(-1).id + 1 : 1;
        },
        getProductInCart(productId) {
            return this.cart.find((product) => product.productId === productId);
        },
        setQty(value, isNewQty, product) {
            if (product.qty + value < 1) return;

            if (isNewQty) {
                product.qty = value;
            } else {
                product.qty = product.qty + value;
            }
        },
    },
};
</script>
