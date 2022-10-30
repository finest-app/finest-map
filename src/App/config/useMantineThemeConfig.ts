import { useMemo } from 'react'
import { MantineThemeOverride } from '@mantine/core'
import useAppSettingsStore from 'App/features/Settings/stores/useAppSettingsStore'

const useMantineThemeConfig = () => {
  const colorScheme = useAppSettingsStore(state => state.colorScheme)
  const accentColor = useAppSettingsStore(state => state.accentColor)

  return useMemo<MantineThemeOverride>(
    () => ({
      colorScheme,
      primaryColor: accentColor,
      defaultRadius: 'md',
      globalStyles: () => ({
        'ol,ul,menu': {
          listStyle: 'none',
          margin: 0,
          padding: 0
        }
      }),
      components: {
        Select: {
          defaultProps: {
            variant: 'filled',
            transition: 'scale-y',
            transitionDuration: 150
          }
        }
      }
    }),
    [accentColor, colorScheme]
  )
}

export default useMantineThemeConfig
