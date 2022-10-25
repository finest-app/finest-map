import create from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { type FileData } from 'App/features/Files/api/types'

type FileId = FileData['id']

export type EditorTabData = { file: FileData }

interface EditorTabsState {
  tabs: EditorTabData[]
  addTab: (file: FileData) => void
  closeTab: (fileId: FileId) => FileId | null
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
    closeTab(fileId) {
      const index = get().tabs.findIndex(tab => tab.file.id === fileId)

      if (index >= 0) {
        set(state => {
          state.tabs.splice(index, 1)
        })

        const { tabs } = get()
        const tabsLength = tabs.length

        if (index === tabsLength) {
          return index ? tabs[index - 1].file.id : null
        } else if (index < tabsLength) {
          return tabs[index].file.id
        }
      }

      return null
    },
    onReorder(tabs) {
      set({ tabs })
    }
  }))
)

export default useEditorTabsStore
