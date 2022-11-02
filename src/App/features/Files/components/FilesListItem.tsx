import { type MouseEventHandler } from 'react'
import { Anchor, Image, Menu, Paper, Stack, Text, clsx } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import { type FileData } from '../api/types'
import { flowIcon } from 'App/features/Files/assets'
import FileMenu from './FileMenu'

type FilesListItemProps = FileData

const FilesListItem = (file: FilesListItemProps) => {
  const { id, name } = file

  const [opened, { toggle }] = useDisclosure(false)

  const handleContextMenu: MouseEventHandler<HTMLLIElement> = event => {
    event.preventDefault()
    toggle()
  }

  return (
    <Paper
      component="li"
      className="basis-20 bg-transparent"
      onContextMenu={handleContextMenu}>
      <Menu opened={opened} onClose={toggle} shadow="md" position="right-start">
        <Menu.Target>
          <Anchor
            component={Link}
            className="block"
            variant="text"
            to={`${id}/edit`}>
            <Stack align="center" spacing={4}>
              <Image
                classNames={{ image: clsx(opened && 'brightness-75') }}
                src={flowIcon}
                alt="mind map"
              />
              <Text
                className="break-all"
                size="sm"
                align="center"
                lineClamp={2}>
                {name}
              </Text>
            </Stack>
          </Anchor>
        </Menu.Target>
        <Menu.Dropdown>
          <FileMenu {...file} />
        </Menu.Dropdown>
      </Menu>
    </Paper>
  )
}

export default FilesListItem
