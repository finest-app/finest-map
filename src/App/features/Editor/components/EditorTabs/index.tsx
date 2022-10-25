import { Paper, Tabs, Stack, ScrollArea } from '@mantine/core'
import { Outlet, useParams } from 'react-router-dom'
import { IconCloud } from '@tabler/icons'
import { Reorder } from 'framer-motion'
import InitialTabLink from './InitialTabLink'
import useEditFileNavigate from '../../hooks/useEditFileNavigate'
import useEditorTabsStore from '../../stores/useEditorTabsStore'
import EditorTab from './EditorTab'

const EditorTabs = () => {
  const goEditFile = useEditFileNavigate()

  const tabs = useEditorTabsStore(state => state.tabs)
  const onReorder = useEditorTabsStore(state => state.onReorder)

  const hasEditorTabs = !!tabs.length

  const { id: fileId } = useParams<'id'>()

  return (
    <Tabs
      className="h-full gap-md"
      variant="pills"
      value={fileId}
      onTabChange={value => value && goEditFile(value)}
      orientation="vertical"
      keepMounted={false}>
      <Stack className="min-w-[10rem]">
        <Paper p="xs">
          <InitialTabLink to="/files" leftIcon={IconCloud} />
        </Paper>
        {hasEditorTabs && (
          <Paper component={ScrollArea} p="xs">
            <Reorder.Group axis="y" values={tabs} onReorder={onReorder}>
              {tabs.map(tab => (
                <EditorTab key={tab.file.id} tab={tab} />
              ))}
            </Reorder.Group>
          </Paper>
        )}
      </Stack>
      <Outlet />
    </Tabs>
  )
}

export default EditorTabs
