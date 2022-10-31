<template>
    <div>
        <beetroot-title class="title" title="Catalog" />
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

export default {
    components: { BeetrootTitle, BeetrootProduct },
    name: "beetroot-catalog",
    computed: {
        ...mapGetters(["productList"]),
    },
    methods: {
        ...mapActions(["getProductList"]),
    },
    mounted() {
        this.getProductList();
    },
};
</script>
