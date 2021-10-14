import Admin from '../views/Admin.js'
import Analytics from '../views/Analytics.js'
import Tasks from '../views/Tasks.js'

const Foo = { template: `<div class="container w-full mx-auto pt-20">foo</div>` }


const routes = [
  { path: '/foo', component: Foo },
  { path: '/tasks', component: Tasks },
  { path: '/analytics', component: Analytics },
  { path: '/', component: Admin }


]


export default new VueRouter({
mode: 'history',
  routes 
})