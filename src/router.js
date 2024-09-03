import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    { path: '', redirect: "calendar" },
    { path: '/', redirect: "calendar" },
    { path: '/index.html', redirect: "calendar" },
    { path: '/dist/index.html', redirect: "calendar" },
    { path: '/table', component: () => import('@/components/Table.vue'), name: "table" },
    { path: '/calendar', component: () => import('@/components/Calendar.vue'), name: "calendar" },
]

// function definePage(page) {
//     routes.push({ path: '/' + page.toLowerCase(), component: () => import(`./components/${page}.vue`), name: page.toLowerCase() },)
// }

// definePage('Table')

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
