import { Container, Paper } from '@mantine/core'
import AppearanceSettings from './AppearanceSettings'

const SettingsPage = () => {
  return (
    <Paper
      component={Container}
      className="min-h-full space-y-8 rounded-none xs:min-h-min xs:rounded-lg"
      size="md"
      p="md">
      <AppearanceSettings />
    </Paper>
  )
}

export default SettingsPage
