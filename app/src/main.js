// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Tabs from './components/tab'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "./assets/font/iconfont.css"
import Axios from "axios"
import Mymusictabs from './components/myMusicTab'
import './assets/iconfont/iconfont.css'
import './assets/zhyfont/iconfont.css'
Vue.use(Mymusictabs)


// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)

Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/baidu_music_api"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

