import PortfolioVue from './../views/portfolio'
import SystemVue from './../views/system'
import AppVue from './../views/application'
// --------- Application
import users from './../views/application/views/users'
import products from './../views/application/views/products'
import clients from './../views/application/views/clients'







export default [
    { path: '/system', component: SystemVue },
    { path: '/application/', component: AppVue, name: '/application',
    children: [
      {
        name: '/application/users',
        path: 'users',
        component: users,
      },
      {
        name: '/application/products',
        path: 'products',
        component: products,
      },
      {
        name: '/application/clients',
        path: 'clients',
        component: clients,
      },
    ], },

    { path: '/', component: PortfolioVue },
    { path: '*', redirect: "/" },



  ]