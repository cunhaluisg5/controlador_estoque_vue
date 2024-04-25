import { registerPlugins } from '@/plugins';

import App from './pages/App.vue';

import { createApp } from 'vue';

import router from './router';

const app = createApp(App)

app.use(router);

registerPlugins(app);

app.mount('#app');
