import Vue from 'vue';
import Router from 'vue-router';

import CommonLayout from '@/views/Layouts/CommonLayout';
import RegularPage from '@/views/Layouts/RegularPage'

import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
      path: '*',
      component: CommonLayout,
      children: [
        {
          path: '/(about|careers|contact|team)',
          component: RegularPage,
          children: [
            routes.about,
            routes.careers,
            routes.contact,
            routes.team,
          ]
        },
        routes.login,
        routes.signup,
        routes.slider,
        routes.notfound
      ]
    },
  ]
});

export default router;
