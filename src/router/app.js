

export default{
    routes : [
        {
        path : '/login',
        name: 'login',
        component : resolve =>require(['modules/Login.vue'], resolve),
        meta : {
            tokenRequired : false
        }
    },
    {
        path : '/register',
        name : 'register',
        component : resolve => require(['modules/Register.vue'], resolve),
        meta : {
            tokenRequired : false
        }
    }
]
}