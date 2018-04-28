const languages = ['en', 'et']
const catalogs = {
  en: { messages: require('./locale/en/messages.json') },
  et: { messages: require('./locale/et/messages.json') },
}

const defaultLanguage = 'et'

const prefix = lang => (lang == defaultLanguage ? '/' : '/' + lang)
const deprefix = pathname =>
  pathname.startsWith('/en/') ? pathname.substr(4) : pathname
const langFromPath = pathname => (pathname.startsWith('/en/') ? 'en' : 'et')

exports.defaultLanguage = defaultLanguage
exports.languages = languages
exports.catalogs = catalogs
exports.prefix = prefix
exports.deprefix = deprefix
exports.langFromPath = langFromPath
