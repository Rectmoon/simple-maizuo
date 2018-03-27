// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/config'
import '@/assets/styles/icon/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.directive('scroll',{
  bind:function(el,binding){
    window.addEventListener('scroll',() => {
      let fnc = binding.value;
      fnc(el);
    })
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
