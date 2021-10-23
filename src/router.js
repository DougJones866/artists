// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import ArtistDetail from './pages/artists/ArtistDetail.vue';
import ArtistsList from './pages/artists/ArtistsList.vue';
import ArtistRegistration from './pages/artists/ArtistRegistration.vue';
import ContactArtist from './pages/requests/ContactArtist.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

// const ArtistDetail = () => import('./pages/artists/ArtistDetail.vue');
// const ArtistRegistration = () => import('./pages/artists/ArtistRegistration.vue');
// const ContactArtist = () => import('./pages/requests/ContactArtist.vue');
// const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/artists' },
    { path: '/artists', component: ArtistsList },
    {
      path: '/artists/:id',
      component: ArtistDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactArtist } 
      ]
    },
    { path: '/register', component: ArtistRegistration, meta: { requiresAuth: true} },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true} },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true} },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/artists');
  } else {
    next();
  }
});

export default router;
