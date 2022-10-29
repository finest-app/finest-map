import create from 'zustand'

interface AppDrawerState {
  opened: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const useAppDrawerStore = create<AppDrawerState>()(set => ({
  opened: false,
  open() {
    set({ opened: true })
  },
  close() {
    set({ opened: false })
  },
  toggle() {
    set(state => ({ opened: !state.opened }))
  }
}))

export default useAppDrawerStore
