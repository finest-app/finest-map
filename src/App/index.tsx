import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { Talkr } from 'talkr'
import mantineTheme from 'App/config/mantineTheme'
import router from 'App/router'
import languages from './i18n/languages'

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
      <Talkr languages={languages} defaultLanguage="en_us">
        <RouterProvider router={router} />
      </Talkr>
    </MantineProvider>
  )
}

export default App
