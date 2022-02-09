import PortfolioVue from './../views/portfolio'
import SystemVue from './../views/system'
import AppVue from './../views/application'




export default [
    { path: '/system', component: SystemVue },
    { path: '/application', component: AppVue },
    { path: '/', component: PortfolioVue }

  ]