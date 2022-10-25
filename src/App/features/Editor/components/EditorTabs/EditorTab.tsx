import { Tabs } from '@mantine/core'
import { IconFile } from '@tabler/icons'
import { Reorder } from 'framer-motion'
import { type EditorTabData } from 'App/features/Editor/stores/useEditorTabsStore'
import useEditFileNavigate from '../../hooks/useEditFileNavigate'

type EditorTabProps = {
  tab: EditorTabData
}

const EditorTab = ({ tab }: EditorTabProps) => {
  const { file } = tab

  const goEditFile = useEditFileNavigate()

  const handlePointerDown = () => {
    goEditFile(file.id)
  }

  return (
    <Reorder.Item value={tab}>
      <Tabs.Tab
        className="w-full transition-colors"
        icon={<IconFile size={20} />}
        key={file.id}
        value={file.id.toString()}
        onPointerDown={handlePointerDown}>
        {file.name}
      </Tabs.Tab>
    </Reorder.Item>
  )
}

export default EditorTab
