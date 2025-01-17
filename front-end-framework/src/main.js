import './assets/main.css'

import { createApp } from 'vue'
// khai báo thư viện bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from './App.vue'
import router from './route/router.js';

// import App from './Day01_App.vue'
// import App from './Day02_App.vue'
// import App from './Day03_App.vue'
// import App from './Day04_App.vue'
// import App from './Day06_App.vue'
// import App from './lab.vue'

// createApp(App).mount('#app')

const app = createApp(App);
app.use(router);
app.mount('#app');