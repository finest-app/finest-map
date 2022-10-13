import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor
} from '@mantine/core'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <form>
      <Title className="mb-12" order={2} align="center" mt="md">
        Welcome back to Finest Map!
      </Title>

      <TextInput label="Email" placeholder="hello@gmail.com" size="md" />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        mt="md"
        size="md"
      />

      <Button fullWidth mt="xl" size="md">
        Login
      </Button>

      <Text color="gray" align="center" mt="xl">
        Don&apos;t have an account?{' '}
        <Anchor component={Link} to="/sign_up" weight="bold">
          Sign Up for free
        </Anchor>
      </Text>
    </form>
  )
}

export default LoginPage
