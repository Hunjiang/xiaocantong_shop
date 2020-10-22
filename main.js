import Vue from 'vue'
import App from './App'
import store from './store'

//全局域名
Vue.prototype.$base = "https://h5.xiaocantong.net"
//引入uView主JS库
import uView from "uview-ui";
Vue.use(uView);
Vue.prototype.$isTimer = false;
Vue.config.productionTip = false;

App.mpType = 'app'
Vue.prototype.$store = store
const app = new Vue({
    ...App
})
// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)
app.$mount()
