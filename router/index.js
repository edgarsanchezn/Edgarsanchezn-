import Admin from '../views/Admin.js'
import Tasks from '../views/Tasks.js'

const Foo = { template: `<div class="container w-full mx-auto pt-20">foo</div>` }
const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/tasks', component: Tasks },
  { path: '/', component: Admin }

]


export default new VueRouter({
mode: 'history',
  routes 
})