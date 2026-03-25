import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

let rawLocale = navigator.language?.split('-')[0] || 'es'
const supportedLocales = ['es', 'en']
if (!supportedLocales.includes(rawLocale)) {
  rawLocale = 'en'
}

export const i18n = createI18n({
  legacy: false, // para Composition API
  locale: localStorage.getItem('user-locale') || rawLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})
