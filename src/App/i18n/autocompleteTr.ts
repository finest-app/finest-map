import useAppSettingsStore from 'App/features/Settings/stores/useAppSettingsStore'
import { type Autocomplete, type TParams, tr } from 'talkr'
import languages from './languages'
import en from './en.json'

type Key = Autocomplete<typeof en>

const autocompleteTr = (key: Key, params?: TParams) => {
  const language = useAppSettingsStore.getState().language

  return tr(
    { locale: language, languages, defaultLanguage: language },
    key,
    params
  )
}

export default autocompleteTr
