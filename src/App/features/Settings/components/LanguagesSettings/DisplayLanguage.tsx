import { Select } from '@mantine/core'
import { type AppLanguage } from 'App/i18n/languages'
import useAppSettingsStore from '../../stores/useAppSettingsStore'
import SettingsListItem from '../SettingsListItem'

interface LangualgeData {
  value: AppLanguage
  label: string
}

const languageSelectData: LangualgeData[] = [
  { value: 'en', label: 'English' },
  { value: 'cn', label: '简体中文' }
]

const DisplayLanguage = () => {
  const language = useAppSettingsStore(state => state.language)

  return (
    <SettingsListItem
      name="Display language"
      control={
        <Select
          value={language}
          onChange={value =>
            value &&
            useAppSettingsStore.setState({ language: value as AppLanguage })
          }
          data={languageSelectData}
        />
      }
    />
  )
}

export default DisplayLanguage
