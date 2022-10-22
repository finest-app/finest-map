import { Suspense, type SuspenseProps } from 'react'
import { Center, Loader } from '@mantine/core'

const AppSuspense = (props: SuspenseProps) => {
  return (
    <Suspense
      fallback={
        <Center className="h-2/3">
          <Loader size="xl" />
        </Center>
      }
      {...props}
    />
  )
}

export default AppSuspense
