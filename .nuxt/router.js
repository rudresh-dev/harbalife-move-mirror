import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25ca14bf = () => interopDefault(import('..\\pages\\debug\\Matching.vue' /* webpackChunkName: "pages_debug_Matching" */))
const _74c0b5d9 = () => interopDefault(import('..\\pages\\debug\\MirrorImages.vue' /* webpackChunkName: "pages_debug_MirrorImages" */))
const _cd74a1be = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/debug/Matching",
    component: _25ca14bf,
    name: "debug-Matching"
  }, {
    path: "/debug/MirrorImages",
    component: _74c0b5d9,
    name: "debug-MirrorImages"
  }, {
    path: "/",
    component: _cd74a1be,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
