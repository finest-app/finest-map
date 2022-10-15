import { Navbar, Stack } from '@mantine/core'
import { IconUser, IconLogout } from '@tabler/icons'
import { useLogout } from 'App/features/Auth/api'
import useIsLoggedIn from 'App/features/Auth/hooks/useIsLoggedIn'
import NavbarButton from './NavbarButton'
import NavbarLink from './NavbarLink'

const AppNavBar = () => {
  const isLoggedIn = useIsLoggedIn()
  const logoutMutation = useLogout()

  return (
    <Navbar width={{ base: 64 }} p="xs">
      {/* Navbar content */}
      <Navbar.Section component={Stack}>
        <NavbarLink label="Account" to="/account" icon={IconUser} />
        {isLoggedIn && (
          <NavbarButton
            label="Logout"
            icon={IconLogout}
            onClick={() => {
              logoutMutation.mutate()
            }}
          />
        )}
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavBar
