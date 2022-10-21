import { useForm, zodResolver } from '@mantine/form'
import { closeAllModals } from '@mantine/modals'
import { useRenameFile } from '../../api'
import { type FileData } from '../../api/types'
import RenameFileFormSchema, {
  RenameFileFormData
} from '../../utils/RenameFileFormSchema'

const useRenameFileForm = (file: FileData) => {
  const renameFileMutation = useRenameFile()

  const form = useForm<RenameFileFormData>({
    validate: zodResolver(RenameFileFormSchema),
    validateInputOnBlur: true,
    initialValues: {
      name: file.name
    }
  })

  const handleSubmit = form.onSubmit(async values => {
    if (values.name !== file.name) {
      await renameFileMutation.mutateAsync({ ...values, id: file.id })
    }

    closeAllModals()
  })

  return { form, handleSubmit }
}

export default useRenameFileForm
