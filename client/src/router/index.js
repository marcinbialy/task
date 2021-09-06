import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import TaskerList from '@/components/TaskerList'
import Edit from '@/components/Edit'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/list',
      name: 'list',
      component: TaskerList
    },
    {
      path: '/list/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/list/create',
      name: 'add',
      component: Add
    }
  ]
})
