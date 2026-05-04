import { createRouter, createWebHistory } from 'vue-router'
import { LOCALES } from '@/i18n'
import PrivacyView from '@/views/PrivacyView.vue'
import TermsView from '@/views/TermsView.vue'
import DeleteAccountView from '@/views/DeleteAccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', redirect: '/en/privacy' },
    {
      path: '/:locale',
      beforeEnter: (to) => {
        const locale = to.params.locale as string
        if (!LOCALES.includes(locale as (typeof LOCALES)[number])) {
          return '/en/privacy'
        }
      },
      children: [
        { path: '', redirect: (to) => `/${to.params.locale}/privacy` },
        { path: 'privacy', component: PrivacyView },
        { path: 'terms', component: TermsView },
        { path: 'delete-account', component: DeleteAccountView },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/en/privacy' },
  ],
})

export default router
