import { createStore } from "vuex";
import request from "./request";

const baseUrl = "http://localhost:3000/api/";

export default createStore({
    state: {
        productList: [],
        cart: [],
        currensySymbol: '$',
        outOfStockMessage: "Out Of Stock",
        isShowInStockProduct: true,
    },
    getters: {
        productList(state) {
            let cart;
            if (!state.isShowInStockProduct) {
                cart = state.productList.filter((product) => {
                    return product.instock;
                });
            } else {
                cart = state.productList;
            }

            return cart;
        },
        currensySymbol(state) {
            return state.currensySymbol;
        },
        cartList(state) {
            return state.cart;
        },
    },
    mutations: {
        setProductList(state, products) {
            state.productList = products;
        },
        addToCart(state, product) {
            if (!product) return;

            state.cart.push(product);
        },
        setQty(state, options) {
            state.cart.splice(options.productIndex, 1, options.newProduct);
        },
        setCart(state, cart) {
            state.cart = cart;
        },
        removeProductCart(state, productId) {
            const productIndex = state.cart.findIndex((product) => product.id === productId);

            state.cart.splice(productIndex, 1);
        },
        toggleInStockProduct(state) {
            state.isShowInStockProduct = !state.isShowInStockProduct;
        },
    },
    actions: {
        async getProductList({ commit }) {
            const url = `${baseUrl}products/`;
            const products = await request(url);
            commit('setProductList', products);
        },
        async addToCart({ commit, dispatch, state }, product) {
            const url = `${baseUrl}cart/`;

            const productIndex = state.cart.findIndex((cartProduct) => {
                return cartProduct.productId === product.id;
            });

            if (productIndex === -1) {
                const newProduct = await request(url, "POST", {
                    productId: product.id,
                    name: product.name,
                    img: product.img,
                    price: product.price,
                    specialPrice: product.specialPrice,
                    qty: 1,
                });

                commit("addToCart", newProduct);
            } else {
                dispatch("setQty", {
                    productIndex,
                    qty: state.cart[productIndex].qty + 1,
                });
            }
        },
        async setQty({ commit, state }, options) {
            const product = { ...state.cart[options.productIndex] };
            product.qty = options.qty;
            const url = `${baseUrl}cart/${product.id}`;
            const newProduct = await request(url, "PUT", product);

            commit("setQty", {
                productIndex: options.productIndex,
                newProduct
            });
        },
        async getCart({ commit }) {
            const url = `${baseUrl}cart/`;
            const cart = await request(url);

            commit("setCart", cart);
        },
        async removeProductCart({ commit }, product) {
            const url = `${baseUrl}cart/${product.id}`;
            const response = await request(url, "DELETE");

            if (response) {
                commit("removeProductCart", product.id);
            }
        },
        toggleInStockProduct({ commit }) {
            commit("toggleInStockProduct");
        },
    },
    modules: {},
});
