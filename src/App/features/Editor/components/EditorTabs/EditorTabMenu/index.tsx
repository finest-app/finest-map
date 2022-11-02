import { Menu } from '@mantine/core'
import { openModal } from '@mantine/modals'
import { IconPencilMinus, IconX } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import useEditFileNavigate from 'App/features/Editor/hooks/useEditFileNavigate'
import useEditorTabsStore from 'App/features/Editor/stores/useEditorTabsStore'
import { useAutocompleteT } from 'App/i18n'
import { type FileData } from 'App/features/Files/api/types'
import RenameTabFileForm from './RenameTabFileForm'

const MENU_ICON_SIZE = 14

type EditorTabMenuProps = FileData

const EditorTabMenu = (file: EditorTabMenuProps) => {
  const closeTab = useEditorTabsStore(state => state.closeTab)
  const navigate = useNavigate()
  const goEditFile = useEditFileNavigate()

  const { T } = useAutocompleteT()

  const handleRename = () => {
    openModal({
      title: T('files.rename_file'),
      children: <RenameTabFileForm {...file} />
    })
  }

  const handleCloseTab = () => {
    const nextTabFileId = closeTab(file.id)

    if (nextTabFileId !== null) {
      goEditFile(nextTabFileId)
    } else {
      navigate('/files')
    }
  }

  return (
    <>
      <Menu.Item
        icon={<IconPencilMinus size={MENU_ICON_SIZE} />}
        onClick={handleRename}>
        {T('files.rename')}
      </Menu.Item>
      <Menu.Item
        icon={<IconX size={MENU_ICON_SIZE} />}
        onClick={handleCloseTab}>
        {T('editor.close_tab')}
      </Menu.Item>
    </>
  )
}

export default EditorTabMenu
