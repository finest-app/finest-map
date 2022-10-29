import { Paper } from '@mantine/core'
import AppSpotlight from 'App/shared/components/AppSpotlight'
import { useFiles } from '../api'
import useFilesActions from '../hooks/useFilesActions'
import FilesList from './FilesList'
import FilesListItem from './FilesListItem'

const FilesPage = () => {
  const actions = useFilesActions()

  const filesQuery = useFiles()

  return (
    <Paper className="flex-1 p-xs xs:p-sm">
      <AppSpotlight actions={actions}>
        <FilesList>
          {filesQuery.data?.map(file => (
            <FilesListItem key={file.id} {...file} />
          ))}
        </FilesList>
      </AppSpotlight>
    </Paper>
  )
}

export default FilesPage
