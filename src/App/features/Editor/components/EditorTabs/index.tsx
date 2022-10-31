import { Paper } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import AppSuspense from 'App/shared/components/AppSuspense'
import EditorTabsList from './EditorTabsList'
import EditorTabsContainer from './EditorTabsContainer'

const EditorTabs = () => {
  return (
    <EditorTabsContainer>
      <Paper
        className="hidden h-fit w-44 flex-shrink-0 basis-44 xs:block"
        p="xs">
        <EditorTabsList />
      </Paper>
      <AppSuspense>
        <Outlet />
      </AppSuspense>
    </EditorTabsContainer>
  )
}

export default EditorTabs
