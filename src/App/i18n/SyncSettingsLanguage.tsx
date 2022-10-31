import { useEffect, type PropsWithChildren } from 'react'
import { useT } from 'talkr'
import useAppSettingsStore from 'App/features/Settings/stores/useAppSettingsStore'

const SyncSettingsLanguage = ({ children }: PropsWithChildren<unknown>) => {
  const { setLocale } = useT()

  useEffect(
    () => useAppSettingsStore.subscribe(state => state.language, setLocale),
    [setLocale]
  )

  return <>{children}</>
}

export default SyncSettingsLanguage
