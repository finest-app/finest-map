import { ActionIcon, Tooltip, type TooltipProps } from '@mantine/core'
import {
  Link,
  type LinkProps,
  useMatch,
  useResolvedPath
} from 'react-router-dom'
import { type TablerIcon } from '@tabler/icons'

type NavbarLinkProps = LinkProps &
  Pick<TooltipProps, 'label'> & {
    icon: TablerIcon
  }

const NavbarLink = ({ label, to, icon }: NavbarLinkProps) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname + '/*', end: true })
  const Icon = icon

  return (
    <Tooltip position="right" label={label}>
      <ActionIcon
        component={Link}
        to={to}
        size="xl"
        radius="lg"
        {...(match && { variant: 'gradient' })}>
        <Icon />
      </ActionIcon>
    </Tooltip>
  )
}

export default NavbarLink
