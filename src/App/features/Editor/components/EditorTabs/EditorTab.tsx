import { type MouseEventHandler } from 'react'
import { Tabs, Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconFile } from '@tabler/icons'
import { Reorder } from 'framer-motion'
import { type EditorTabData } from 'App/features/Editor/stores/useEditorTabsStore'
import useEditFileNavigate from '../../hooks/useEditFileNavigate'
import EditorTabMenu from './EditorTabMenu'

type EditorTabProps = {
  tab: EditorTabData
}

const EditorTab = ({ tab }: EditorTabProps) => {
  const { file } = tab

  const [opened, { toggle }] = useDisclosure(false)

  const handleContextMenu: MouseEventHandler<HTMLLIElement> = event => {
    event.preventDefault()
    toggle()
  }

  const goEditFile = useEditFileNavigate()

  const handlePointerDown = () => {
    goEditFile(file.id)
  }

  return (
    <Menu
      opened={opened}
      onClose={toggle}
      withinPortal
      shadow="md"
      position="right-start">
      <Menu.Target>
        <Reorder.Item value={tab} onContextMenu={handleContextMenu}>
          <Tabs.Tab
            className="w-full transition-colors"
            icon={<IconFile size={20} />}
            key={file.id}
            value={file.id.toString()}
            onPointerDown={handlePointerDown}>
            {file.name}
          </Tabs.Tab>
        </Reorder.Item>
      </Menu.Target>
      <Menu.Dropdown>
        <EditorTabMenu {...file} />
      </Menu.Dropdown>
    </Menu>
  )
}

export default EditorTab
