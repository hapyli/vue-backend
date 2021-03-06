// 生产环境中注释掉以下语句
import 'sysStatic/css/theme-green.scss'
import 'babel-polyfill'

import '../mock/index.js'

import Vue from "vue"
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import axios from './util/ajax'
import i18n from './util/i18n'
import App from './index'

import './components/platformCom/install'

// 注册组件到Vue
Vue.prototype.$axios = axios
Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
})
new Vue({
    i18n,
    axios,
    router,
    store,
    render: h => h(App)
}).$mount('#app')