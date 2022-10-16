import { useMemo } from 'react'
import { type SpotlightAction } from '@mantine/spotlight'
import { IconFile } from '@tabler/icons'

const useFilesActions = () => {
  const actions = useMemo<SpotlightAction[]>(
    () => [
      {
        title: 'New mind map',
        description: 'Create a new mind map',
        onTrigger: () => {
          //todo
        },
        icon: <IconFile size={18} />
      }
    ],
    []
  )

  return actions
}
export default useFilesActions
