import { useMemo } from 'react'
import { type SpotlightAction } from '@mantine/spotlight'
import { useNavigate } from 'react-router-dom'
import { IconFile } from '@tabler/icons'

const useFilesActions = () => {
  const navigate = useNavigate()

  const actions = useMemo<SpotlightAction[]>(
    () => [
      {
        title: 'New mind map',
        description: 'Create a new mind map',
        async onTrigger() {
          navigate('create')
        },
        icon: <IconFile size={18} />
      }
    ],
    [navigate]
  )

  return actions
}
export default useFilesActions
