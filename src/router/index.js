import { createRouter, createWebHistory } from 'vue-router'
import MyWay from '../views/MyWay.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'MyWay',
    component: MyWay,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: MyWay,
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: () => import('../components/Authorization.vue')
  },
  {
    path: '/materials',
    name: 'Materials',
    component: () => import ('../views/Materials.vue')
  },
  {
    path: '/addpost',
    component: () => import ('../views/AddPostForm.vue'),
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/posts/:id',
    component: () => import ('../components/PostForm.vue')
  },
  {
    path: '/post_edit/:id',
    component: () => import ('../components/PostEdit.vue')
  },
  {
    path: '/material_edit/:id',
    component: () => import ('../components/MaterialEdit.vue')
  },
  {
    path: '/addMaterial',
    component: () => import ('../views/AddMaterialForm.vue'),
    beforeEnter (to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/materials/:id',
    component: () => import ('../components/MaterialForm.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
