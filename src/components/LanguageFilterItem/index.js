import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersDataDetails, onClickLanguage, isActive} = props
  const {language, id} = languageFiltersDataDetails

  const onClickLanguageTab = () => {
    onClickLanguage(id)
  }

  const classNameTab = isActive ? 'active' : 'language'

  return (
    <button
      type="button"
      className={`${classNameTab}`}
      onClick={onClickLanguageTab}
    >
      {language}
    </button>
  )
}

export default LanguageFilterItem
