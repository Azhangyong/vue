import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "HomePage" //路由重定向
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/login/index.vue")
    },
    {
        path: "/homePage",
        name: "HomePage",
        component: () =>
            import ("../views/homepage/index.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;