// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

//引入自定义组件
import NavBar from './components/common/NavBar.vue'
import Core from './components/common/Core.vue'




Vue.component('navBar',NavBar);
Vue.component('core',Core);

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
