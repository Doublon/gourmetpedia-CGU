<script setup lang="ts">
defineProps<{ id: string; title: string }>()
</script>

<template>
  <h2 :id="id" class="section-heading">
    <a :href="`#${id}`" class="section-heading__anchor" :aria-label="`Anchor link to: ${title}`">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    </a>
    <span class="section-heading__text">{{ title }}</span>
  </h2>
</template>

<style scoped>
.section-heading {
  scroll-margin-top: 96px;
  font-family: 'Newsreader', Georgia, serif;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 2.5rem 0 1rem;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.section-heading__anchor {
  display: inline-flex;
  align-items: center;
  color: var(--color-text-muted);
  opacity: 0.35;
  transition:
    opacity 0.15s ease,
    color 0.15s ease;
  flex-shrink: 0;
  text-decoration: none;
  transform: translateY(2px);
}

.section-heading__anchor:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.section-heading:target .section-heading__anchor {
  opacity: 1;
  color: var(--color-primary);
}

@media (min-width: 768px) {
  .section-heading__anchor {
    opacity: 0;
  }

  .section-heading:hover .section-heading__anchor,
  .section-heading__anchor:focus-visible {
    opacity: 1;
  }

  .section-heading {
    font-size: 1.5rem;
    margin-top: 3rem;
  }
}
</style>
