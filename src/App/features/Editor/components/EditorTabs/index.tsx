import { Paper, Tabs, Stack } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { IconCloud } from '@tabler/icons'
import InitialTabLink from './InitialTabLink'

const EditorTabs = () => {
  return (
    <Tabs
      className="h-full gap-md"
      variant="pills"
      defaultValue="cloud"
      orientation="vertical"
      keepMounted={false}>
      <Stack className="min-w-[10rem]">
        <Paper p="xs">
          <InitialTabLink to="/files" leftIcon={IconCloud} />
        </Paper>
      </Stack>
      <Outlet />
    </Tabs>
  )
}

export default EditorTabs
