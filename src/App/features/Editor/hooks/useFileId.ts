import { useParams } from 'react-router-dom'

const useFileId = () => {
  const { id: fileId } = useParams<'id'>()

  return fileId
}

export default useFileId
