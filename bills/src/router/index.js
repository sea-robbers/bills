import Vue from 'vue'
import Router from 'vue-router'

const com = r => require.ensure([], () => r(require('../views/Computations.vue')), 'com')
const record = r => require.ensure([], () => r(require('../views/Record.vue')), 'record')
Vue.use(Router)

export default new Router({
  // mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: [
    {
      path: '*',
      redirect: '/com'
    },
    {
      path: '/com',
      component: com
    },
    {
      path: '/record',
      component: record
    }
  ]
})
