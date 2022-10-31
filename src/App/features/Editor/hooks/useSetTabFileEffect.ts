import { useCallback, useEffect } from 'react'
import { useBeforeunload } from 'react-beforeunload'
import { useEditFile } from 'App/features/Files/api'
import useEditorTabsStore from '../stores/useEditorTabsStore'
import useFileId from './useFileId'
import useFlowStore from './useFlowStore'

const useSetTabFileEffect = () => {
  const fileId = useFileId()

  const getFlowInstanceObject = useFlowStore(
    state => state.getFlowInstanceObject
  )

  const editFileMutation = useEditFile()
  const editFileMutateAsync = editFileMutation.mutateAsync

  const setTabFile = useEditorTabsStore(state => state.setTabFile)

  const setTabFileHandler = useCallback(async () => {
    const fileName = useEditorTabsStore.getState().getTab(Number(fileId))
      ?.file.name

    const flowInstanceObject = getFlowInstanceObject()

    if (fileId && fileName && flowInstanceObject) {
      const raw = JSON.stringify(flowInstanceObject)

      await editFileMutateAsync({ id: Number(fileId), name: fileName, raw })

      setTabFile(Number(fileId), raw)
    }
  }, [fileId, getFlowInstanceObject, editFileMutateAsync, setTabFile])

  useBeforeunload(() => {
    setTabFileHandler()

    return `You'll lose your data!`
  })

  useEffect(() => {
    return () => {
      setTabFileHandler()
    }
  }, [setTabFileHandler])
}

export default useSetTabFileEffect
