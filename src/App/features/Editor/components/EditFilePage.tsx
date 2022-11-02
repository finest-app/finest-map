import { Tabs } from '@mantine/core'
import dayjs from 'dayjs'
import { useFile } from 'App/features/Files/api'
import useFileId from '../hooks/useFileId'
import useEditorTabsStore from '../stores/useEditorTabsStore'
import FlowEditor from './FlowEditor'
import useSetlastEditedFileIdEffect from '../hooks/useSetlastEditedFileIdEffect'

const EditFilePage = () => {
  const tabs = useEditorTabsStore(state => state.tabs)
  const addTab = useEditorTabsStore(state => state.addTab)
  const setTab = useEditorTabsStore(state => state.setTab)
  const fileId = useFileId()

  useFile(
    { id: Number(fileId) },
    {
      onSuccess(file) {
        const tab = useEditorTabsStore.getState().getTab(file.id)

        if (tab) {
          if (dayjs(file.updatedAt).isAfter(tab.file.updatedAt)) {
            setTab(file)
          }
        } else {
          addTab(file)
        }
      }
    }
  )

  useSetlastEditedFileIdEffect()

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
