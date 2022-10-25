import {
  RequireAuth,
  AccountPage,
  SignUpPage,
  LoginPage
} from 'App/features/Auth/components'
import LoginPageLayout from 'App/features/Auth/components/LoginPageLayout'
import Root from 'App/features/Root'
import { FilesPage } from 'App/features/Files/components'
import { EditFilePage, EditorTabs } from 'App/features/Editor/components'
import { SettingsPage } from 'App/features/Settings/components'
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
        <Route path="files" element={<EditorTabs />}>
          <Route index element={<FilesPage />} />
          <Route path=":id/edit" element={<EditFilePage />} />
        </Route>
        <Route
          path="account"
          element={
            <RequireAuth>
              <AccountPage />
            </RequireAuth>
          }
        />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route element={<LoginPageLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="sign_up" element={<SignUpPage />} />
      </Route>
    </Route>
  )
)

export default router
