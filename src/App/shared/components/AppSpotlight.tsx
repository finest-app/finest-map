import {
  SpotlightProvider,
  type SpotlightProviderProps
} from '@mantine/spotlight'
import { IconSearch } from '@tabler/icons'

const AppSpotlight = (props: SpotlightProviderProps) => {
  return (
    <SpotlightProvider
      radius="md"
      searchPlaceholder="Search..."
      shortcut={['mod + k']}
      nothingFoundMessage="No results found."
      transition="skew-down"
      searchIcon={<IconSearch size={18} />}
      {...props}
    />
  )
}
export default AppSpotlight
