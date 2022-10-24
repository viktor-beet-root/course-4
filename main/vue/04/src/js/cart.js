import * as Vue from 'vue/dist/vue.esm-browser';
import shopConfig from './shop-config';

const cartConfig = {
    data() {
        return {
            imagesPath: shopConfig.imagesPath,
            currensySymbol: shopConfig.currensySymbol,
            cartList: [],
        }
    },
    methods: {
        setQty(isIncl, product) {
            if (!isIncl && product.qty === 1) return;

            product.qty = isIncl ? product.qty + 1 : product.qty - 1;
            this.saveToLocalStorage();
        },
        removeProduct(index) {
            this.cartList.splice(index, 1);
            this.saveToLocalStorage();
        },
        hasProductInCart(productId) {
            return this.cartList.find(product => product.productId === productId);
        },
        addToCart(product) {
            this.cartList.push({
                id: this.getCartProductId(),
                productId: product.id,
                name: product.name,
                price: product.price,
                specialPrice: product.specialPrice,
                img: product.img,
                qty: 1
            });

            this.saveToLocalStorage();
        },
        getCartProductId() {
            const lastProductCart = this.cartList[this.cartList.length - 1];

            if (lastProductCart) {
                return lastProductCart.id + 1;
            }

            return 1;
        },
        saveToLocalStorage() {
            localStorage.setItem('cartList', JSON.stringify(this.cartList));
        },
        getTotalProductPrice(product) {
            let price = 0;

            if (product.price > product.specialPrice) {
                price = product.specialPrice;
            } else {
                price = product.price;
            }

            price = price * product.qty;

            return price;
        }
    },
    computed: {
        totalCart() {
            const priceList = this.cartList.map(product => this.getTotalProductPrice(product));

            if (priceList.length) return priceList.reduce((acc, curVal) => acc + curVal);
            else return 0;
        }
    },
    mounted() {
        this.cartList = JSON.parse(localStorage.getItem('cartList'));
    }
};

const cartVm = Vue.createApp(cartConfig).mount('#cart');

export default cartVm;
