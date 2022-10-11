import Root from 'App/features/Root'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
)

export default router
