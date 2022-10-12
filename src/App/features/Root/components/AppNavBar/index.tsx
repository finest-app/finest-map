import { ActionIcon, Navbar, Tooltip } from '@mantine/core'
import { IconUser } from '@tabler/icons'
import { Link } from 'react-router-dom'

const AppNavBar = () => {
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
      </Navbar.Section>
    </Navbar>
  )
}

export default AppNavBar
