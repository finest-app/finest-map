import { useForm, zodResolver } from '@mantine/form'
import AuthFormSchema, { type AuthFormData } from '../../utils/AuthFormSchema'

const useSignUpForm = () => {
  const form = useForm<AuthFormData>({
    validate: zodResolver(AuthFormSchema),
    validateInputOnBlur: true,
    initialValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const handleSubmit = form.onSubmit(values => {
    console.log(values)
  })

  return { form, handleSubmit }
}

export default useSignUpForm
