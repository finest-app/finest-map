import { Paper } from '@mantine/core'
import ReactFlow, { Controls, type NodeTypes } from 'reactflow'
import 'reactflow/dist/base.css'
import useFlowStore from '../../hooks/useFlowStore'
import useSetTabFileEffect from '../../hooks/useSetTabFileEffect'
import TextUpdaterNode, { textUpdaterNodeName } from './TextUpdaterNode'
import FlowHandleStyles from './FlowHandleStyles'

const nodeTypes: NodeTypes = {
  [textUpdaterNodeName]: TextUpdaterNode
}

const FlowEditorView = () => {
  const reactflowWrapperRef = useFlowStore(state => state.reactflowWrapperRef)
  const defaultViewport = useFlowStore(state => state.defaultViewport)
  const nodes = useFlowStore(state => state.nodes)
  const edges = useFlowStore(state => state.edges)
  const onInit = useFlowStore(state => state.onInit)
  const onNodesChange = useFlowStore(state => state.onNodesChange)
  const onEdgesChange = useFlowStore(state => state.onEdgesChange)
  const onConnect = useFlowStore(state => state.onConnect)
  const onConnectStart = useFlowStore(state => state.onConnectStart)
  const onConnectEnd = useFlowStore(state => state.onConnectEnd)

  useSetTabFileEffect()

  return (
    <Paper ref={reactflowWrapperRef} className="h-full" radius="md">
      <FlowHandleStyles />
      <ReactFlow
        nodeTypes={nodeTypes}
        disableKeyboardA11y
        defaultViewport={defaultViewport}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        onInit={onInit}>
        <Controls />
      </ReactFlow>
    </Paper>
  )
}

export default FlowEditorView
