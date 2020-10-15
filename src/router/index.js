import Vue from "vue"
import VueRouter from "vue-router"
import AuthPage from "../view/AuthPage.vue"
import AnalyticPage from "../view/AnalyticPage.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "AuthPage",
    component: AuthPage
  },
  {
    path: "/analytic",
    name: "AnalyticPage",
    component: AnalyticPage
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router