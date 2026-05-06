import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { LOCALES } from '@/i18n'

type SeoPageKey = 'privacy' | 'terms' | 'deleteAccount' | 'notFound'

const HREFLANG_ATTR = 'data-seo-hreflang'
const SITE_NAME = 'Gourmetpedia'
const DEFAULT_ORIGIN = 'https://legal.getgourmetpedia.com'
const SOCIAL_IMAGE_PATH = '/og/gourmetpedia-preview.png'

function setMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setPropertyMeta(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setHreflangAlternates(canonicalPath: string) {
  document
    .querySelectorAll(`link[${HREFLANG_ATTR}]`)
    .forEach((el) => el.parentNode?.removeChild(el))

  const basePath = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`

  for (const loc of LOCALES) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', loc)
    link.setAttribute(
      'href',
      new URL(`${basePath}${loc}${canonicalPath}`, window.location.origin).href,
    )
    link.setAttribute(HREFLANG_ATTR, '')
    document.head.appendChild(link)
  }

  const xDefault = document.createElement('link')
  xDefault.setAttribute('rel', 'alternate')
  xDefault.setAttribute('hreflang', 'x-default')
  xDefault.setAttribute(
    'href',
    new URL(`${basePath}en${canonicalPath}`, window.location.origin).href,
  )
  xDefault.setAttribute(HREFLANG_ATTR, '')
  document.head.appendChild(xDefault)
}

function getAbsoluteUrl(path: string) {
  const origin = window.location.origin || DEFAULT_ORIGIN
  return new URL(path, origin).href
}

export function useSeo(pageKey: SeoPageKey) {
  const { t, locale } = useI18n()
  const route = useRoute()

  watchEffect(() => {
    const title = t(`seo.${pageKey}.title`)
    const description = t(`seo.${pageKey}.description`)

    document.title = title
    document.documentElement.lang = locale.value
    setMeta('description', description)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', getAbsoluteUrl(SOCIAL_IMAGE_PATH))
    setMeta('twitter:image:alt', `${SITE_NAME} preview`)

    setPropertyMeta('og:site_name', SITE_NAME)
    setPropertyMeta('og:title', title)
    setPropertyMeta('og:description', description)
    setPropertyMeta('og:type', 'website')
    setPropertyMeta('og:url', getAbsoluteUrl(route.fullPath))
    setPropertyMeta('og:image', getAbsoluteUrl(SOCIAL_IMAGE_PATH))
    setPropertyMeta('og:image:secure_url', getAbsoluteUrl(SOCIAL_IMAGE_PATH))
    setPropertyMeta('og:image:type', 'image/png')
    setPropertyMeta('og:image:width', '1200')
    setPropertyMeta('og:image:height', '630')
    setPropertyMeta('og:image:alt', `${SITE_NAME} preview`)

    const pagePath = route.path.replace(/^\/[^/]+/, '') || '/privacy'
    setHreflangAlternates(pagePath)
  })
}
