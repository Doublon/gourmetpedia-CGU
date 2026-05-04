<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import { LOCALES } from '@/i18n'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { theme, toggle: toggleTheme } = useTheme()

const menuOpen = ref(false)
const locale = computed(() => route.params.locale as string)
const logoSrc = computed(
  () =>
    `${import.meta.env.BASE_URL}logos/${
      theme.value === 'dark' ? 'banner_dark.png' : 'banner_light.png'
    }`,
)

function onLocaleChange(event: Event) {
  const newLocale = (event.target as HTMLSelectElement).value
  const newPath = route.path.replace(/^\/[^/]+/, `/${newLocale}`)
  router.push(newPath)
  menuOpen.value = false
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar__inner">
      <router-link :to="`/${locale}/privacy`" class="navbar__logo" @click="closeMenu">
        <img
          :src="logoSrc"
          alt="Gourmetpedia"
        />
      </router-link>

      <button
        class="navbar__burger"
        :class="{ 'is-active': menuOpen }"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <svg
          v-if="!menuOpen"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          v-else
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <nav class="navbar__nav" :class="{ 'is-open': menuOpen }">
        <router-link :to="`/${locale}/privacy`" class="nav-link" @click="closeMenu">
          {{ t('nav.privacy') }}
        </router-link>
        <router-link :to="`/${locale}/terms`" class="nav-link" @click="closeMenu">
          {{ t('nav.terms') }}
        </router-link>
        <router-link :to="`/${locale}/delete-account`" class="nav-link" @click="closeMenu">
          {{ t('nav.deleteAccount') }}
        </router-link>

        <div class="navbar__controls">
          <select
            class="lang-select"
            :value="locale"
            :aria-label="t('lang.label')"
            @change="onLocaleChange"
          >
            <option v-for="loc in LOCALES" :key="loc" :value="loc">
              {{ loc.toUpperCase() }}
            </option>
          </select>

          <button class="theme-btn" :aria-label="t('theme.toggle')" @click="toggleTheme">
            <svg
              v-if="theme === 'dark'"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
              />
            </svg>
            <svg
              v-else
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.navbar__inner {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.navbar__logo img {
  height: 56px;
  width: auto;
}

.navbar__burger {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-text);
  padding: 4px;
}

.navbar__nav {
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 1.25rem;
}

.navbar__nav.is-open {
  display: flex;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-muted);
  padding: 0.5rem 0;
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
  text-decoration: none;
}

.navbar__controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border);
  margin-top: 0.25rem;
}

.lang-select {
  appearance: none;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text-muted);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.lang-select:hover {
  border-color: var(--color-primary);
  color: var(--color-text);
}

.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  color: var(--color-text-muted);
  padding: 0.3rem;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.theme-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-text);
}

@media (min-width: 768px) {
  .navbar__inner {
    height: 88px;
  }

  .navbar__logo img {
    height: 64px;
  }

  .navbar__burger {
    display: none;
  }

  .navbar__nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    position: static;
    background: none;
    border: none;
    padding: 0;
  }

  .nav-link {
    padding: 0;
  }

  .navbar__controls {
    padding-top: 0;
    border-top: none;
    margin-top: 0;
    padding-left: 0.5rem;
    border-left: 1px solid var(--color-border);
  }
}
</style>
