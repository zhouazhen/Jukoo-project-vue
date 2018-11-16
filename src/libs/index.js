import Vue from 'vue'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// axios
import ajax from '@util/axios'
// bus
import bus from '@util/bus'
// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(VueAwesomeSwiper)


Vue.prototype.$http = ajax
Vue.prototype.$bus = bus