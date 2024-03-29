import { Paper } from '@mantine/core'
import AppSpotlight from 'App/shared/components/AppSpotlight'
import { useFiles } from '../api'
import useFilesActions from '../hooks/useFilesActions'
import useGoLastEditedFileEffect from '../hooks/useGoLastEditedFileEffect'
import CreateFileFab from './CreateFileFab'
import FilesList from './FilesList'
import FilesListItem from './FilesListItem'

const FilesPage = () => {
  const actions = useFilesActions()

  const filesQuery = useFiles()

  useGoLastEditedFileEffect()

  return (
    <Paper className="flex-1 p-xs xs:p-lg">
      <AppSpotlight actions={actions}>
        <FilesList>
          {filesQuery.data?.map(file => (
            <FilesListItem key={file.id} {...file} />
          ))}
        </FilesList>
      </AppSpotlight>
      <CreateFileFab />
    </Paper>
  )
}

export default FilesPage
