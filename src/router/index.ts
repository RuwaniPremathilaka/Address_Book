import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/DashBoard.vue'
import Products from '../components/Products.vue'
import About from '../views/AboutView.vue'
import Summary from '../views/customer/CustomerSummary.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: About
    },
    {
      path: '/first',
      name: 'product',
      component: Products
    },
    {
      path: '/second',
      name: 'customers',
      component: HomeView
    },
    {
      path: '/third',
      name: 'income',
      component: About
    },
    {
      path: '/fourth',
      name: 'promote',
      component: Products
    },
    {
      path: '/fifth',
      name: 'products',
      component: Summary
    }
  ]
})

export default router
