import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor
} from '@mantine/core'
import { Link } from 'react-router-dom'
import useSignUpForm from './useSignUpForm'

const SignUpPage = () => {
  const { form, handleSubmit, isLoading } = useSignUpForm()

  return (
    <form onSubmit={handleSubmit}>
      <Title className="mb-12" order={2} align="center" mt="md">
        Create new account.
      </Title>
      <TextInput
        label="Name"
        placeholder="Your Name"
        required
        size="md"
        {...form.getInputProps('name')}
      />
      <TextInput
        type="email"
        label="Email"
        placeholder="hello@gmail.com"
        required
        mt="md"
        size="md"
        {...form.getInputProps('email')}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
        size="md"
        {...form.getInputProps('password')}
      />
      <Button type="submit" fullWidth mt="xl" size="md" loading={isLoading}>
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
