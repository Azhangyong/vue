   import router from "./index.js"
   import store from "../store/index"
   import { getToken, removeToken, removeUserName } from "@/utils/app.js"
   const whiteRouter = ['/login'] //indexOf 方法，判断数组中是否存在指定的某个对象
       //////////////////////////////如果不存在，则返回-1
       //路由守卫
       //    router.beforeEach((to, from, next) => { //to下一个页面，from上一个页面
       //        if (getToken()) {
       //            if (to.path == '/login') {
       //                removeToken()
       //                removeUserName()
       //                store.commit('app/SET_TOKEN', '')
       //                store.commit('app/SET_USERNAME', '')
       //                next()
       //            } else {
       //                next()
       //            }
       //            //有token正常进入页面
       //            console.log('存在')
       //        } else {
       //            if (whiteRouter.indexOf(to.path) != -1) { //存在
       //                next()
       //                console.log('login1')
       //            } else {
       //                next('/login')
       //                console.log('login2')
       //            }
       //        }

   //    })