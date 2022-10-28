import { Paper, Tabs, Stack } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { IconCloud } from '@tabler/icons'
import { Reorder } from 'framer-motion'
import AppSuspense from 'App/shared/components/AppSuspense'
import InitialTabLink from './InitialTabLink'
import useEditFileNavigate from '../../hooks/useEditFileNavigate'
import useEditorTabsStore from '../../stores/useEditorTabsStore'
import EditorTab from './EditorTab'
import useFileId from '../../hooks/useFileId'

const EditorTabs = () => {
  const goEditFile = useEditFileNavigate()

  const tabs = useEditorTabsStore(state => state.tabs)
  const onReorder = useEditorTabsStore(state => state.onReorder)

  const hasEditorTabs = !!tabs.length

  const fileId = useFileId()

  return (
    <Tabs
      className="h-full gap-md"
      variant="pills"
      value={fileId}
      onTabChange={value => value && goEditFile(value)}
      orientation="vertical"
      keepMounted={false}>
      <Paper className="h-fit min-w-[10rem]">
        <Stack spacing="xs" p="xs">
          <section>
            <InitialTabLink to="/files" leftIcon={IconCloud} />
          </section>
          {hasEditorTabs && (
            <Reorder.Group axis="y" values={tabs} onReorder={onReorder}>
              {tabs.map(tab => (
                <EditorTab key={tab.file.id} tab={tab} />
              ))}
            </Reorder.Group>
          )}
        </Stack>
      </Paper>
      <AppSuspense>
        <Outlet />
      </AppSuspense>
    </Tabs>
  )
}

export default EditorTabs
