import { ReactFlowProvider } from 'reactflow'
import FlowStoreContext from '../../contexts/FlowStoreContext'
import createFlowStore from '../../stores/createFlowStore'
import FlowEditorView from './FlowEditorView'

const FlowEditor = () => {
  return (
    <FlowStoreContext.Provider createStore={createFlowStore}>
      <ReactFlowProvider>
        <FlowEditorView />
      </ReactFlowProvider>
    </FlowStoreContext.Provider>
  )
}

export default FlowEditor
