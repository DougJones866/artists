import { createRouter, createWebHistory } from 'vue-router';

import ArtistDetail from './pages/artists/ArtistDetail.vue';
import ArtistsList from './pages/artists/ArtistsList.vue';
import ArtistRegistation from './pages/artists/ArtistRegistration.vue';
import ContactArtist from './pages/requests/ContactArtist.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';

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
    { path: '/register', component: ArtistRegistation },
    { path: '/requests', component: RequestsReceived },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
