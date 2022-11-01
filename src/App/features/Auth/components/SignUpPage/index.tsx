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
import { useAutocompleteT } from 'App/i18n'

const SignUpPage = () => {
  const { form, handleSubmit, isLoading } = useSignUpForm()

  const { T } = useAutocompleteT()

  return (
    <>
      <Title className="mb-12" order={2} align="center" mt="md">
        {T('auth.create_new_account')}
      </Title>

      <form onSubmit={handleSubmit}>
        <TextInput
          autoComplete="username"
          label={T('auth.name')}
          placeholder={T('auth.your_name')}
          required
          size="md"
          {...form.getInputProps('name')}
        />
        <TextInput
          autoComplete="email"
          type="email"
          label={T('auth.email')}
          placeholder="hello@gmail.com"
          required
          mt="md"
          size="md"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          autoComplete="new-password"
          label={T('auth.password')}
          placeholder={T('auth.your_password')}
          required
          mt="md"
          size="md"
          {...form.getInputProps('password')}
        />
        <Button type="submit" fullWidth mt="xl" size="md" loading={isLoading}>
          {T('auth.signUp')}
        </Button>

        <Text color="gray" align="center" mt="xl">
          {T('auth.already_have_an_account')}{' '}
          <Anchor component={Link} to="/login" weight="bold">
            {T('auth.login')}
          </Anchor>
        </Text>
      </form>
    </>
  )
}

export default SignUpPage
