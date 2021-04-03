import Slider from '@/views/Slider/Slider';

export default {
  notfound: {
    name: '404',
    path: '/404',
    component: () => import('@/views/NotFound')
  },
  about: {
    name: 'about',
    path: '/about',
    component: () => import('@/views/About/About')
  },
  team: {
    name: 'team',
    path: '/team',
    component: () => import('@/views/Team/Team')
  },
  careers: {
    name: 'careers',
    path: '/careers',
    component: () => import('@/views/Careers/Careers')
  },
  contact: {
    name: 'contact',
    path: '/contact',
    component: () => import('@/views/Contact/Contact')
  },
  login: {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login/Login'),
    meta: { theme: 'light' }
  },
  signup: {
    name: 'signup',
    path: '/signup',
    component: () => import('@/views/Signup/Signup'),
    meta: { theme: 'light' }
  },
  slider: {
    name: 'slider',
    path: '/',
    component: Slider
  },
}