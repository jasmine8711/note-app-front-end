import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Notes from './components/Notes'
import About from './components/About'
import Add from './components/Add'
import NoteDetails from './components/NoteDetails'



Vue.use(vueResource)

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter(
  {
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Notes },
      { path: '/about', component: About },
      { path: '/add', component: Add },
      { path: '/notedetails/:id', component: NoteDetails, props: true }
    ]
  }
)
new Vue({
  router,


  render: h => h(App),
}).$mount('#app')
