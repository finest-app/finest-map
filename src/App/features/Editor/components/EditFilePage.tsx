import { Tabs } from '@mantine/core'
import { useFile } from 'App/features/Files/api'
import useFileId from '../hooks/useFileId'
import useEditorTabsStore from '../stores/useEditorTabsStore'
import FlowEditor from './FlowEditor'

const EditFilePage = () => {
  const tabs = useEditorTabsStore(state => state.tabs)
  const addTab = useEditorTabsStore(state => state.addTab)
  const fileId = useFileId()

  useFile(
    { id: Number(fileId) },
    {
      onSuccess(file) {
        addTab(file)
      }
    }
  )

  return (
    <>
      {tabs.map(({ file }) => (
        <Tabs.Panel key={file.id} value={file.id.toString()}>
          <FlowEditor file={file} />
        </Tabs.Panel>
      ))}
    </>
  )
}

export default EditFilePage
