import { useAutocompleteT } from 'App/i18n'
import SettingsList from '../SettingsList'
import AccentColorSetting from './AccentColorSetting'
import ColorSchemeSetting from './ColorSchemeSetting'

const AppearanceSettings = () => {
  const { T } = useAutocompleteT()

  return (
    <SettingsList title={`🎨 ${T('settings.appearance')}`}>
      <ColorSchemeSetting />
      <AccentColorSetting />
    </SettingsList>
  )
}
export default AppearanceSettings
