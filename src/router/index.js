import Vue from 'vue'
import VueRouter from 'vue-router'
import Autenticado from '../views/Autenticado.vue'
import Inicio from '../views/Inicio.vue'
import Login from '../views/Login.vue'

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
      {
        path: '/autenticado/home',
        name: 'TheAuth',
        component: () => import(/* webpackChunkName: "about" */ '../components/TheAuth.vue'),
        meta: {
          requiresAuth: true
        }
      },
    ]
  },
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem('jwt') === null){
      next({path:'/'})
    }
    else{
      next();
    }
  }
  else{
    next();
  }
})
export default router
