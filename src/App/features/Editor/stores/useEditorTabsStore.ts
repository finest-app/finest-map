import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import dayjs from 'dayjs'
import {
  type FileData,
  type SourceFileData
} from 'App/features/Files/api/types'

type FileId = FileData['id']

export type EditorTabData = { file: FileData }

interface EditorTabsState {
  tabs: EditorTabData[]
  getTabIndex: (fileId: FileId) => number
  getTab: (fileId: FileId) => EditorTabData | null
  setTab: (file: FileData) => void
  addTab: (file: FileData) => void
  closeTab: (fileId: FileId) => FileId | null
  setTabFile: (fileId: FileId, raw: SourceFileData['raw']) => void
  onReorder: (tabs: EditorTabData[]) => void
}

const useEditorTabsStore = create<EditorTabsState>()(
  persist(
    immer((set, get) => ({
      tabs: [],
      getTabIndex(fileId) {
        const index = get().tabs.findIndex(tab => tab.file.id === fileId)

        return index
      },
      getTab(fileId) {
        const index = get().getTabIndex(fileId)

        if (index >= 0) {
          return get().tabs[index]
        }

        return null
      },
      setTab(file) {
        const index = get().getTabIndex(file.id)

        if (index >= 0) {
          set(state => {
            state.tabs[index].file = file
          })
        }
      },
      addTab(file) {
        const tab = get().getTab(file.id)

        if (!tab) {
          set(state => {
            state.tabs.unshift({ file })
          })
        }
      },
      closeTab(fileId) {
        const index = get().getTabIndex(fileId)

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
      setTabFile(fileId, raw) {
        const index = get().getTabIndex(fileId)

        if (index >= 0) {
          set(state => {
            state.tabs[index].file.sourceFile.raw = raw
            state.tabs[index].file.updatedAt = dayjs().utc().local().format()
          })
        }
      },
      onReorder(tabs) {
        set({ tabs })
      }
    })),
    {
      name: 'finest-map-editor-tabs-storage'
    }
  )
)

export default useEditorTabsStore
