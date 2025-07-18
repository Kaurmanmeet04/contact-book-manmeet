import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewContactView from '../views/NewContactView.vue'
import EditContactView from '../views/EditContactView.vue'
import ContactDetails from '../components/ContactDetails.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/contact/:id', name: 'ContactDetails', component: ContactDetails },
    { path: '/new', name: 'NewContact', component: NewContactView },
    { path: '/edit/:id', name: 'EditContact', component: EditContactView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
