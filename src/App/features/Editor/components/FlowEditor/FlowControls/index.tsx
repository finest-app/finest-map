import { Paper, Stack } from '@mantine/core'
import { IconMaximize, IconMinus, IconPlus } from '@tabler/icons'
import { useReactFlow } from 'reactflow'
import { useAutocompleteT } from 'App/i18n'
import FlowControlsButton from './FlowControlsButton'

const ZOOM_DURATION = 500

const FlowControls = () => {
  const { zoomIn, zoomOut, fitView } = useReactFlow()

  const { T } = useAutocompleteT()

  return (
    <Paper
      className="react-flow__panel bottom left gap-1 rounded-tr-none rounded-bl-none p-1.5"
      component={Stack}
      withBorder
      shadow="sm"
      radius="lg">
      <FlowControlsButton
        label={T('editor.zoom_in')}
        icon={IconPlus}
        onClick={() => zoomIn({ duration: ZOOM_DURATION })}
      />
      <FlowControlsButton
        label={T('editor.zoom_out')}
        icon={IconMinus}
        onClick={() => zoomOut({ duration: ZOOM_DURATION })}
      />
      <FlowControlsButton
        label={T('editor.fit_view')}
        icon={IconMaximize}
        onClick={() => fitView({ duration: ZOOM_DURATION })}
      />
    </Paper>
  )
}

export default FlowControls
