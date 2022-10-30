import { type PropsWithChildren } from 'react'
import { List, Title } from '@mantine/core'

interface SettingsListProps {
  title: string
}

const SettingsList = ({
  children,
  title
}: PropsWithChildren<SettingsListProps>) => {
  return (
    <List
      classNames={{
        itemWrapper:
          'w-full flex-row flex-wrap items-center justify-between gap-xs'
      }}
      className="space-y-md">
      <Title order={2} mb="md">
        {title}
      </Title>
      {children}
    </List>
  )
}
export default SettingsList
