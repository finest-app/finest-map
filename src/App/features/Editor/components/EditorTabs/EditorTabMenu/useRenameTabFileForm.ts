import { useForm, zodResolver } from '@mantine/form'
import { closeAllModals } from '@mantine/modals'
import useEditorTabsStore from 'App/features/Editor/stores/useEditorTabsStore'
import { type FileData } from 'App/features/Files/api/types'
import RenameFileFormSchema, {
  type RenameFileFormData
} from 'App/features/Files/utils/RenameFileFormSchema'

const useRenameTabFileForm = (file: FileData) => {
  const form = useForm<RenameFileFormData>({
    validate: zodResolver(RenameFileFormSchema),
    validateInputOnBlur: true,
    initialValues: {
      name: file.name
    }
  })

  const setTab = useEditorTabsStore(state => state.setTab)

  const handleSubmit = form.onSubmit(async values => {
    if (values.name !== file.name) {
      setTab({ ...file, ...values })
    }

    closeAllModals()
  })

  return { form, handleSubmit }
}

export default useRenameTabFileForm
