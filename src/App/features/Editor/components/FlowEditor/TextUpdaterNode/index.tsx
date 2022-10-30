import { useState, useEffect } from 'react'
import { createStyles, Paper } from '@mantine/core'
import { type Node, type NodeProps, Handle, useStoreApi } from 'reactflow'
import ContentEditable from 'react-contenteditable'
import {
  INITIAL_NODE_RECT,
  type NodeData
} from 'App/features/Editor/stores/createFlowStore'
import useStyloEditor from 'App/features/Editor/hooks/useStyloEditor'

export const textUpdaterNodeName = 'textUpdater'

const useStyles = createStyles(theme => ({
  base: {
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

  const { articleRef, styloEditorRef } = useStyloEditor()

  return (
    <Paper
      className={cx(
        classes.base,
        selected && classes.selected,
        isEdit && 'nodrag cursor-auto'
      )}
      py="lg"
      px="2.45rem">
      <ContentEditable
        innerRef={articleRef}
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
        }}
      />
      <stylo-editor ref={styloEditorRef} />
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
