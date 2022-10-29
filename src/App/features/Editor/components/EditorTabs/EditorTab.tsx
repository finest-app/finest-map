import { type MouseEventHandler } from 'react'
import { Tabs, Menu, createStyles, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconFile } from '@tabler/icons'
import { Reorder } from 'framer-motion'
import { type EditorTabData } from 'App/features/Editor/stores/useEditorTabsStore'
import useEditFileNavigate from '../../hooks/useEditFileNavigate'
import EditorTabMenu from './EditorTabMenu'

const useStyles = createStyles(() => ({
  tabLabel: {
    '&>.mantine-Tabs-tabLabel': {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }
}))

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

  const { classes, cx } = useStyles()

  return (
    <Menu
      opened={opened}
      onClose={toggle}
      withinPortal
      shadow="md"
      position="right-start">
      <Menu.Target>
        <Reorder.Item value={tab} onContextMenu={handleContextMenu}>
          <Tooltip label={file.name} position="bottom-end" openDelay={500}>
            <Tabs.Tab
              className={cx('w-full transition-colors', classes.tabLabel)}
              icon={<IconFile size={20} />}
              key={file.id}
              value={file.id.toString()}
              onPointerDown={handlePointerDown}>
              {file.name}
            </Tabs.Tab>
          </Tooltip>
        </Reorder.Item>
      </Menu.Target>
      <Menu.Dropdown>
        <EditorTabMenu {...file} />
      </Menu.Dropdown>
    </Menu>
  )
}

export default EditorTab
