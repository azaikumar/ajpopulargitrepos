import {Component} from 'react'
// import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    popularReposList: [],
    isLoading: false,
  }

  componentDidMount() {
    const {activeTabId} = this.state
    this.getRepositories(activeTabId)
  }

  onClickLanguageTab = tabValue => {
    this.setState({activeTabId: tabValue})
    this.getRepositories(tabValue)
  }

  getRepositories = async tab => {
    const {activeTabId} = this.state
    console.log(activeTabId)
    this.setState({
      isLoading: true,
    })

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${tab}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.popular_repos.map(repos => ({
        name: repos.name,
        issuesCount: repos.issues_count,
        forksCount: repos.forks_count,
        id: repos.id,
        starsCount: repos.stars_count,
        avatarUrl: repos.avatar_url,
      }))
      this.setState({
        popularReposList: updatedData,
        isLoading: false,
      })
    }
  }

  render() {
    const {isLoading, popularReposList, activeTabId} = this.state

    return (
      <div className="app-container-success-page">
        <h1 className="heading-popular">Popular</h1>
        <ul className="language-container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              languageFiltersDataDetails={eachItem}
              key={eachItem.id}
              onClickLanguage={this.onClickLanguageTab}
              isActive={activeTabId === eachItem.id}
            />
          ))}
        </ul>
        <div>
          {isLoading ? (
            <div className="products-loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </div>
          ) : (
            <ul className="repositories-container">
              {popularReposList.map(eachItem => (
                <RepositoryItem key={eachItem.id} popularReposList={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
