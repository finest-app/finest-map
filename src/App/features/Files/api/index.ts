import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryOptions
} from '@tanstack/react-query'
import { createQueryKeys } from '@lukemorales/query-key-factory'
import axios from 'App/shared/axios'
import useIsLoggedIn from 'App/features/Auth/hooks/useIsLoggedIn'
import {
  CreateFileDTO,
  DeleteFileDTO,
  EditFileDTO,
  FileData,
  RenameFileDTO,
  WithId
} from './types'
import notify from 'App/shared/notify'
import { autocompleteTr } from 'App/i18n'

const FILES_API_PATH = '/files'

export const filesKeys = createQueryKeys('files', {
  show: (fileId: number) => fileId
})

export const useFiles = () => {
  const isLoggedIn = useIsLoggedIn()

  const query = useQuery(
    filesKeys._def,
    () => axios.get<unknown, Omit<FileData[], 'sourceFile'>>(FILES_API_PATH),
    {
      enabled: isLoggedIn
    }
  )

  return query
}

export const useFile = (
  { id }: WithId,
  options?: Pick<UseQueryOptions<FileData>, 'onSuccess'>
) => {
  const isLoggedIn = useIsLoggedIn()

  const query = useQuery(
    filesKeys.show(id),
    () => axios.get<FileData>(FILES_API_PATH + '/' + id),
    {
      enabled: isLoggedIn,
      ...options
    }
  )

  return query
}

export const useCreateFile = () => {
  const mutation = useMutation((params: CreateFileDTO) =>
    axios.post<unknown, FileData>(FILES_API_PATH, params)
  )

  return mutation
}

export const useRenameFile = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation(
    ({ id, ...params }: RenameFileDTO) => {
      return axios.patch(FILES_API_PATH + '/rename/' + id, params)
    },
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: filesKeys._def })
      }
    }
  )

  return mutation
}

export const useEditFile = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation(
    ({ id, ...params }: EditFileDTO) => {
      return axios.patch(FILES_API_PATH + '/edit/' + id, params)
    },
    {
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: filesKeys._def })
      }
    }
  )

  return mutation
}

export const useDeleteFile = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation(
    ({ id }: DeleteFileDTO) => {
      return axios.delete(FILES_API_PATH + '/delete/' + id)
    },
    {
      onSuccess() {
        notify.success({
          message: autocompleteTr('files.successfully_deleted')
        })
        queryClient.invalidateQueries({ queryKey: filesKeys._def })
      }
    }
  )

  return mutation
}
