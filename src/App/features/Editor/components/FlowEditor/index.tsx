import { ReactFlowProvider } from 'reactflow'
import FlowStoreContext from '../../contexts/FlowStoreContext'
import createFlowStore from '../../stores/createFlowStore'
import FlowEditorView from './FlowEditorView'
import { type EditorTabData } from '../../stores/useEditorTabsStore'

type FlowEditorProps = EditorTabData

const FlowEditor = ({ file }: FlowEditorProps) => {
  const reactFlowJsonObject = JSON.parse(file.sourceFile.raw)

  return (
    <FlowStoreContext.Provider
      createStore={() => createFlowStore(reactFlowJsonObject)}>
      <ReactFlowProvider>
        <FlowEditorView />
      </ReactFlowProvider>
    </FlowStoreContext.Provider>
  )
}

export default FlowEditor
