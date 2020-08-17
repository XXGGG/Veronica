import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Veronica/Home'
// import AboutMe from '@/pages/AboutMe/AboutMe.vue'
// import TreasureBag from '@/pages/TreasureBag/TreasureBag.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'Home',component: Home },
    // { path: '/AboutMe',name: 'AboutMe',component: AboutMe },
    // { path: '/TreasureBag',name: 'TreasureBag',component: TreasureBag },
  ]
})
