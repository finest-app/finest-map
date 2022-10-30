import { useCallback, useRef, type RefCallback } from 'react'
import { defineCustomElements } from '@papyrs/stylo/dist/loader'

defineCustomElements()

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'stylo-editor': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLStyloEditorElement>,
        HTMLStyloEditorElement
      >
    }
  }
}
const useStyloEditor = () => {
  const articleRef = useRef<HTMLElement>(null)

  const styloEditorRef = useCallback<RefCallback<HTMLStyloEditorElement>>(
    stylo => {
      if (stylo && articleRef.current) {
        stylo.containerRef = articleRef.current
      }
    },
    []
  )

  return { articleRef, styloEditorRef }
}

export default useStyloEditor
