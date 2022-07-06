import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Adding bootstrap
import 'bootstrap';
import '@/assets/scss/_custom_bootstrap.scss';
import VTooltip from 'v-tooltip';

// importing Bootstrap Icons
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
createApp(App)
  .use(router)
  .use(VTooltip)
  .mount('#app');
