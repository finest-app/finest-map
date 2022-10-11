import { AppShell, Navbar, Header } from '@mantine/core'

const Root = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 64 }} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={56} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      })}>
      {/* Your application here */}
    </AppShell>
  )
}

export default Root
