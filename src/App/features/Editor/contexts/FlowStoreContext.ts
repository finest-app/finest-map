import createContext from 'zustand/context'
import { type FlowStore } from '../stores/createFlowStore'

const FlowStoreContext = createContext<FlowStore>()

export default FlowStoreContext
