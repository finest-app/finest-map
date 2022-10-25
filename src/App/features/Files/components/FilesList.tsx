import { type PropsWithChildren } from 'react'
import { List } from '@mantine/core'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const FilesList = ({ children }: PropsWithChildren<unknown>) => {
  const [parent] = useAutoAnimate<HTMLUListElement>()

  return (
    <List ref={parent} className="flex gap-md">
      {children}
    </List>
  )
}

export default FilesList
