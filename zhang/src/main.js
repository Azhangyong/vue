import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import router from "./router";
import store from "./store/index.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import "./router/premit.js"; //路由守卫
//全局方法
// import golbal from './utils/global.js'
// Vue.use(golbal);//全局方法
//全局组件
import "./icons/index.js";
Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

//runtime(运行模式)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
