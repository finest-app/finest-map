import { Navbar, Stack } from '@mantine/core'
import { IconFiles, IconUser, IconLogout, IconSettings } from '@tabler/icons'
import { useLogout } from 'App/features/Auth/api'
import useIsLoggedIn from 'App/features/Auth/hooks/useIsLoggedIn'
import { useAutocompleteT } from 'App/i18n'
import NavbarButton from './NavbarButton'
import NavbarLink from './NavbarLink'

const AppNavBar = () => {
  const isLoggedIn = useIsLoggedIn()
  const logoutMutation = useLogout()

  const { T } = useAutocompleteT()

  return (
    <Navbar className="justify-between" width={{ base: 64 }} px="xs" py="md">
      {/* Navbar content */}
      <Navbar.Section component={Stack}>
        <NavbarLink label={T('navbar.files')} to="/files" icon={IconFiles} />
        <NavbarLink label={T('navbar.account')} to="/account" icon={IconUser} />
        <NavbarLink
          label={T('navbar.settings')}
          to="/settings"
          icon={IconSettings}
        />
      </Navbar.Section>
      <Navbar.Section component={Stack}>
        {isLoggedIn && (
          <NavbarButton
            label={T('navbar.logout')}
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
