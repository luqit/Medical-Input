// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import IView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(VueRouter);
Vue.use(IView);

Vue.config.productionTip = false

Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
  console.log(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
