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
import { useAutocompleteT } from 'App/i18n'

const LoginPage = () => {
  const { form, handleSubmit, isLoading } = useLoginForm()

  const { T } = useAutocompleteT()

  return (
    <>
      <Title className="mb-12" order={2} align="center" mt="md">
        {T('auth.welcome_back_to_finest_map')}
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          autoComplete="email"
          type="email"
          label={T('auth.email')}
          placeholder="hello@gmail.com"
          size="md"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          autoComplete="current-password"
          label={T('auth.password')}
          placeholder={T('auth.your_password')}
          mt="md"
          size="md"
          {...form.getInputProps('password')}
        />
        <Button type="submit" fullWidth mt="xl" size="md" loading={isLoading}>
          {T('auth.login')}
        </Button>
        <Text color="gray" align="center" mt="xl">
          {T('auth.do_not_have_an_account')}{' '}
          <Anchor component={Link} to="/sign_up" weight="bold">
            {T('auth.sign_up_for_free')}
          </Anchor>
        </Text>
      </form>
    </>
  )
}

export default LoginPage
