import AppSpotlight from 'App/shared/components/AppSpotlight'
import useFilesActions from '../hooks/useFilesActions'

const FilesPage = () => {
  const actions = useFilesActions()

  return (
    <AppSpotlight actions={actions}>
      <div>FilesPage</div>
    </AppSpotlight>
  )
}

export default FilesPage
