import { useEffect } from 'react'
import useEditorTabsStore from 'App/features/Editor/stores/useEditorTabsStore'
import useEditFileNavigate from 'App/features/Editor/hooks/useEditFileNavigate'

const useGoLastEditedFileEffect = () => {
  const lastEditedFileId = useEditorTabsStore(state => state.lastEditedFileId)
  const setLastEditedFileId = useEditorTabsStore(
    state => state.setLastEditedFileId
  )
  const getTab = useEditorTabsStore(state => state.getTab)

  const goEditFile = useEditFileNavigate()

  useEffect(() => {
    if (lastEditedFileId && getTab(lastEditedFileId)) {
      goEditFile(lastEditedFileId)
      setLastEditedFileId(null)
    }
  }, [getTab, goEditFile, lastEditedFileId, setLastEditedFileId])
}

export default useGoLastEditedFileEffect
