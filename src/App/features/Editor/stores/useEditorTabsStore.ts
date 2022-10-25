import create from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { type FileData } from 'App/features/Files/api/types'

export type EditorTabData = { file: FileData }

interface EditorTabsState {
  tabs: EditorTabData[]
  addTab: (file: FileData) => void
  onReorder: (tabs: EditorTabData[]) => void
}

const useEditorTabsStore = create<EditorTabsState>()(
  immer((set, get) => ({
    tabs: [],
    addTab(file) {
      if (!get().tabs.find(tab => tab.file.id === file.id)) {
        set(state => {
          state.tabs.push({ file })
        })
      }
    },
    onReorder(tabs) {
      set({ tabs })
    }
  }))
)

export default useEditorTabsStore
