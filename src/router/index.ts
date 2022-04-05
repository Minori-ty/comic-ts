import { createWebHashHistory, createRouter } from 'vue-router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import video from '../pages/Video'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        { path: '/home', component: () => import('../pages/Home.vue') },
        {
            name: 'chapter',
            path: '/chapter/:id',
            component: () => import('../pages/Chapter.vue'),
        },
        {
            name: 'comic',
            path: '/comic/:comic_id/:uuid',
            component: () => import('../pages/Comic.vue'),
        },
        {
            name: 'video',
            path: '/video',
            component: () => video,
        },
    ],
})

// router.beforeEach((to, from, next) => {
//     NProgress.start()
//     next()
// })

// router.afterEach((to, path) => {
//     NProgress.done()
// })

export default router
