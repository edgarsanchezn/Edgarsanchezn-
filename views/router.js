import Admin from './Admin.js'
import Analytics from './Analytics.js'
import Tasks from './Tasks.js'
import Messages from './Messages.js'
import Payments from './Payments.js'


const routes = [
  { path: '/tasks', component: Tasks },
  { path: '/messages', component: Messages },
  { path: '/payments', component: Payments },
  { path: '/analytics', component: Analytics },
  { path: '/', component: Admin }
]


export default new VueRouter({
mode: 'history',
  routes 
})