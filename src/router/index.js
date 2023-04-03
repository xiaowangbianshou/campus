import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/login/login.vue'
import Home from '@/components/main/main.vue'
import Welcome from '@/components/main/welcome/welcome.vue'
import Point from '@/components/main/point/point.vue'
import Comment from '@/components/main/comment/comment.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        {
            path: '/home',
            redirect: '/home/welcome',
            component: Home,
            children: [
                { path: 'welcome', component: Welcome },
                { path: 'point', component: Point },
                { path: 'comment', component: Comment }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/home' || to.path === '/home/welcome' || to.path === '/home/point' || to.path === '/home/comment') {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router