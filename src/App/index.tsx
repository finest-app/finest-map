import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { Talkr } from 'talkr'
import { QueryClientProvider } from '@tanstack/react-query'
import mantineTheme from 'App/config/mantineTheme'
import router from 'App/router'
import languages from './i18n/languages'
import queryClient from './config/queryClient'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <Talkr languages={languages} defaultLanguage="en_us">
          <RouterProvider router={router} />
        </Talkr>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
