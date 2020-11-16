/*
 * @Author: zfd
 * @Date: 2020-11-11 09:22:16
 * @LastEditors: zfd
 * @LastEditTime: 2020-11-16 16:29:45
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/',
    name: '/',
    redirect: '/my-info',
    component: Layout,
    children: [
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my/index.vue')
      },
      {
        path: 'my-info',
        name: 'myInfo',
        component: () => import('@/views/my/my.vue')
      }
    ]
  },
  {
    path: '/change',
    name: 'change',
    redirect: '/change/phone',
    component: () => import('@/views/my/components/index.vue'),
    children: [
      {
        path: 'phone',
        name: 'changePhone',
        component: () => import('@/views/my/components/phone.vue')
      },
      {
        path: 'password',
        name: 'changePassword',
        component: () => import('@/views/my/components/password.vue')
      },
      {
        path: 'idcard',
        name: 'changeIdcard',
        component: () => import('@/views/my/components/idcard.vue')
      },
      {
        path: 'photo',
        name: 'changePhoto',
        component: () => import('@/views/my/components/photo.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
