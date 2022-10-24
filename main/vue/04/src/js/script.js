import products from './products';
import * as Vue from 'vue/dist/vue.esm-browser';
import cartVm from './cart';
import shopConfig from './shop-config';

const productConfig = {
    data() {
        return {
            imagesPath: shopConfig.imagesPath,
            currensySymbol: shopConfig.currensySymbol,
            outOfStockMessage: shopConfig.outOfStockMessage,
            products
        }
    },
    methods: {
        addToCart(product) {
            const productInCart = cartVm.hasProductInCart(product.id);

            if (productInCart) {
                cartVm.setQty(true, productInCart);
            } else {
                cartVm.addToCart(product);
            }
        },
    }
};

const productVm = Vue.createApp(productConfig).mount('#productList');
