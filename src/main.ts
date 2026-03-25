import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import { i18n } from './i18n'

createApp(App).use(router).use(MotionPlugin).use(i18n).mount('#app')
