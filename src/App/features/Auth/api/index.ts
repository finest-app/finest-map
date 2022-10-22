import { useMutation } from '@tanstack/react-query'
import { useNavigate, useLocation, type Location } from 'react-router-dom'
import axios from 'App/shared/axios'
import notify from 'App/shared/notify'
import useAppStore from 'App/shared/useAppStore'
import { LoginData, LoginDTO, SignUpDTO } from './types'

const AUTH_API_PATH = '/user'

export const useSignUp = () => {
  const navigate = useNavigate()

  const mutation = useMutation(
    (params: SignUpDTO) => axios.post(AUTH_API_PATH + '/sign_up', params),
    {
      onSuccess() {
        notify.success({ message: 'sign up was successful' })

        navigate('/login', { replace: true })
      }
    }
  )

  return mutation
}

export const useLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from =
    (location.state as { from?: Location } | null)?.from?.pathname ?? '/'

  const setAuthToken = useAppStore(state => state.setAuthToken)

  const mutation = useMutation(
    (params: LoginDTO) =>
      axios.post<unknown, LoginData>(AUTH_API_PATH + '/login', params),
    {
      onSuccess(data) {
        setAuthToken(data.authToken)

        navigate(from, { replace: true })
      }
    }
  )

  return mutation
}

export const useLogout = () => {
  const navigate = useNavigate()
  const removeAuthToken = useAppStore(state => state.removeAuthToken)

  const mutation = useMutation(() => axios.post(AUTH_API_PATH + '/logout'), {
    onSettled() {
      navigate('/', { replace: true })

      removeAuthToken()
    }
  })

  return mutation
}
