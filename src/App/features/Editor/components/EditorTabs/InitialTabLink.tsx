import { Button } from '@mantine/core'
import { type TablerIcon } from '@tabler/icons'
import {
  type LinkProps,
  Link,
  useMatch,
  useResolvedPath
} from 'react-router-dom'
import useAppDrawerStore from 'App/features/Root/stores/useAppDrawerStore'
import useEditorTabsStore from 'App/features/Editor/stores/useEditorTabsStore'

type InitialTabLinkProps = LinkProps & {
  leftIcon: TablerIcon
  name: string
}

const InitialTabLink = ({ to, leftIcon, name }: InitialTabLinkProps) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  const close = useAppDrawerStore(state => state.close)

  const setLastEditedFileId = useEditorTabsStore(
    state => state.setLastEditedFileId
  )

  const LeftIcon = leftIcon

  return (
    <Button
      className="h-10"
      component={Link}
      to={to}
      onClick={() => {
        close()
        setLastEditedFileId(null)
      }}
      leftIcon={<LeftIcon size={20} />}
      fullWidth
      variant={match ? 'filled' : 'light'}>
      {name}
    </Button>
  )
}

export default InitialTabLink
