import { ActionIcon, Tooltip, type TooltipProps } from '@mantine/core'
import { type TablerIcon } from '@tabler/icons'

type NavbarLinkProps = Pick<TooltipProps, 'label'> &
  Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
    icon: TablerIcon
  }

const NavbarButton = ({ label, onClick, icon }: NavbarLinkProps) => {
  const Icon = icon

  return (
    <Tooltip position="right" label={label}>
      <ActionIcon size="xl" radius="lg" onClick={onClick}>
        <Icon />
      </ActionIcon>
    </Tooltip>
  )
}

export default NavbarButton
