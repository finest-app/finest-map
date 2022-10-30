import { nanoid } from 'nanoid'
import { type ReactFlowJsonObject, Position } from 'reactflow'
import { textUpdaterNodeName } from '../components/FlowEditor/TextUpdaterNode'
import { type NodeData } from '../stores/createFlowStore'
import toStyloContent from './toStyloContent'

const initialFlowJsonObject: ReactFlowJsonObject<NodeData, unknown> = {
  nodes: [
    {
      id: nanoid(),
      sourcePosition: Position.Right,
      type: textUpdaterNodeName,
      data: {
        content: toStyloContent('Hello World!'),
        isRoot: true
      },
      position: {
        x: 50,
        y: 50
      },
      positionAbsolute: {
        x: 50,
        y: 50
      }
    }
  ],
  edges: [],
  viewport: {
    x: 0,
    y: 0,
    zoom: 1
  }
}

export default initialFlowJsonObject
