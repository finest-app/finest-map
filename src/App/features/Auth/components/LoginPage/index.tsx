import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor
} from '@mantine/core'
import { Link } from 'react-router-dom'
import useLoginForm from './useLoginForm'

const LoginPage = () => {
  const { form, handleSubmit, isLoading } = useLoginForm()

  return (
    <form onSubmit={handleSubmit}>
      <Title className="mb-12" order={2} align="center" mt="md">
        Welcome back to Finest Map!
      </Title>
      <TextInput
        type="email"
        label="Email"
        placeholder="hello@gmail.com"
        size="md"
        {...form.getInputProps('email')}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        mt="md"
        size="md"
        {...form.getInputProps('password')}
      />
      <Button type="submit" fullWidth mt="xl" size="md" loading={isLoading}>
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
