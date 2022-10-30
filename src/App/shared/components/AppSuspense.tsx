import { Suspense, type SuspenseProps } from 'react'
import { Skeleton } from '@mantine/core'

const AppSuspense = (props: SuspenseProps) => {
  return (
    <Suspense
      fallback={<Skeleton className="h-full rounded-none xs:rounded-lg" />}
      {...props}
    />
  )
}

export default AppSuspense
