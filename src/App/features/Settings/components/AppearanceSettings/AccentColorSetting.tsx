import { ColorSwatch, Group, useMantineTheme, CheckIcon } from '@mantine/core'
import { useAutocompleteT } from 'App/i18n'
import useAppSettingsStore from '../../stores/useAppSettingsStore'
import SettingsListItem from '../SettingsListItem'

const AccentColorSetting = () => {
  const theme = useMantineTheme()

  const accentColor = useAppSettingsStore(state => state.accentColor)

  const colors = Object.keys(theme.colors).map(color => ({
    name: color,
    value: theme.colors[color][theme.fn.primaryShade()]
  }))

  const { T } = useAutocompleteT()

  return (
    <SettingsListItem
      name={T('settings.accent_color')}
      control={
        <Group spacing="xs">
          {colors.map(color => (
            <ColorSwatch
              key={color.value}
              component="button"
              className="cursor-pointer"
              color={color.value}
              onClick={() => {
                useAppSettingsStore.setState({ accentColor: color.name })
              }}>
              {color.name === accentColor && (
                <CheckIcon className="text-white" width={10} />
              )}
            </ColorSwatch>
          ))}
        </Group>
      }
    />
  )
}

export default AccentColorSetting
