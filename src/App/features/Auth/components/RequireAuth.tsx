import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useIsLoggedIn from 'App/features/Auth/hooks/useIsLoggedIn'

const RequireAuth = ({ children }: PropsWithChildren<unknown>) => {
  const isLoggedIn = useIsLoggedIn()
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default RequireAuth
