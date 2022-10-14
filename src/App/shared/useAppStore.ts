import create from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthToken } from 'App/features/Auth/api/types'

interface AppState {
  authToken: AuthToken | null
  setAuthToken: (authToken: AuthToken) => void
  removeAuthToken: () => void
}

const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      authToken: null,
      setAuthToken: authToken => set({ authToken }),
      removeAuthToken: () => set({ authToken: null })
    }),
    {
      name: 'finest-map-state-storage'
    }
  )
)

export default useAppStore
