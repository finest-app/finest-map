import { ActionIcon, Navbar, Tooltip } from '@mantine/core'
import { IconUser, IconLogout } from '@tabler/icons'
import { Link } from 'react-router-dom'
import { useLogout } from 'App/features/Auth/api'
import useIsLoggedIn from 'App/features/Auth/hooks/useIsLoggedIn'

const AppNavBar = () => {
  const isLoggedIn = useIsLoggedIn()
  const logoutMutation = useLogout()

  return (
    <Navbar width={{ base: 64 }} p="xs">
      {/* Navbar content */}
      <Navbar.Section>{null}</Navbar.Section>
      <Navbar.Section>
        <Tooltip label="Account" position="right">
          <ActionIcon
            component={Link}
            to="/account"
            size="xl"
            radius="lg"
            variant="gradient">
            <IconUser />
          </ActionIcon>
        </Tooltip>
        {isLoggedIn && (
          <Tooltip label="Logout" position="right">
            <ActionIcon
              size="xl"
              radius="lg"
              loading={logoutMutation.isLoading}
              onClick={() => {
                logoutMutation.mutate()
              }}>
              <IconLogout />
            </ActionIcon>
          </Tooltip>
        )}
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavBar
