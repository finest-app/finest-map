import { MouseEventHandler, useReducer } from 'react'
import {
  Anchor,
  Image,
  type ImageProps,
  Menu,
  Paper,
  Stack,
  Text
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { type FileData } from '../api/types'
import { reactFlowLogo } from 'App/features/Files/assets'
import FileMenu from './FileMenu'

const imageStyles: ImageProps['styles'] = theme => ({
  image: {
    backgroundColor: theme.colors.gray[2],
    padding: theme.spacing.xs
  }
})

type FilesListItemProps = FileData

const FilesListItem = (file: FilesListItemProps) => {
  const { id, name } = file

  const [opened, toggle] = useReducer(value => !value, false)

  const handleContextMenu: MouseEventHandler<HTMLLIElement> = event => {
    event.preventDefault()
    toggle()
  }

  return (
    <Paper
      component="li"
      className="w-24 bg-transparent"
      onContextMenu={handleContextMenu}>
      <Menu opened={opened} onClose={toggle} shadow="md" position="right-end">
        <Menu.Target>
          <Anchor
            component={Link}
            className="block"
            variant="text"
            to={`${id}/edit`}>
            <Stack align="center" py="sm" spacing={6}>
              <Image
                px="xs"
                src={reactFlowLogo}
                radius="md"
                styles={imageStyles}
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
