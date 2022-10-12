import { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }: PropsWithChildren<unknown>) => {
  const isLoggedIn = false
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default RequireAuth
