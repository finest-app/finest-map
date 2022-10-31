import { useState, useEffect } from 'react'
import { createStyles, Paper, ThemeIcon } from '@mantine/core'
import { type Node, type NodeProps, Handle, useStoreApi } from 'reactflow'
import ContentEditable from 'react-contenteditable'
import { IconPlus } from '@tabler/icons'
import {
  INITIAL_NODE_RECT,
  type NodeData
} from 'App/features/Editor/stores/createFlowStore'
import useStyloEditor from 'App/features/Editor/hooks/useStyloEditor'
import useAppSettingsStore from 'App/features/Settings/stores/useAppSettingsStore'

export const textUpdaterNodeName = 'textUpdater'

const useStyles = createStyles(theme => ({
  base: {
    minHeight: INITIAL_NODE_RECT.height
  },
  selected: {
    outlineColor: theme.fn.primaryColor(),
    outlineStyle: 'solid',
    outlineWidth: 2
  }
}))

type TextUpdaterNodeProps = NodeProps<NodeData>

const TextUpdaterNode = ({
  id,
  data,
  selected,
  dragging,
  targetPosition,
  sourcePosition
}: TextUpdaterNodeProps) => {
  const { classes, cx } = useStyles()

  const currentNode: Node<NodeData> | undefined = useStoreApi()
    .getState()
    .nodeInternals.get(id)

  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setIsEdit(selected)
  }, [selected])

  const { articleRef, styloEditorRef } = useStyloEditor()

  const disabledContentEditable = !selected || dragging

  const colorScheme = useAppSettingsStore(state => state.colorScheme)

  return (
    <Paper
      className={cx(
        classes.base,
        selected && classes.selected,
        isEdit && 'nodrag cursor-auto'
      )}
      py="lg"
      pl="2.45rem"
      pr="1.8rem">
      <ContentEditable
        innerRef={articleRef}
        tagName="article"
        className={cx(
          'prose-lg prose focus-within:outline-none',
          colorScheme === 'dark' && 'prose-invert'
        )}
        html={data.content}
        disabled={disabledContentEditable}
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
      {!disabledContentEditable && <stylo-editor ref={styloEditorRef} />}
      {targetPosition && sourcePosition && (
        <>
          {!data.isRoot && (
            <Handle
              className="invisible"
              type="target"
              position={targetPosition}
            />
          )}
          <Handle
            className={cx(selected ? 'visible' : 'invisible')}
            type="source"
            position={sourcePosition}>
            <ThemeIcon size="sm" radius="xl">
              <IconPlus size={14} />
            </ThemeIcon>
          </Handle>
        </>
      )}
    </Paper>
  )
}

export default TextUpdaterNode
