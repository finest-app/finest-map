import { useForm, zodResolver } from '@mantine/form'
import AuthFormSchema, { type AuthFormData } from '../../utils/AuthFormSchema'

const LoginFormSchema = AuthFormSchema.pick({ email: true, password: true })
type LoginFormData = Omit<AuthFormData, 'name'>

const useLoginForm = () => {
  const form = useForm<LoginFormData>({
    validate: zodResolver(LoginFormSchema),
    initialValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = form.onSubmit(values => {
    console.log(values)
  })

  return { form, handleSubmit }
}

export default useLoginForm
