import { type MouseEventHandler } from 'react'
import {
  Anchor,
  Image,
  Menu,
  Paper,
  Stack,
  Text,
  createStyles
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import { type FileData } from '../api/types'
import { reactFlowLogo } from 'App/features/Files/assets'
import FileMenu from './FileMenu'

const useStyles = createStyles(theme => ({
  image: {
    backgroundColor: theme.colors.gray[2],
    padding: theme.spacing.xs
  },
  selected: {
    outlineColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[3],
    outlineStyle: 'solid',
    outlineWidth: 1
  }
}))

type FilesListItemProps = FileData

const FilesListItem = (file: FilesListItemProps) => {
  const { id, name } = file

  const [opened, { toggle }] = useDisclosure(false)

  const handleContextMenu: MouseEventHandler<HTMLLIElement> = event => {
    event.preventDefault()
    toggle()
  }

  const { classes, cx } = useStyles()

  return (
    <Paper
      component="li"
      className={cx('basis-24 bg-transparent', opened && classes.selected)}
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
                classNames={{ image: classes.image }}
                px="xs"
                src={reactFlowLogo}
                radius="md"
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
