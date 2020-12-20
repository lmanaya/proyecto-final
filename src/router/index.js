import Vue from 'vue'
import VueRouter from 'vue-router'
import Autenticado from '../views/Autenticado.vue'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/autenticado',
    name: 'Autenticado',
    component: Autenticado,

    children: [
      {
        path: '/autenticado/categoria',
        name: 'Categoria',
        component: () => import(/* webpackChunkName: "about" */ '../views/autenticado/Categoria.vue')
      },
      {
        path: '/autenticado/articulo',
        name: 'Articulo',
        component: () => import(/* webpackChunkName: "about" */ '../views/autenticado/Articulo.vue')
      },
      {
        path: '/autenticado/usuario',
        name: 'Usuario',
        component: () => import(/* webpackChunkName: "about" */ '../views/autenticado/Usuario.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
