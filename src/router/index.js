import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Sheet from '@/pages/Sheet'
import Preview from '@/pages/Preview'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sheet/:index',
        name: 'Sheet',
        component: Sheet
    },
    {
        path: '/sheet-preview/:index',
        name: 'SheetPreview',
        component: Preview
    }
  ]
})
