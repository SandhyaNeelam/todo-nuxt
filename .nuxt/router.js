import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e965c0e = () => interopDefault(import('..\\pages\\allTodos.vue' /* webpackChunkName: "pages/allTodos" */))
const _fcd7cbd2 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _588e4fcf = () => interopDefault(import('..\\pages\\myTodos.vue' /* webpackChunkName: "pages/myTodos" */))
const _e0ef2cca = () => interopDefault(import('..\\pages\\todos.vue' /* webpackChunkName: "pages/todos" */))
const _90271200 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/allTodos",
    component: _3e965c0e,
    name: "allTodos"
  }, {
    path: "/login",
    component: _fcd7cbd2,
    name: "login"
  }, {
    path: "/myTodos",
    component: _588e4fcf,
    name: "myTodos"
  }, {
    path: "/todos",
    component: _e0ef2cca,
    name: "todos"
  }, {
    path: "/",
    component: _90271200,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
