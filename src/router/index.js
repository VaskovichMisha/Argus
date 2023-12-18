import { createRouter, createWebHistory } from 'vue-router'
import AuthView from "@/layouts/AuthLoyout.vue";
import Auth from "@/views/Auth/Login.vue";
import RestorePassword from "@/views/Auth/RestorePassword.vue";
import ConnectionError from "@/views/Auth/ConnectionError.vue";
import Loading from "@/views/Auth/Loading.vue";
import MainLoyout from "@/layouts/MainLoyout.vue";

const routes = [
  {
    path: '/',
    component: AuthView,

    children: [
      {
        path: '',
        component:  Auth,
      },
      {
        path: 'restore-password',
        component: RestorePassword,
      },
      {
        path: 'connection-error',
        component: ConnectionError,
      },
      {
        path: 'loading',
        component: Loading,
      }
    ]
  },
  {
    path: '/main',
    component: MainLoyout,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
