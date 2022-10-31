import { type PropsWithChildren } from 'react'
import { Tabs } from '@mantine/core'
import useAppDrawerStore from 'App/features/Root/stores/useAppDrawerStore'
import useEditFileNavigate from '../../hooks/useEditFileNavigate'
import useFileId from '../../hooks/useFileId'

const EditorTabsContainer = ({ children }: PropsWithChildren<unknown>) => {
  const goEditFile = useEditFileNavigate()

  const fileId = useFileId()

  const close = useAppDrawerStore(state => state.close)

  return (
    <Tabs
      className="h-full gap-md"
      variant="pills"
      value={fileId}
      onTabChange={value => {
        value && goEditFile(value)
        close()
      }}
      orientation="vertical"
      keepMounted={false}>
      {children}
    </Tabs>
  )
}

export default EditorTabsContainer
