import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
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

const FILES_API_PATH = '/files'

export const filesKeys = createQueryKeys('files', {
  show: (fileId: number) => fileId
})

export const useFiles = () => {
  const isLoggedIn = useIsLoggedIn()

  const query = useQuery(
    filesKeys._def,
    () => axios.get<unknown, FileData[] | null>(FILES_API_PATH),
    {
      enabled: isLoggedIn
    }
  )

  return query
}

export const useFile = ({ id }: WithId) => {
  const isLoggedIn = useIsLoggedIn()

  const query = useQuery(
    filesKeys.show(id),
    () => axios.get<FileData | null>(FILES_API_PATH + '/' + id),
    {
      enabled: isLoggedIn
    }
  )

  return query
}

export const useCreateFile = () => {
  const mutation = useMutation((params: CreateFileDTO) =>
    axios.post(FILES_API_PATH, params)
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
  const mutation = useMutation(({ id, ...params }: EditFileDTO) => {
    return axios.patch(FILES_API_PATH + '/edit/' + id, params)
  })

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
        notify.success({ message: 'Successfully deleted' })
        queryClient.invalidateQueries({ queryKey: filesKeys._def })
      }
    }
  )

  return mutation
}
