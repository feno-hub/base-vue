import { createRouter, createWebHistory } from "vue-router";
import PortfolioView from "../pages/PortfolioView.vue";
import AboutView from "../pages/about/AboutView.vue";
import SkillsView from "../pages/Skills/SkillsView.vue";
import ProjectView from "../pages/project/ProjectView.vue";
import ContactView from "../pages/contact/ContactView.vue";
import ProjectShowView from "../pages/project/ProjectShowView.vue";
import CounterView from "../pages/counter/CounterView.vue";
import TacheView from "../pages/tache/TacheView.vue";

const routes = [
    {path: '/', component: PortfolioView},
    {path: '/about', component: AboutView},
    {path: '/skills', component: SkillsView},
    {path: '/projects', component: ProjectView},
    {path: '/contact', component: ContactView},
    {path: '/project/show', component: ProjectShowView},
    {path: '/counter', component: CounterView},
    {path: '/tache', component: TacheView},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
