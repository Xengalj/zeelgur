import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
//import Layout from '@/views/layout';
//import elementUiRoutes from './modules/element-ui';

const Test = { template: '<div>Test</div>' }
const Foo = { template: '<h1>Foo</h1>' }

export const routes = [
  {
    path: '/',
    component: () => import('@/views/home'),
    name: 'Home',
    title: 'Home',
    icon: 'el-icon-s-home'
  },
  {
    path: '/npc',
    component: () => import('@/views/npc/npc'),
    name: 'npc',
    title: 'NPC',
    icon: 'el-icon-cpu',
  },
  { path: '/foo', component: Foo, title: 'Foo', icon: 'el-icon-menu' },
  { path: '/test', component: Test, title: 'Test', icon: 'el-icon-question' },
  //elementUiRoutes,

  /*
  {
    path: '/404',
    redirect: { name: 'Page404' },
    component: () => import('@/views/error-page/404'),
    hidden: true,
  },
  { path: '*', redirect: '/404', hidden: true },
  */
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.MIX_LARAVUE_PATH,
  routes: routes,
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
