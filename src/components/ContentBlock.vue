<script setup lang="ts">
import type { Block } from '@/content/types'

defineProps<{ block: Block }>()
</script>

<template>
  <p v-if="block.kind === 'p'" class="block-p" v-html="block.html" />
  <h3 v-else-if="block.kind === 'h3'" class="block-h3">{{ block.text }}</h3>
  <ul v-else-if="block.kind === 'ul'" class="block-ul">
    <li v-for="(item, i) in block.items" :key="i" v-html="item" />
  </ul>
  <aside v-else-if="block.kind === 'note'" class="block-note" v-html="block.html" />
</template>

<style scoped>
.block-p {
  font-size: 0.9375rem;
  line-height: 1.65;
  margin: 0.5rem 0;
  color: var(--color-text);
}

.block-h3 {
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 1.5rem 0 0.5rem;
  color: var(--color-text);
}

.block-ul {
  list-style: disc;
  padding-left: 1.4rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.block-ul li {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text);
}

.block-note {
  border-left: 3px solid var(--color-primary);
  background-color: var(--color-surface-alt);
  padding: 0.875rem 1rem;
  border-radius: 0 6px 6px 0;
  margin: 1rem 0;
  font-size: 0.9375rem;
  line-height: 1.6;
}

:deep(a) {
  color: var(--color-info);
  text-decoration: underline;
  text-underline-offset: 2px;
}

:deep(a:hover) {
  text-decoration: none;
}

:deep(strong) {
  font-weight: 600;
}
</style>
