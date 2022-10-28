import { Button } from '@mantine/core'
import { type TablerIcon } from '@tabler/icons'
import {
  type LinkProps,
  Link,
  useMatch,
  useResolvedPath
} from 'react-router-dom'

type InitialTabLinkProps = LinkProps & {
  leftIcon: TablerIcon
}

const InitialTabLink = ({ to, leftIcon }: InitialTabLinkProps) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  const LeftIcon = leftIcon

  return (
    <Button
      className="h-10"
      component={Link}
      to={to}
      leftIcon={<LeftIcon size={20} />}
      fullWidth
      variant={match ? 'gradient' : 'light'}>
      Files
    </Button>
  )
}

export default InitialTabLink
