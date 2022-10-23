import createContext from 'zustand/context'
import createFlowStore from '../stores/createFlowStore'

const FlowStoreContext = createContext<ReturnType<typeof createFlowStore>>()

export default FlowStoreContext
