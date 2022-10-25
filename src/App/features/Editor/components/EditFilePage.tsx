import { Tabs } from '@mantine/core'
import { useFile } from 'App/features/Files/api'
import { useParams } from 'react-router-dom'
import useEditorTabsStore from '../stores/useEditorTabsStore'
import FlowEditor from './FlowEditor'

const EditFilePage = () => {
  const tabs = useEditorTabsStore(state => state.tabs)
  const addTab = useEditorTabsStore(state => state.addTab)
  const { id: fileId } = useParams<'id'>()

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
