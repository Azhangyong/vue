import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
//全局组件
import "./icons/index.js"

Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')