import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '', redirect: "calendar" },
    { path: '/', redirect: "calendar" },
    { path: '/table', component: () => import('./components/Table.vue'), name: "table" },
    { path: '/calendar', component: () => import('./components/Calendar.vue'), name: "calendar" },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
