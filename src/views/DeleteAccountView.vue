<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="page">
    <div class="container page__content">
      <h1>{{ t('nav.deleteAccount') }}</h1>
      <p class="page__placeholder">Content coming in step 2.</p>
    </div>
  </main>
</template>

<style scoped>
.page {
  flex: 1;
  padding: 2.5rem 0 4rem;
}

.page__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.page__placeholder {
  color: var(--color-text-muted);
}
</style>
