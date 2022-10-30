import { type ColorScheme, type MantineThemeColors } from '@mantine/core'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AppSettingsState {
  colorScheme: ColorScheme
  accentColor: keyof MantineThemeColors
}

const useAppSettingsStore = create<AppSettingsState>()(
  persist<AppSettingsState>(
    () => ({
      colorScheme: 'light',
      accentColor: 'red'
    }),
    { name: 'finest-map-settings-storage' }
  )
)

export default useAppSettingsStore
