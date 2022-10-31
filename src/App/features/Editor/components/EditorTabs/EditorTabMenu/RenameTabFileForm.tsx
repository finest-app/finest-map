import { Button, TextInput } from '@mantine/core'
import { type FileData } from 'App/features/Files/api/types'
import useRenameTabFileForm from './useRenameTabFileForm'

type RenameTabFileFormProps = FileData

const RenameTabFileForm = (file: RenameTabFileFormProps) => {
  const { form, handleSubmit } = useRenameTabFileForm(file)

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="New File name"
        placeholder="File ame"
        data-autofocus
        {...form.getInputProps('name')}
      />
      <Button type="submit" fullWidth mt="md">
        Submit
      </Button>
    </form>
  )
}

export default RenameTabFileForm
