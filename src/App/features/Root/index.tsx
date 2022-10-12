import { AppShell, Header } from '@mantine/core'
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
      <Outlet />
      {/* Your application here */}
    </AppShell>
  )
}

export default Root
