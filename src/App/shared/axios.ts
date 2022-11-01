import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import env from './env'
import notify from './notify'
import { autocompleteTr } from 'App/i18n'
import useAppStore from './useAppStore'

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const authToken = useAppStore.getState().authToken

  if (authToken && config.headers) {
    Object.assign(config.headers, {
      Authorization: `Bearer ${authToken.token}`
    })
  }

  return config
}

const axios = Axios.create({
  baseURL: env.BASE_API_PATH
})

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(
  response => {
    return response.data.data
  },
  (error: AxiosError) => {
    const message =
      (error.response?.data as { data?: { message?: string } })?.data
        ?.message ?? error.message

    switch (error.response?.status) {
      case 401:
        useAppStore.getState().removeAuthToken()

        if (message === 'Invalid credentials') {
          notify.error({ message: autocompleteTr('auth.login_failure') })
        }

        break
      default:
        notify.error({ message })
        break
    }

    return Promise.reject(error)
  }
)

export default axios
