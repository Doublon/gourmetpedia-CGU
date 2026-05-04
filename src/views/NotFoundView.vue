<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { LOCALES, type Locale } from '@/i18n'
import { useSeo } from '@/composables/useSeo'

const route = useRoute()
const { t } = useI18n()

useSeo('notFound')

const locale = computed<Locale>(() => {
  const routeLocale = route.params.locale
  const value = Array.isArray(routeLocale) ? routeLocale[0] : routeLocale

  return LOCALES.includes(value as Locale) ? (value as Locale) : 'en'
})
</script>

<template>
  <main class="not-found">
    <div class="container not-found__inner">
      <p class="not-found__eyebrow">{{ t('notFound.eyebrow') }}</p>
      <h1>{{ t('notFound.title') }}</h1>
      <p class="not-found__message">{{ t('notFound.message') }}</p>

      <div class="not-found__actions">
        <RouterLink class="not-found__primary" :to="`/${locale}/privacy`">
          {{ t('notFound.primaryAction') }}
        </RouterLink>
        <RouterLink class="not-found__secondary" :to="`/${locale}/terms`">
          {{ t('notFound.secondaryAction') }}
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  min-height: 60dvh;
  padding: 4rem 0;
}

.not-found__inner {
  max-width: 680px;
}

.not-found__eyebrow {
  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.not-found h1 {
  margin-bottom: 1rem;
}

.not-found__message {
  color: var(--color-text-muted);
  font-size: 1rem;
  max-width: 36rem;
}

.not-found__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.not-found__primary,
.not-found__secondary {
  align-items: center;
  border-radius: 6px;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.7rem 1rem;
  text-decoration: none;
}

.not-found__primary {
  background-color: var(--color-primary);
  color: var(--color-bg);
}

.not-found__secondary {
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.not-found__primary:hover,
.not-found__secondary:hover {
  text-decoration: none;
}

@media (min-width: 768px) {
  .not-found h1 {
    font-size: 2.5rem;
  }
}
</style>
