import { Drawer } from '@mantine/core'
import useAppDrawerStore from 'App/features/Root/stores/useAppDrawerStore'
import EditorTabsContainer from './EditorTabs/EditorTabsContainer'
import EditorTabsList from './EditorTabs/EditorTabsList'

const EditorTabsDrawer = () => {
  const { opened, toggle } = useAppDrawerStore()

  return (
    <EditorTabsContainer>
      <Drawer
        className="xs:hidden"
        opened={opened}
        onClose={toggle}
        title="Tabs"
        size="sm"
        padding="md">
        <EditorTabsList />
      </Drawer>
    </EditorTabsContainer>
  )
}

export default EditorTabsDrawer
