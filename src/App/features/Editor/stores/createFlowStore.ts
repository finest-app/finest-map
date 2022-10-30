import { type RefCallback } from 'react'
import { createStore, type StoreApi } from 'zustand'
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Position,
  type Node,
  type ReactFlowProps,
  type ReactFlowInstance,
  type ReactFlowJsonObject
} from 'reactflow'
import { nanoid } from 'nanoid'
import { textUpdaterNodeName } from '../components/FlowEditor/TextUpdaterNode'
import toStyloContent from '../utils/toStyloContent'

export interface NodeData {
  content: string
  isRoot: boolean
}

export const INITIAL_NODE_RECT = {
  height: 68
}

class InitialFlowState {
  connectingNodeId: string | null = null
  reactFlowInstance: ReactFlowInstance<NodeData, unknown> | null = null
  reactflowWrapper: HTMLDivElement | null = null
}

export type FlowState = Required<
  Pick<
    ReactFlowProps,
    | 'nodes'
    | 'edges'
    | 'defaultViewport'
    | 'onInit'
    | 'onNodesChange'
    | 'onEdgesChange'
    | 'onConnect'
    | 'onConnectStart'
    | 'onConnectEnd'
  >
> &
  InitialFlowState & {
    reactflowWrapperRef: RefCallback<HTMLDivElement>
    getFlowInstanceObject: () =>
      | ReactFlowJsonObject<NodeData, unknown>
      | undefined
  }

export type FlowStore = StoreApi<FlowState>

const createFlowStore = (
  reactFlowJsonObject: ReactFlowJsonObject<NodeData, unknown>
) =>
  createStore<FlowState>((set, get) => ({
    ...new InitialFlowState(),
    nodes: reactFlowJsonObject.nodes,
    edges: reactFlowJsonObject.edges,
    defaultViewport: reactFlowJsonObject.viewport,
    reactflowWrapperRef(element) {
      set({ reactflowWrapper: element })
    },
    getFlowInstanceObject() {
      return get().reactFlowInstance?.toObject()
    },
    onInit(reactFlowInstance) {
      set({ reactFlowInstance })
    },
    onNodesChange(changes) {
      set(state => ({
        nodes: applyNodeChanges(changes, state.nodes)
      }))
    },
    onEdgesChange(changes) {
      set(state => ({
        edges: applyEdgeChanges(changes, state.edges)
      }))
    },
    onConnect(connection) {
      set(state => ({
        edges: addEdge(connection, state.edges)
      }))
    },
    onConnectStart(_, { nodeId }) {
      set({ connectingNodeId: nodeId })
    },
    onConnectEnd(event) {
      const { reactFlowInstance, reactflowWrapper, connectingNodeId } = get()

      if (reactFlowInstance && reactflowWrapper && connectingNodeId) {
        const id = nanoid()

        const { left, top } = reactflowWrapper.getBoundingClientRect()

        const { project, getZoom } = reactFlowInstance

        const newNode: Node<NodeData> = {
          id,
          type: textUpdaterNodeName,
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          position: project({
            x: event.clientX - left,
            y: event.clientY - top - (INITIAL_NODE_RECT.height / 2) * getZoom()
          }),
          data: { content: toStyloContent('Type Something'), isRoot: false }
        }

        set(state => ({
          nodes: state.nodes.concat(newNode),
          edges: state.edges.concat({
            id,
            source: connectingNodeId,
            target: id
          })
        }))
      }
    }
  }))

export default createFlowStore
