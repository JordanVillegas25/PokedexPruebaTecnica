require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App.vue';


import VueAxios from 'vue-axios';
import axios from 'axios';


import VueRouter from 'vue-router';
import {routes} from './routes';
 
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
 
const router = new VueRouter({
    mode: 'history',
    routes: routes
});
 
 var token = localStorage.getItem('token');
 if(token){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
 }
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});