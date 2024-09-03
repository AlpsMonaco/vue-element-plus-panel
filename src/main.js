import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createRouter } from 'vue-router'
import App from './App.vue'
import { createMemoryHistory } from 'vue-router'

const app = createApp(App)

const routes = [
    { path: '', redirect: "calendar" },
    { path: '/table', component: () => import('./components/Table.vue'), name: "table" },
    { path: '/calendar', component: () => import('./components/Calendar.vue'), name: "calendar" },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

app.use(router)
app.use(ElementPlus)
app.mount('#app')