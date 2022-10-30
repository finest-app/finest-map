import { Paper, BackgroundImage, AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const backgroundImageSrc =
  'https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=100'

const LoginPageLayout = () => {
  const [parent] = useAutoAnimate<HTMLDivElement>()

  return (
    <AppShell padding={0}>
      <BackgroundImage
        className="h-full bg-cover bg-left-top"
        src={backgroundImageSrc}>
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
