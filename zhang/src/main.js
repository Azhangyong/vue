import Vue from 'vue/dist/vue.common.js'

import VueCompositionApi from '@vue/composition-api'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
//自定义全局组件
Vue.component('svg-icon', {
    templatr: '<div>123</div>'
})
Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')