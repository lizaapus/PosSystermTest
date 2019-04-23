import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Vip from '@/components/page/Vip'
import ConfigVue from '@/components/page/Config'
import Checkvue from '@/components/page/Check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    },{
      path:'/Vip',
      name:'Vip',
      component:Vip
    },{
      path:'/config',
      name:'config',
      component:ConfigVue
    },{
      path:'/check',
      name:'check',
      component:Checkvue
    }
  ]
})
