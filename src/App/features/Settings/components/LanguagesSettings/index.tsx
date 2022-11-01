import { useAutocompleteT } from 'App/i18n'
import SettingsList from '../SettingsList'
import DisplayLanguage from './DisplayLanguage'

const LanguagesSettings = () => {
  const { T } = useAutocompleteT()

  return (
    <SettingsList title={`🌐 ${T('settings.languages')}`}>
      <DisplayLanguage />
    </SettingsList>
  )
}

export default LanguagesSettings
