import SettingsList from '../SettingsList'
import AccentColorSetting from './AccentColorSetting'
import ColorSchemeSetting from './ColorSchemeSetting'

const AppearanceSettings = () => {
  return (
    <SettingsList title="🎨 Appearance">
      <ColorSchemeSetting />
      <AccentColorSetting />
    </SettingsList>
  )
}
export default AppearanceSettings
