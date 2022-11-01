import { type Autocomplete, type TParams, useT, tr } from 'talkr'
import en from './en.json'

type Key = Autocomplete<typeof en>

export const useAutocompleteT = () => {
  const { locale, languages, defaultLanguage } = useT()
  return {
    T: (key: Key, params?: TParams) =>
      tr({ locale, languages, defaultLanguage }, key, params)
  }
}

export default useAutocompleteT
