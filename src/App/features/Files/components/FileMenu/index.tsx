import { Menu } from '@mantine/core'
import { openModal } from '@mantine/modals'
import { IconEdit, IconPencilMinus, IconTrash } from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import { useDeleteFile } from '../../api'
import { type FileData } from '../../api/types'
import RenameFileForm from './RenameFileForm'

type FilesListItemMenuProps = FileData

const MENU_ICON_SIZE = 14

const FileMenu = (file: FilesListItemMenuProps) => {
  const { id } = file
  const navigate = useNavigate()
  const deleteMutation = useDeleteFile()

  const handleEdit = () => {
    navigate(`${id}/edit`)
  }

  const handleRename = () => {
    openModal({
      title: 'Rename File',
      children: <RenameFileForm {...file} />
    })
  }

  const handleDelete = () => {
    deleteMutation.mutate({ id })
  }

  return (
    <>
      <Menu.Item icon={<IconEdit size={MENU_ICON_SIZE} />} onClick={handleEdit}>
        Edit
      </Menu.Item>
      <Menu.Item
        icon={<IconPencilMinus size={MENU_ICON_SIZE} />}
        onClick={handleRename}>
        Rename
      </Menu.Item>
      <Menu.Item
        color="red"
        icon={<IconTrash size={MENU_ICON_SIZE} />}
        onClick={handleDelete}>
        Delete
      </Menu.Item>
    </>
  )
}
export default FileMenu
