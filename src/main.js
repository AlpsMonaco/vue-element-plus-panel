import { createApp } from 'vue'
import { ElAside, ElButton, ElCalendar, ElContainer, ElHeader, ElIcon, ElMenu, ElSubMenu, ElTable } from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const elements = [
    ElMenu,
    ElButton,
    ElCalendar,
    ElHeader,
    ElAside,
    ElIcon,
    ElContainer,
    ElTable,
]

for (const el of elements) {
    app.use(el)
}

app.use(router)
app.mount('#app')