import { useEffect } from 'react'
import useEditorTabsStore from '../stores/useEditorTabsStore'
import useFileId from './useFileId'

const useSetlastEditedFileIdEffect = () => {
  const fileId = useFileId()
  const getTab = useEditorTabsStore(state => state.getTab)

  const setLastEditedFileId = useEditorTabsStore(
    state => state.setLastEditedFileId
  )

  useEffect(() => {
    const hasTab = !!getTab(Number(fileId))

    setLastEditedFileId(hasTab ? Number(fileId) : null)
  }, [fileId, getTab, setLastEditedFileId])
}

export default useSetlastEditedFileIdEffect
