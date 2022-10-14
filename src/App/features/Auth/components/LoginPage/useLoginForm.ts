import { useForm, zodResolver } from '@mantine/form'
import { useLogin } from '../../api'
import AuthFormSchema, { type AuthFormData } from '../../utils/AuthFormSchema'

const LoginFormSchema = AuthFormSchema.pick({ email: true, password: true })
type LoginFormData = Omit<AuthFormData, 'name'>

const useLoginForm = () => {
  const loginMutation = useLogin()

  const form = useForm<LoginFormData>({
    validate: zodResolver(LoginFormSchema),
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = form.onSubmit(values => {
    loginMutation.mutate(values)
  })

  const isLoading = loginMutation.isLoading

  return { form, handleSubmit, isLoading }
}

export default useLoginForm
