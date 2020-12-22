import Vue from 'vue'
import VueRouter from 'vue-router'
import Autenticado from '../views/Autenticado.vue'
import Inicio from '../views/Inicio.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/autenticado',
    name: 'Autenticado',
    component: Autenticado,
    meta: {
      requiresAuth: true,
    },

    children: [
      {
        path: '/autenticado/categoria',
        name: 'Categoria',
        component: () => import(/* webpackChunkName: "about" */ '../views/autenticado/Categoria.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: '/autenticado/articulo',
        name: 'Articulo',
        component: () => import(/* webpackChunkName: "about" */ '../views/autenticado/Articulo.vue'),
        meta: {
          requiresAuth: true, 
        }
      },
      {
        path: '/autenticado/usuario',
        name: 'Usuario',
        component: () => import(/* webpackChunkName: "about" */ '../views/autenticado/Usuario.vue'),
        meta: {
          requiresAuth: true,
          administrador: true
        }
      },
      {
        path: '/autenticado/home',
        name: 'TheAuth',
        component: () => import(/* webpackChunkName: "about" */ '../components/TheAuth.vue'),
        meta: {
          requiresAuth: true,
        }
      },
    ]
  },
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      public: true
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.public)) {
    next();
  }
  else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user) {
      if (to.matched.some(record => record.meta.administrador)) {
        if (store.state.user.rol === "Administrador") {
          next();
        }
        else {
          next({ path: '/autenticado/home' })
        }
      }
      else {
        next();
      }
    }
    else {
      next({ path: '/login' });
    }
  }
  else {
    next({ path: '/' });
  }
})
export default router
