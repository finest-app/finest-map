import { Paper } from '@mantine/core'
import ReactFlow, { Background, BackgroundVariant, Controls } from 'reactflow'
import 'reactflow/dist/style.css'
import useFlowStore from '../../hooks/useFlowStore'

const FlowEditorView = () => {
  const reactflowWrapperRef = useFlowStore(state => state.reactflowWrapperRef)
  const nodes = useFlowStore(state => state.nodes)
  const edges = useFlowStore(state => state.edges)
  const onInit = useFlowStore(state => state.onInit)
  const onNodesChange = useFlowStore(state => state.onNodesChange)
  const onEdgesChange = useFlowStore(state => state.onEdgesChange)
  const onConnect = useFlowStore(state => state.onConnect)
  const onConnectStart = useFlowStore(state => state.onConnectStart)
  const onConnectEnd = useFlowStore(state => state.onConnectEnd)

  return (
    <Paper ref={reactflowWrapperRef} className="h-full" radius="md">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        onInit={onInit}>
        <Controls />
        <Background variant={BackgroundVariant.Lines} />
      </ReactFlow>
    </Paper>
  )
}

export default FlowEditorView
