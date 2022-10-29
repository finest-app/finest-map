import { Paper, Tabs } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import AppSuspense from 'App/shared/components/AppSuspense'
import useEditFileNavigate from '../../hooks/useEditFileNavigate'
import useFileId from '../../hooks/useFileId'
import EditorTabsList from './EditorTabsList'
import EditorTabsDrawer from './EditorTabsDrawer'
import useAppDrawerStore from 'App/features/Root/stores/useAppDrawerStore'

const EditorTabs = () => {
  const goEditFile = useEditFileNavigate()

  const fileId = useFileId()

  const close = useAppDrawerStore(state => state.close)

  return (
    <Tabs
      className="h-full gap-md"
      variant="pills"
      value={fileId}
      onTabChange={value => {
        value && goEditFile(value)
        close()
      }}
      orientation="vertical"
      keepMounted={false}>
      <Paper
        className="hidden h-fit w-44 flex-shrink-0 basis-44 xs:block"
        p="xs">
        <EditorTabsList />
      </Paper>
      <EditorTabsDrawer />
      <AppSuspense>
        <Outlet />
      </AppSuspense>
    </Tabs>
  )
}

export default EditorTabs
