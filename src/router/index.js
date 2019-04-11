import Vue from 'vue'
import Router from 'vue-router'
import Films from '@/pages/films/Films'
import Cinemas from '@/pages/cinemas/Cinemas'
import Center from '@/pages/center/Center'
import HotMovies from '@/pages/films/component/Hotmovies'
import Coming from '@/pages/films/component/Coming'
import City from '@/pages/city/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/city'
    },
    {
      path: '/films',
      name: 'Films',
      component: Films,
      children: [
        {
          path: 'nowPlaying',
          component: HotMovies
        },
        {
          path: 'comingSoon',
          component: Coming
        }
      ],
      redirect: '/films/nowPlaying'


    },
    {
      path: '/cinemas',
      name: 'Cinemas',
      component: Cinemas
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
