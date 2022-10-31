import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { RouterProvider } from 'react-router-dom'
import { Talkr } from 'talkr'
import { QueryClientProvider } from '@tanstack/react-query'
import useMantineThemeConfig from './config/useMantineThemeConfig'
import router from 'App/router'
import languages from './i18n/languages'
import queryClient from './config/queryClient'
import './config/dayjsConfig'
import useAppSettingsStore from './features/Settings/stores/useAppSettingsStore'
import SyncSettingsLanguage from './i18n/SyncSettingsLanguage'

const App = () => {
  const mantineThemeConfig = useMantineThemeConfig()

  const language = useAppSettingsStore.getState().language

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={mantineThemeConfig}>
        <NotificationsProvider position="top-center">
          <ModalsProvider>
            <Talkr languages={languages} defaultLanguage={language}>
              <SyncSettingsLanguage>
                <RouterProvider router={router} />
              </SyncSettingsLanguage>
            </Talkr>
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
