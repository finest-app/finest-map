import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor
} from '@mantine/core'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <form>
      <Title className="mb-12" order={2} align="center" mt="md">
        Create new account.
      </Title>
      <TextInput label="Name" placeholder="Your Name" required size="md" />
      <TextInput
        label="Email"
        placeholder="hello@gmail.com"
        required
        mt="md"
        size="md"
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
        size="md"
      />
      <Button fullWidth mt="xl" size="md">
        Sign Up
      </Button>

      <Text color="gray" align="center" mt="xl">
        Already have an account?{' '}
        <Anchor component={Link} to="/login" weight="bold">
          Log In
        </Anchor>
      </Text>
    </form>
  )
}

export default SignUpPage
