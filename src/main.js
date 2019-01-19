import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import {store} from './store/store'//vuex
import ElementUI from 'element-ui'//(使用ElementUI组件，引入组件)
import 'element-ui/lib/theme-chalk/index.css'//同上

Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

router.beforeEach(({meta, path}, from, next) => {
    // var isLogin = Boolean(store.state.isLogin)
    var isLogin = sessionStorage.getItem("isLogin")
    if (!isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})//导航钩子


new Vue({
	store:store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
