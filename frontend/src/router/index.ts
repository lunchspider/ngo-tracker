import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/pages/HomeView.vue"),
        },
        {
            path: "/user",
            name: "user",
            component: () => import("@/pages/UserView.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/pages/login.vue"),
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("@/pages/signup.vue"),
        }
    ],
});

export default router;
