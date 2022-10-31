import { type ColorScheme, type MantineThemeColors } from '@mantine/core'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { subscribeWithSelector } from 'zustand/middleware'
import { type AppLanguage } from 'App/i18n/languages'

interface AppSettingsState {
  colorScheme: ColorScheme
  accentColor: keyof MantineThemeColors
  language: AppLanguage
}

const useAppSettingsStore = create<AppSettingsState>()(
  subscribeWithSelector(
    persist<AppSettingsState>(
      () => ({
        colorScheme: 'light',
        accentColor: 'red',
        language: 'cn'
      }),
      { name: 'finest-map-settings-storage' }
    )
  )
)

export default useAppSettingsStore
