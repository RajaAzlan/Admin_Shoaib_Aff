import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Adding bootstrap
import 'bootstrap';
import '@/assets/scss/_custom_bootstrap.scss';

// importing Bootstrap Icons
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
