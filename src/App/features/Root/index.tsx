import { AppShell, Header } from '@mantine/core'
import AppSuspense from 'App/shared/components/AppSuspense'
import { Outlet } from 'react-router-dom'
import AppNavBar from './components/AppNavBar'

const Root = () => {
  return (
    <AppShell
      padding="md"
      navbar={<AppNavBar />}
      header={
        <Header height={56} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      })}>
      <AppSuspense>
        <Outlet />
        {/* Your application here */}
      </AppSuspense>
    </AppShell>
  )
}

export default Root
