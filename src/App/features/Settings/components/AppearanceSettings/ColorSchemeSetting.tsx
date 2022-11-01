import { type ColorScheme, Select } from '@mantine/core'
import { useAutocompleteT } from 'App/i18n'
import useAppSettingsStore from '../../stores/useAppSettingsStore'
import SettingsListItem from '../SettingsListItem'

interface ColorSchemeData {
  value: ColorScheme
  label: string
}

const ColorSchemeSetting = () => {
  const colorScheme = useAppSettingsStore(state => state.colorScheme)

  const { T } = useAutocompleteT()

  const colorSchemeSelectData: ColorSchemeData[] = [
    { value: 'light', label: T('settings.light') },
    { value: 'dark', label: T('settings.dark') }
  ]

  return (
    <SettingsListItem
      name={T('settings.color_scheme')}
      control={
        <Select
          value={colorScheme}
          onChange={value =>
            value &&
            useAppSettingsStore.setState({ colorScheme: value as ColorScheme })
          }
          data={colorSchemeSelectData}
        />
      }
    />
  )
}

export default ColorSchemeSetting
