import { createRouter, createWebHistory } from 'vue-router'
import ToDoVue from '../components/layouts/ToDo.vue'
import AddVue from '../components/layouts/Add.vue'
import AchievementsVue from '../components/layouts/Achievements.vue'
const routes = [
    {
        path: '/',
        name: 'ToDo',
        component: ToDoVue
    },
    {
        path: '/add',
        name: 'add',
        component: AddVue
    },
    {
        path: '/achievements',
        name: 'achievements',
        component: AchievementsVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
