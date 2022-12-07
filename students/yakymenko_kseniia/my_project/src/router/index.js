import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BeetrootCatalog from "@/components/catalog/BeetrootCatalog.vue";
import BeetrootCart from "@/components/cart/BeetrootCart.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/catalog",
        name: "catalog",
        component: BeetrootCatalog,
    },
    {
        path: "/cart",
        name: "cart",
        component: BeetrootCart,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
