import Axios, { AxiosError, AxiosRequestConfig } from 'axios'
import env from './env'
import notify from './notify'
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
      (error.response?.data as { message?: string })?.message ?? error.message

    notify.error({ message })

    switch (error.response?.status) {
      case 401:
        useAppStore.getState().removeAuthToken()
        break
    }

    return Promise.reject(error)
  }
)

export default axios
