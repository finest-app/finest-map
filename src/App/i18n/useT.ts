import { useT as useTr, Autocomplete, TParams, tr } from 'talkr'
import en from './en_us.json'

type Key = Autocomplete<typeof en>

const useT = () => {
  const { locale, languages, defaultLanguage } = useTr()
  return {
    T: (key: Key, params?: TParams) =>
      tr({ locale, languages, defaultLanguage }, key, params)
  }
}

export default useT
