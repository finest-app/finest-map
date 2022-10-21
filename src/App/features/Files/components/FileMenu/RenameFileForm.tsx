import { Button, TextInput } from '@mantine/core'
import useRenameFileForm from './useRenameFileForm'
import { type FileData } from '../../api/types'

type RenameFileFormProps = FileData

const RenameFileForm = (file: RenameFileFormProps) => {
  const { form, handleSubmit } = useRenameFileForm(file)

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

export default RenameFileForm
