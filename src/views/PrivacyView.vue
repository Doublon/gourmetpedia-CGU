<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LegalPage from '@/components/LegalPage.vue'
import { getContent } from '@/content'

const { locale } = useI18n()
const content = computed(() => getContent(locale.value, 'privacy'))
</script>

<template>
  <LegalPage :content="content" />
</template>
