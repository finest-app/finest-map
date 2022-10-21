import { type PropsWithChildren } from 'react'
import { List } from '@mantine/core'

const FilesList = ({ children }: PropsWithChildren<unknown>) => {
  return <List className="flex gap-xl">{children}</List>
}

export default FilesList
