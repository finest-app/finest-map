import { z } from 'zod'
import regex from 'App/shared/regex'
import { autocompleteTr } from 'App/i18n'

const AuthFormSchema = z.object({
  name: z
    .string()
    .regex(regex.userName, { message: autocompleteTr('form.invalid_name') }),
  email: z.string().email({ message: autocompleteTr('form.invalid_email') }),
  password: z
    .string()
    .regex(regex.password, { message: autocompleteTr('form.invalid_password') })
})

export type AuthFormData = z.infer<typeof AuthFormSchema>

export default AuthFormSchema
