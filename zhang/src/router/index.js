import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "Login", //路由重定向
        hiddle: true,
        meta: {
            name: "主页"
        }
    },
    {
        path: "/login",
        name: "Login",
        hiddle: true,
        meta: {
            name: "登录"
        },
        component: () =>
            import ("../views/login/index.vue")
    },
    {
        path: "/homePage",
        name: "HomePage",
        redirect: "index",
        meta: {
            name: "控制台"
        },
        component: () =>
            import ("../views/layout/index.vue"),
        children: [{
            path: "/index",
            name: "Index",
            meta: {
                name: "首页"
            },
            component: () =>
                import ("../views/homepage/index.vue")
        }]
    }
];

const router = new VueRouter({
    routes
});

export default router;
