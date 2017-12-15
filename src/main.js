// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import VueProgressiveImage from 'vue-progressive-image'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueProgressiveImage, {
    // delay: 5000 // 2 seconds before the image is displayed
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
