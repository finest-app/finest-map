import { z } from 'zod'

const RenameFileFormSchema = z.object({
  name: z.string().min(1).max(52)
})

export type RenameFileFormData = z.infer<typeof RenameFileFormSchema>

export default RenameFileFormSchema
