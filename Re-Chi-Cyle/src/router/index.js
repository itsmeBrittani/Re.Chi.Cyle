import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/landing'
import Find from '@/components/find'
import Learn from '@/components/learn'
import Action from '@/components/action'
import Add from '@/components/add'
import List from '@/components/list'
import Edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/action',
      name: 'action',
      component: Action
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  ]
})
