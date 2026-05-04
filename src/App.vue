<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { LOCALES, type Locale } from '@/i18n'
import NavBar from '@/components/NavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

const route = useRoute()
const { locale } = useI18n()

watch(
  () => route.params.locale,
  (val) => {
    if (val && LOCALES.includes(val as Locale)) {
      locale.value = val as Locale
    }
  },
  { immediate: true },
)
</script>

<template>
  <NavBar />
  <RouterView />
  <TheFooter />
</template>
