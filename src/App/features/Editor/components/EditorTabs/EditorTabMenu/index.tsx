import { Menu } from '@mantine/core'
import { IconPencilMinus, IconX } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import useEditFileNavigate from 'App/features/Editor/hooks/useEditFileNavigate'
import useEditorTabsStore from 'App/features/Editor/stores/useEditorTabsStore'
import { type FileData } from 'App/features/Files/api/types'

const MENU_ICON_SIZE = 14

type EditorTabMenuProps = FileData

const EditorTabMenu = ({ id }: EditorTabMenuProps) => {
  const closeTab = useEditorTabsStore(state => state.closeTab)
  const navigate = useNavigate()
  const goEditFile = useEditFileNavigate()

  const handleCloseTab = () => {
    const nextTabFileId = closeTab(id)

    if (nextTabFileId !== null) {
      goEditFile(nextTabFileId)
    } else {
      navigate('/files')
    }
  }

  return (
    <>
      <Menu.Item icon={<IconPencilMinus size={MENU_ICON_SIZE} />}>
        Rename
      </Menu.Item>
      <Menu.Item
        icon={<IconX size={MENU_ICON_SIZE} />}
        onClick={handleCloseTab}>
        Close
      </Menu.Item>
    </>
  )
}

export default EditorTabMenu
