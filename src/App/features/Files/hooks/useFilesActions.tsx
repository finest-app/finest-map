import { useMemo } from 'react'
import { type SpotlightAction } from '@mantine/spotlight'
import { IconFile } from '@tabler/icons'
import { useCreateFile } from '../api'
import useEditFileNavigate from 'App/features/Editor/hooks/useEditFileNavigate'
import useEditorTabsStore from 'App/features/Editor/stores/useEditorTabsStore'
import initialFlowJsonObject from 'App/features/Editor/utils/initialFlowJsonObject'

const useFilesActions = () => {
  const goEditFile = useEditFileNavigate()
  const createFileMutation = useCreateFile()
  const addTab = useEditorTabsStore(state => state.addTab)

  const actions = useMemo<SpotlightAction[]>(
    () => [
      {
        title: 'New mind map',
        description: 'Create a new mind map',
        async onTrigger() {
          const file = await createFileMutation.mutateAsync({
            kind: 'flow',
            name: 'untitled file',
            raw: JSON.stringify(initialFlowJsonObject)
          })

          addTab(file)

          goEditFile(file.id)
        },
        icon: <IconFile size={18} />
      }
    ],
    [addTab, createFileMutation, goEditFile]
  )

  return actions
}

export default useFilesActions
