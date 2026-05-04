import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'

export function useFormattedDate(iso: string): ComputedRef<string> {
  const { locale } = useI18n()
  return computed(() =>
    new Intl.DateTimeFormat(locale.value, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso)),
  )
}
