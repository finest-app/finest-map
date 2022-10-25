import { useNavigate } from 'react-router-dom'

const useEditFileNavigate = () => {
  const navigate = useNavigate()

  return (fileId: string | number) => navigate(`/files/${fileId}/edit`)
}

export default useEditFileNavigate
