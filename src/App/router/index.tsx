import {
  RequireAuth,
  AccountPage,
  SignUpPage,
  LoginPage
} from 'App/features/Auth/components'
import LoginPageLayout from 'App/features/Auth/components/LoginPageLayout'
import Root from 'App/features/Root'
import { FilesPage } from 'App/features/Files/components'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Navigate
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<Root />}>
        <Route index element={<Navigate to="/files" replace />} />
        <Route path="files" element={<FilesPage />} />
        <Route
          path="account"
          element={
            <RequireAuth>
              <AccountPage />
            </RequireAuth>
          }
        />
      </Route>
      <Route element={<LoginPageLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="sign_up" element={<SignUpPage />} />
      </Route>
    </Route>
  )
)

export default router
