import { createI18n } from 'vue-i18n'
import en from './locales/en'
import fr from './locales/fr'
import de from './locales/de'
import nl from './locales/nl'
import pt from './locales/pt'
import it from './locales/it'
import es from './locales/es'

export const LOCALES = ['en', 'fr', 'de', 'nl', 'pt', 'it', 'es'] as const
export type Locale = (typeof LOCALES)[number]

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, fr, de, nl, pt, it, es },
})
