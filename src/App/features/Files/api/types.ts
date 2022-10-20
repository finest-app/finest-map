export interface FileData {
  id: number
  name: string
  type: 'json' | 'md'
  kind: 'flow' | 'markdown'
  source_id: string
  owner_id: string
  createdAt: string
  updatedAt: string
}

export interface WithData<T> {
  data: T
}

export interface WithId {
  id: number
}

export interface SourceFileData {
  id: number
  file_id: string
  raw: string
}

export type CreateFileDTO = Pick<FileData, 'name' | 'kind'> &
  Pick<SourceFileData, 'raw'>

export interface RenameFileDTO extends WithId {
  name: string
}

export interface EditFileDTO extends WithId {
  raw: string
}

export type DeleteFileDTO = WithId
