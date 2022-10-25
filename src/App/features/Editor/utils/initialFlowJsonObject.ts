import { nanoid } from 'nanoid'
import { type ReactFlowJsonObject, Position } from 'reactflow'

const initialFlowJsonObject: ReactFlowJsonObject<unknown, unknown> = {
  nodes: [
    {
      width: 150,
      height: 48,
      id: nanoid(),
      sourcePosition: Position.Right,
      type: 'input',
      data: {
        label: 'Hello World'
      },
      position: {
        x: 50,
        y: 50
      },
      style: {
        width: 150,
        height: 48
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
