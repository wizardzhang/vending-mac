import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
import store from './store'
import './icons'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/global.css'
import axios from 'axios'

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://127.0.0.1:8081'
Vue.use(ElementUI)


new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
});
