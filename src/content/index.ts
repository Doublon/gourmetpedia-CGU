import type { PageContent, PageKey } from './types'
import enPrivacy from './en/privacy'
import enTerms from './en/terms'
import enDeleteAccount from './en/deleteAccount'
import frPrivacy from './fr/privacy'
import frTerms from './fr/terms'
import frDeleteAccount from './fr/deleteAccount'
import dePrivacy from './de/privacy'
import deTerms from './de/terms'
import deDeleteAccount from './de/deleteAccount'
import nlPrivacy from './nl/privacy'
import nlTerms from './nl/terms'
import nlDeleteAccount from './nl/deleteAccount'
import ptPrivacy from './pt/privacy'
import ptTerms from './pt/terms'
import ptDeleteAccount from './pt/deleteAccount'
import itPrivacy from './it/privacy'
import itTerms from './it/terms'
import itDeleteAccount from './it/deleteAccount'
import esPrivacy from './es/privacy'
import esTerms from './es/terms'
import esDeleteAccount from './es/deleteAccount'

const content: Record<string, Partial<Record<PageKey, PageContent>>> = {
  en: { privacy: enPrivacy, terms: enTerms, deleteAccount: enDeleteAccount },
  fr: { privacy: frPrivacy, terms: frTerms, deleteAccount: frDeleteAccount },
  de: { privacy: dePrivacy, terms: deTerms, deleteAccount: deDeleteAccount },
  nl: { privacy: nlPrivacy, terms: nlTerms, deleteAccount: nlDeleteAccount },
  pt: { privacy: ptPrivacy, terms: ptTerms, deleteAccount: ptDeleteAccount },
  it: { privacy: itPrivacy, terms: itTerms, deleteAccount: itDeleteAccount },
  es: { privacy: esPrivacy, terms: esTerms, deleteAccount: esDeleteAccount },
}

export function getContent(locale: string, page: PageKey): PageContent {
  return content[locale]?.[page] ?? content.en![page]!
}
