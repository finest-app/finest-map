import { Header } from '@mantine/core'
import HeaderMobile from './HeaderMobile'

const AppHeader = () => {
  return (
    <Header height={56} py="xs" px="md">
      <HeaderMobile />
    </Header>
  )
}

export default AppHeader
