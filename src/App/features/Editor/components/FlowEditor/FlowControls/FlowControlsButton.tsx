import { ActionIcon, Tooltip, TooltipProps } from '@mantine/core'
import { type TablerIcon } from '@tabler/icons'

type FlowControlsButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> &
  Pick<TooltipProps, 'label'> & {
    icon: TablerIcon
  }

const FlowControlsButton = ({
  icon,
  label,
  onClick
}: FlowControlsButtonProps) => {
  const Icon = icon

  return (
    <Tooltip label={label} position="right" offset={14}>
      <ActionIcon radius="xl" onClick={onClick}>
        <Icon size={20} />
      </ActionIcon>
    </Tooltip>
  )
}

export default FlowControlsButton
