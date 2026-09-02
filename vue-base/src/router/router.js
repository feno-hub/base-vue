import { createRouter, createWebHistory } from "vue-router";
import CounterView from "../pages/counter/CounterView.vue";
import TacheView from "../pages/tache/TacheView.vue";
import ProductView from "../pages/product/ProductView.vue";
import CartView from "../pages/cart/CartView.vue";
import HomeView from "../pages/HomeView.vue";
import ShowProductView from "../pages/product/ShowProductView.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/product', component: ProductView},
    {path: '/product/show/:id', component: ShowProductView},
    {path: '/counter', component: CounterView},
    {path: '/tache', component: TacheView},
    {path: '/cart', component: CartView},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
