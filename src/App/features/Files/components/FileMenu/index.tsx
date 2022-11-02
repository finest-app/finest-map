import { Menu } from '@mantine/core'
import { openModal } from '@mantine/modals'
import { IconEdit, IconPencilMinus, IconTrash } from '@tabler/icons'
import useEditorTabsStore from 'App/features/Editor/stores/useEditorTabsStore'
import useEditFileNavigate from 'App/features/Editor/hooks/useEditFileNavigate'
import { useAutocompleteT } from 'App/i18n'
import { useDeleteFile } from '../../api'
import { type FileData } from '../../api/types'
import RenameFileForm from './RenameFileForm'

type FilesListItemMenuProps = FileData

const MENU_ICON_SIZE = 14

const FileMenu = (file: FilesListItemMenuProps) => {
  const { id } = file
  const goEditFile = useEditFileNavigate()
  const deleteMutation = useDeleteFile()
  const closeTab = useEditorTabsStore(state => state.closeTab)

  const handleEdit = () => {
    goEditFile(id)
  }

  const handleRename = () => {
    openModal({
      title: T('files.rename_file'),
      children: <RenameFileForm {...file} />
    })
  }

  const handleDelete = async () => {
    await deleteMutation.mutateAsync({ id })
    closeTab(id)
  }

  const { T } = useAutocompleteT()

  return (
    <>
      <Menu.Item icon={<IconEdit size={MENU_ICON_SIZE} />} onClick={handleEdit}>
        {T('files.edit')}
      </Menu.Item>
      <Menu.Item
        icon={<IconPencilMinus size={MENU_ICON_SIZE} />}
        onClick={handleRename}>
        {T('files.rename')}
      </Menu.Item>
      <Menu.Item
        color="red"
        icon={<IconTrash size={MENU_ICON_SIZE} />}
        onClick={handleDelete}>
        {T('files.delete')}
      </Menu.Item>
    </>
  )
}
export default FileMenu
