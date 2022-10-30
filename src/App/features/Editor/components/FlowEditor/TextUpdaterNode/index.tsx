import { useState, useEffect } from 'react'
import { createStyles, Paper } from '@mantine/core'
import { type Node, type NodeProps, Handle, useStoreApi } from 'reactflow'
import ContentEditable from 'react-contenteditable'
import {
  INITIAL_NODE_RECT,
  type NodeData
} from 'App/features/Editor/stores/createFlowStore'

export const textUpdaterNodeName = 'textUpdater'

const useStyles = createStyles(theme => ({
  base: {
    minWidth: INITIAL_NODE_RECT.width,
    minHeight: INITIAL_NODE_RECT.height,
    outlineColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[3],
    outlineStyle: 'solid',
    outlineWidth: 1
  },
  selected: {
    outlineColor: theme.fn.primaryColor(),
    outlineWidth: 2
  }
}))

type TextUpdaterNode = NodeProps<NodeData>

const TextUpdaterNode = ({
  id,
  data,
  selected,
  dragging,
  targetPosition,
  sourcePosition
}: TextUpdaterNode) => {
  const { classes, cx } = useStyles()

  const currentNode: Node<NodeData> | undefined = useStoreApi()
    .getState()
    .nodeInternals.get(id)

  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setIsEdit(selected)
  }, [selected])

  return (
    <Paper
      className={cx(
        classes.base,
        selected && classes.selected,
        isEdit && 'nodrag cursor-auto'
      )}
      p="md">
      <ContentEditable
        tagName="article"
        className="prose focus-within:outline-none"
        html={data.content}
        disabled={!selected || dragging}
        onChange={() => {
          //noop
        }}
        onClick={() => {
          setIsEdit(true)
        }}
        onBlur={event => {
          if (currentNode) {
            currentNode.data.content = event.target.innerHTML
          }
          setIsEdit(false)
        }}
      />

      {targetPosition && sourcePosition && (
        <>
          {!data.isRoot && <Handle type="target" position={targetPosition} />}
          <Handle type="source" position={sourcePosition} />
        </>
      )}
    </Paper>
  )
}

export default TextUpdaterNode
