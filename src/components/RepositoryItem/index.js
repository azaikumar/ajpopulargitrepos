import './index.css'

const RepositoryItem = props => {
  const {popularReposList} = props
  const {
    name,
    avatarUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = popularReposList

  return (
    <li className="repository-item-container">
      <img src={avatarUrl} alt={name} className="repo-img" />
      <h1 className="name">{name}</h1>
      <div className="stats">
        <div className="stars-folks-issues-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="stars-img"
          />
          <p className="stars-count">{`${starsCount} stars`}</p>
        </div>
        <div className="stars-folks-issues-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="stars-img"
          />
          <p className="stars-count">{`${forksCount} forks`}</p>
        </div>
        <div className="stars-folks-issues-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="stars-img"
          />
          <p className="stars-count">{`${issuesCount} open issues`}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
