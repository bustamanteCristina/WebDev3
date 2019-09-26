import AUTH from "../services/auth";
let beforeEnter = (to,from, next) => {
    AUTH.currentPath = to.path
    // let userID = parseInt(localhostStorage.getItem('account_id'))
    // let token = localStorage.getItem('usertoken')
    // if (token !==null && userID > 0){
    //     if (to.path === '/' || to.path ==='/'){
    //         next({path: '/template'})
    //         }else {
    //             next()
    //     }else if (to.meta.tokenRequired === true){
    //         next({path : '/'})
    //     }else {
    //         next()
    //     }
    // }
    next()
}
var devRoutes = []
let app = require ('./app.js')
devRoutes = devRoutes.concat(app.default.routes)
for (let x =0; x<devRoutes.length;x++)
{
    devRoutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
    {
        path : '/',
        name : 'home',
        component : resolve => require(['modules/Login.vue'],resolve),
        beforeEnter : beforeEnter
    }
]
routes = routes.concat(devRoutes)
export default {
    routes : routes
}
