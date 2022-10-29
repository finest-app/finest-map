import { AppShell, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import AppSuspense from 'App/shared/components/AppSuspense'
import { Outlet } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppNavBar from './components/AppNavBar'

const Root = () => {
  const theme = useMantineTheme()
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.xs}px)`)

  return (
    <AppShell
      padding={matches ? 'md' : 0}
      navbar={<AppNavBar />}
      header={<AppHeader />}
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
