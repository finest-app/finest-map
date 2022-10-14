import useAppStore from 'App/shared/useAppStore'

const useIsLoggedIn = () => {
  const token = useAppStore(state => state.authToken?.token)

  return !!token
}

export default useIsLoggedIn
