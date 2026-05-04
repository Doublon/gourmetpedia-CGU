<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import { useFormattedDate } from '@/composables/useFormattedDate'

const LAST_UPDATED_ISO = '2026-05-03'
const CONTACT_EMAIL = 'support@gourmetpedia.com'

const route = useRoute()
const { t } = useI18n()
const { theme } = useTheme()

const locale = computed(() => route.params.locale as string)
const formattedDate = useFormattedDate(LAST_UPDATED_ISO)
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <router-link :to="`/${locale}/privacy`" class="footer__logo">
        <img
          :src="
            theme === 'dark'
              ? '/logos/splash_dark_transparent.png'
              : '/logos/splash_light_transparent.png'
          "
          alt="Gourmetpedia"
        />
      </router-link>

      <nav class="footer__nav">
        <router-link :to="`/${locale}/privacy`" class="footer__link">
          {{ t('nav.privacy') }}
        </router-link>
        <router-link :to="`/${locale}/terms`" class="footer__link">
          {{ t('nav.terms') }}
        </router-link>
        <router-link :to="`/${locale}/delete-account`" class="footer__link">
          {{ t('nav.deleteAccount') }}
        </router-link>
      </nav>

      <div class="footer__meta">
        <span>{{ t('footer.operator') }}</span>
        <a :href="`mailto:${CONTACT_EMAIL}`" class="footer__link">
          {{ CONTACT_EMAIL }}
        </a>
        <span>{{ t('page.updatedPrefix') }} {{ formattedDate }}</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-surface-alt);
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
}

.footer__logo img {
  height: 40px;
  width: auto;
  opacity: 0.85;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem 1rem;
}

.footer__link {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.15s ease;
}

.footer__link:hover,
.footer__link.router-link-active {
  color: var(--color-primary);
  text-decoration: none;
}

.footer__meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

@media (min-width: 768px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .footer__meta {
    align-items: flex-end;
  }
}
</style>
