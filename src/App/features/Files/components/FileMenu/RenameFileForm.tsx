import { Button, TextInput } from '@mantine/core'
import useRenameFileForm from './useRenameFileForm'
import { autocompleteTr } from 'App/i18n'
import { type FileData } from '../../api/types'

type RenameFileFormProps = FileData

const RenameFileForm = (file: RenameFileFormProps) => {
  const { form, handleSubmit } = useRenameFileForm(file)

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label={autocompleteTr('files.new_file_name')}
        placeholder={autocompleteTr('files.file_name')}
        data-autofocus
        {...form.getInputProps('name')}
      />
      <Button type="submit" fullWidth mt="md">
        {autocompleteTr('form.submit')}
      </Button>
    </form>
  )
}

export default RenameFileForm
