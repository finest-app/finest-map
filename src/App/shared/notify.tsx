import { showNotification, NotificationProps } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons'

const notify = {
  success(props: NotificationProps) {
    showNotification({
      color: 'green',
      icon: <IconCheck size={18} />,
      ...props
    })
  },
  error(props: NotificationProps) {
    showNotification({ color: 'red', icon: <IconX size={18} />, ...props })
  }
}

export default notify
