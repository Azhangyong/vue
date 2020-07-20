import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//引入布局组件
import layout from "@/views/layout/index.vue"

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
        redirect: "index", //路由重定向
        meta: {
            name: "控制台",
            icon: "console"
        },
        component: layout,
        children: [{
            path: "/index",
            name: "Index",
            meta: {
                name: "首页"
            },
            component: () =>
                import ("../views/homepage/index.vue")
        }]
    },
    {
        path: "/info",
        name: "Info",
        meta: {
            name: "信息管理",
            icon: "info"
        },
        component: layout,
        children: [{
                path: "/infoIndex",
                name: "InfoIndex",
                meta: {
                    name: "信息列表"
                },
                component: () =>
                    import ("../views/info/index.vue")
            },
            {
                path: "/infoCategory",
                name: "InfoCategory",
                meta: {
                    name: "信息分类"
                },
                component: () =>
                    import ("../views/info/infoCategory.vue")
            }
        ]
    },
    //用户管理
    {
        path: "/user",
        name: "User",
        meta: {
            name: "用户管理",
            icon: "user"
        },
        component: layout,
        children: [{
            path: "/userIndex",
            name: "UserIndex",
            meta: {
                name: "用户列表"
            },
            component: () =>
                import ("../views/user/index.vue")
        }]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;