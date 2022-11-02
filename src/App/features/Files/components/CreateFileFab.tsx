import { ActionIcon, Affix, Tooltip, useMantineTheme } from '@mantine/core'
import { IconPlus } from '@tabler/icons'
import useEditFileNavigate from 'App/features/Editor/hooks/useEditFileNavigate'
import useEditorTabsStore from 'App/features/Editor/stores/useEditorTabsStore'
import initialFlowJsonObject from 'App/features/Editor/utils/initialFlowJsonObject'
import { useAutocompleteT } from 'App/i18n'
import { useCreateFile } from '../api'

const CreateFileFab = () => {
  const theme = useMantineTheme()

  const goEditFile = useEditFileNavigate()
  const createFileMutation = useCreateFile()
  const addTab = useEditorTabsStore(state => state.addTab)

  const { T } = useAutocompleteT()

  const handleClick = async () => {
    const file = await createFileMutation.mutateAsync({
      kind: 'flow',
      name: T('files.untitled_file'),
      raw: JSON.stringify(initialFlowJsonObject)
    })

    addTab(file)

    goEditFile(file.id)
  }

  return (
    <Affix position={{ bottom: 24, right: 24 }}>
      <Tooltip label={T('files.create_a_new_file')} openDelay={500}>
        <ActionIcon
          variant="filled"
          sx={{ boxShadow: theme.shadows.md }}
          className="h-14 w-14"
          onClick={handleClick}
          color={theme.primaryColor}
          radius="xl">
          <IconPlus size={24} />
        </ActionIcon>
      </Tooltip>
    </Affix>
  )
}

export default CreateFileFab
