import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  // mode: 'history', // web
  mode: 'hash', // binaries
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/',
      name: 'home',
      component: load('Landing')
    },
    {
      path: '/About',
      name: 'about',
      component: load('About') },
    {
      path: '/Personae',
      name: 'personae',
      component: load('Personae') },
    {
      path: '/Watch',
      name: 'watch',
      component: load('Watch')
    },
    {
      path: '/Downloads',
      name: 'downloads',
      component: load('Downloads')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: load('Contact')
    },
    {
      path: '/Legal',
      name: 'legal',
      component: load('Legal')
    },
    /* {
      path: '/Settings',
      name: 'settings',
      component: load('Settings')
    },
    */
    // Always leave this last one
    { path: '*',
      component: load('Error404') } // Not found
  ]
})
