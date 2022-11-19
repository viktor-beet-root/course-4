<template>
    <div>
        <beetroot-title class="title" title="Catalog" />
        <beetroot-button
            text="Toggle In Stock Products"
            @click="toggleInStockProduct"
        />
        <div class="row">
            <beetroot-product
                class="col-4"
                v-for="product in productList"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<script>
import BeetrootTitle from "../ui/BeetrootTitle.vue";
import BeetrootProduct from "./BeetrootProduct.vue";
import { mapGetters, mapActions } from "vuex";
import BeetrootButton from "../ui/BeetrootButton.vue";
export default {
    components: { BeetrootTitle, BeetrootProduct, BeetrootButton },
    name: "beetroot-catalog",
    computed: {
        ...mapGetters(["productList"]),
    },
    methods: {
        ...mapActions(["getProductList", "toggleInStockProduct"]),
    },
    mounted() {
        this.getProductList();
    },
};
</script>
