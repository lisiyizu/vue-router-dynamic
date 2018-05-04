import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: (r => {
      var routers = r.keys().map(key => r(key).default );
      return routers;
  })(require.context('../views/', true, /router\.js$/))
})
