import { useForm, zodResolver } from '@mantine/form'
import { useSignUp } from '../../api'
import AuthFormSchema, { type AuthFormData } from '../../utils/AuthFormSchema'

const useSignUpForm = () => {
  const signUpMutation = useSignUp()

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
    signUpMutation.mutate(values)
  })

  const isLoading = signUpMutation.isLoading

  return { form, handleSubmit, isLoading }
}

export default useSignUpForm
