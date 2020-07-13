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
        import("../views/login/index.vue")
},
{
    path: "/homePage",
    name: "HomePage",
    redirect: "index",
    meta: {
        name: "控制台"
    },
    component: () =>
        import("../views/layout/index.vue"),
    children: [{
        path: "/index",
        name: "Index",
        meta: {
            name: "首页"
        },
        component: () =>
            import("../views/homepage/index.vue")
    }]
},
{
    path: "/info",
    name: "Info",
    meta: {
        name: "信息管理"
    },
    component: () =>
        import("../views/layout/index.vue"),
    children: [{
        path: "/infoIndex",
        name: "InfoIndex",
        meta: {
            name: "信息列表"
        },
        component: () =>
            import("../views/info/index.vue")
    },
    {
        path: "/infoCategory",
        name: "InfoCategory",
        meta: {
            name: "信息分类"
        },
        component: () =>
            import("../views/info/infoCategory.vue")
    }]
},
//用户管理
{
    path: "/user",
    name: "User",
    meta: {
        name: "用户管理"
    },
    component: () =>
        import("../views/layout/index.vue"),
    children: [{
        path: "/userIndex",
        name: "UserIndex",
        meta: {
            name: "用户列表"
        },
        component: () =>
            import("../views/user/index.vue")
    }
  ]
}
];

const router = new VueRouter({
    routes
});

export default router;
