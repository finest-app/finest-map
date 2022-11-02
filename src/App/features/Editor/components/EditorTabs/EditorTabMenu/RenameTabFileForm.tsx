import { Button, TextInput } from '@mantine/core'
import { type FileData } from 'App/features/Files/api/types'
import { autocompleteTr } from 'App/i18n'
import useRenameTabFileForm from './useRenameTabFileForm'

type RenameTabFileFormProps = FileData

const RenameTabFileForm = (file: RenameTabFileFormProps) => {
  const { form, handleSubmit } = useRenameTabFileForm(file)

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

export default RenameTabFileForm
