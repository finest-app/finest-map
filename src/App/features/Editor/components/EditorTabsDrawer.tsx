import { Drawer } from '@mantine/core'
import useAppDrawerStore from 'App/features/Root/stores/useAppDrawerStore'
import { useAutocompleteT } from 'App/i18n'
import EditorTabsContainer from './EditorTabs/EditorTabsContainer'
import EditorTabsList from './EditorTabs/EditorTabsList'

const EditorTabsDrawer = () => {
  const { opened, toggle } = useAppDrawerStore()

  const { T } = useAutocompleteT()

  return (
    <EditorTabsContainer>
      <Drawer
        className="xs:hidden"
        opened={opened}
        onClose={toggle}
        title={T('editor.tabs')}
        size="sm"
        padding="md">
        <EditorTabsList />
      </Drawer>
    </EditorTabsContainer>
  )
}

export default EditorTabsDrawer
