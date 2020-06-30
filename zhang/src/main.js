import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import App from './App.vue'
import axios from 'axios'
Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')