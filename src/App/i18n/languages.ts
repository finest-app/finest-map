import en from './en.json'
import cn from './cn.json'

const languages = { en, cn }

export type AppLanguage = keyof typeof languages

export default languages
