import { MantineThemeOverride } from '@mantine/core'

const mantineTheme: MantineThemeOverride = {
  primaryColor: 'red',
  defaultRadius: 'md',
  loader: 'bars',
  globalStyles: () => ({
    'ol,ul,menu': {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  })
}

export default mantineTheme
