import { Paper, BackgroundImage, AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { loginBackground } from '../../assets'

const LoginPageLayout = () => {
  const [parent] = useAutoAnimate<HTMLDivElement>()

  return (
    <AppShell padding={0}>
      <BackgroundImage
        className="h-full bg-cover bg-left-top"
        src={loginBackground}>
        <Paper
          ref={parent}
          className="h-full max-w-md p-8"
          withBorder
          radius={0}>
          <Outlet />
        </Paper>
      </BackgroundImage>
    </AppShell>
  )
}

export default LoginPageLayout
