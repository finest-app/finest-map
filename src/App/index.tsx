import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import mantineTheme from 'App/config/mantineTheme'
import router from 'App/router'

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
