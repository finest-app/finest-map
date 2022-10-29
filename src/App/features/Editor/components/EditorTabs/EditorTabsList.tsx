import { Tabs } from '@mantine/core'
import { IconCloud } from '@tabler/icons'
import { Reorder } from 'framer-motion'
import useEditorTabsStore from '../../stores/useEditorTabsStore'
import EditorTab from './EditorTab'
import InitialTabLink from './InitialTabLink'

const EditorTabsList = () => {
  const tabs = useEditorTabsStore(state => state.tabs)
  const onReorder = useEditorTabsStore(state => state.onReorder)
  const hasEditorTabs = !!tabs.length

  return (
    <Tabs.List className="flex-nowrap gap-xs">
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
    </Tabs.List>
  )
}
export default EditorTabsList
