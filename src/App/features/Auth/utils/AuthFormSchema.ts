import { z } from 'zod'
import regex from 'App/shared/regex'

const AuthFormSchema = z.object({
  name: z.string().regex(regex.userName),
  email: z.string().email(),
  password: z.string().regex(regex.password)
})

export type AuthFormData = z.infer<typeof AuthFormSchema>

export default AuthFormSchema
