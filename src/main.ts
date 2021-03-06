//vue
import { createApp } from 'vue';
import App from './App.vue';
//router
import router from './router';
//datepicker
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';


const app = createApp(App);

app.component('Datepicker', Datepicker);
app.use(router);
app.mount('#app');
