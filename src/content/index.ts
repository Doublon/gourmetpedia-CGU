import type { PageContent, PageKey } from './types'
import enPrivacy from './en/privacy'
import enTerms from './en/terms'
import enDeleteAccount from './en/deleteAccount'

const content: Record<string, Partial<Record<PageKey, PageContent>>> = {
  en: {
    privacy: enPrivacy,
    terms: enTerms,
    deleteAccount: enDeleteAccount,
  },
}

export function getContent(locale: string, page: PageKey): PageContent {
  return content[locale]?.[page] ?? content.en![page]!
}
