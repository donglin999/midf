import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RanklistIndexView from '../views/ranklist/RanklistIndexView'
import RecordIndexView from '../views/record/RecordIndexView'
import UserMIDFIndexView from '../views/user/UserMIDFIndexView'
import NotFound from '../views/error/NotFound'

const routes = [
  {
    path:"/",
    name:"home",
    redirect:"/pk/"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component:PkIndexView,
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView,
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView,
  },
  {
    path: "/user/",
    name: "user_MIDF_index",
    component: UserMIDFIndexView,
  },
  {
    path: "/404/",
    name: "404",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect:"/404/"
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
