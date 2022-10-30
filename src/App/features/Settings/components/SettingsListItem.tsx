import { type ReactNode } from 'react'
import { Divider, List, Text } from '@mantine/core'

interface SettingsListItemProps {
  name: string
  control: ReactNode
}

const SettingsListItem = ({ name, control }: SettingsListItemProps) => {
  return (
    <>
      <List.Item>
        <Text>{name}</Text>
        {control}
      </List.Item>
      <Divider mt="md" />
    </>
  )
}

export default SettingsListItem
