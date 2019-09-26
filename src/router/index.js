import Vue from 'vue'
import Router from 'vue-router'
import ModuleRoutes from './module_routes'
// global.$ = global.jQuery
Vue.use(Router)
export default new Router({
    routes: ModuleRoutes.routes
})