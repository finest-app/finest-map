import { type ColorScheme, Select } from '@mantine/core'
import useAppSettingsStore from '../../stores/useAppSettingsStore'
import SettingsListItem from '../SettingsListItem'

interface ColorSchemeData {
  value: ColorScheme
  label: string
}

const ColorSchemeSetting = () => {
  const colorScheme = useAppSettingsStore(state => state.colorScheme)

  const colorSchemeSelectData: ColorSchemeData[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' }
  ]

  return (
    <SettingsListItem
      name="Color scheme"
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
