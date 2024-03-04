import { createApp } from 'vue';
// import { router } from './router';
import { createPinia } from 'pinia'
import App from './App.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount('#app');
