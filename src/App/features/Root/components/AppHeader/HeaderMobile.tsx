import { Group, Burger } from '@mantine/core'
import useAppDrawerStore from '../../stores/useAppDrawerStore'

const HeaderMobile = () => {
  const { opened, toggle } = useAppDrawerStore()

  return (
    <Group className="h-full xs:hidden">
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        title="Toggle drawer"
      />
    </Group>
  )
}

export default HeaderMobile
