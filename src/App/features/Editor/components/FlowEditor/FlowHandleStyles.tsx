import { Global } from '@mantine/core'

export const FlowHandleStyles = () => {
  return (
    <Global
      styles={theme => ({
        '.react-flow__handle': {
          display: 'flex',
          backgroundColor: 'transparent',
          '&>*': {
            pointerEvents: 'none'
          }
        },
        '.react-flow__handle-left': {
          left: 0
        },
        '.react-flow__handle-right': {
          right: -theme.spacing.sm
        }
      })}
    />
  )
}

export default FlowHandleStyles
