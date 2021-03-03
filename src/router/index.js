import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Layout,
    redirect: '/agent',
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        meta: {
            title: "DASHBOARD",
            icon: "dashboard"
        },
        component: () => import( /* webpackChunkName: "Agent" */ '@/pages/Dashboard'),
    }, {
        path: 'agent',
        name: 'agent',
        meta: {
            title: "AGENT",
            icon: "sitemap"
        },
        component: () => import( /* webpackChunkName: "Agent" */ '@/pages/Agent/Index'),
    }, {
        path: 'mycruse',
        name: 'mycruse',
        meta: {
            title: "MY CRUSE",
            icon: "boat"
        },
        component: () => import( /* webpackChunkName: "Agent" */ '@/pages/Mycruse'),
    }, {
        path: 'help',
        name: 'help',
        meta: {
            title: "HELP",
            icon: "life-bouy"
        },
        component: () => import( /* webpackChunkName: "Agent" */ '@/pages/Help'),
    }]
}, {
    path: '*',
    redirect: 'agent'
}]

const router = new VueRouter({
    mode: 'hash',
    routes
  })

export default router
