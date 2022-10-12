import {
  RequireAuth,
  AccountPage,
  SignUpPage,
  LoginPage
} from 'App/features/Auth/components'
import Root from 'App/features/Root'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path="account"
        element={
          <RequireAuth>
            <AccountPage />
          </RequireAuth>
        }
      />
      <Route path="sign_up" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  )
)

export default router
