import Admin from './Admin.js'
import Analytics from './Analytics.js'
import Tasks from './Tasks.js'
import Messages from './Messages.js'
import Payments from './Payments.js'
import Users from './Users.js'



const routes = [
  { path: '/tasks', component: Tasks },
  { path: '/users', component: Users },
  { path: '/Messages', component: Messages },
  { path: '/payments', component: Payments },
  { path: '/analytics', component: Analytics },
  { path: '/Admin', component: Admin },

  { path: '/', component: Users }
]


export default new VueRouter({
mode: 'history',
  routes 
})