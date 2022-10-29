import { Drawer } from '@mantine/core'
import useAppDrawerStore from 'App/features/Root/stores/useAppDrawerStore'
import EditorTabsList from './EditorTabsList'

const EditorTabsDrawer = () => {
  const { opened, toggle } = useAppDrawerStore()

  return (
    <Drawer
      className="xs:hidden"
      opened={opened}
      onClose={toggle}
      title="Tabs"
      size="sm"
      padding="md">
      <EditorTabsList />
    </Drawer>
  )
}

export default EditorTabsDrawer
