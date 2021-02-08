import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import"./assets/styles/reset.css" // 引入样式初始化
Vue.config.productionTip = false

// 引入element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import api from './api/api'
axios.defaults.baseURL = api.baseUrl;// 配置接口地址

Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
