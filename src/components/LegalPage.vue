<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { PageContent } from '@/content/types'
import { useFormattedDate } from '@/composables/useFormattedDate'
import SectionHeading from './SectionHeading.vue'
import ContentBlock from './ContentBlock.vue'

const props = defineProps<{ content: PageContent }>()
const { t } = useI18n()

const formattedDate = useFormattedDate(props.content.lastUpdatedISO)
</script>

<template>
  <main class="page">
    <article class="container page__article">
      <header class="page__header">
        <h1 class="page__title">{{ content.title }}</h1>
        <p class="page__updated">{{ t('page.updatedPrefix') }} {{ formattedDate }}</p>
      </header>

      <div v-if="content.intro.length" class="page__intro">
        <ContentBlock
          v-for="(block, i) in content.intro"
          :key="`intro-${i}`"
          :block="block"
        />
      </div>

      <nav class="toc" :aria-label="t('page.contents')">
        <h2 class="toc__title">{{ t('page.contents') }}</h2>
        <ol class="toc__list">
          <li v-for="section in content.sections" :key="section.id">
            <a :href="`#${section.id}`">{{ section.title }}</a>
          </li>
        </ol>
      </nav>

      <section v-for="section in content.sections" :key="section.id" class="page__section">
        <SectionHeading :id="section.id" :title="section.title" />
        <ContentBlock
          v-for="(block, i) in section.blocks"
          :key="`${section.id}-${i}`"
          :block="block"
        />
      </section>
    </article>
  </main>
</template>

<style scoped>
.page {
  flex: 1;
  padding: 2rem 0 4rem;
}

.page__article {
  display: flex;
  flex-direction: column;
}

.page__header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.page__title {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.15;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.page__updated {
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.page__intro {
  margin-bottom: 1.5rem;
}

.toc {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0 2rem;
}

.toc__title {
  font-family: 'Geist', ui-sans-serif, system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

.toc__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toc__list a {
  display: inline-block;
  font-size: 0.875rem;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.15rem 0;
  transition: color 0.15s ease;
}

.toc__list a:hover {
  color: var(--color-primary);
}

.page__section {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .page {
    padding: 3rem 0 5rem;
  }

  .page__title {
    font-size: 2.5rem;
  }
}
</style>
