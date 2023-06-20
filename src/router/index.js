import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LegalView from '@/views/LegalView.vue'
import SitePlanView from '@/views/SitePlanView.vue'
import RealisationsView from '@/views/RealisationsView.vue'
import PartnershipView from '@/views/PartnershipView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/realisations/:gallery',
      name: 'realisations',
      component: RealisationsView
    },
    {
      path: '/partenaires',
      name: 'partnership',
      component: PartnershipView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },

    {
      path: '/legal',
      name: 'legal',
      component: LegalView
    },
    {
      path: '/plan-du-site',
      name: 'plan',
      component: SitePlanView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PartnershipView.vue')
    }
  ]
})

export default router
