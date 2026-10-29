import {useEffect, useState} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

const API_URL = 'https://apis.ccbp.in/ipl'

function Home() {
  const [teams, setTeams] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getTeams = async () => {
      try {
        const response = await fetch(API_URL)

        if (!response.ok) {
          throw new Error('Unable to fetch teams')
        }

        const data = await response.json()
        setTeams(data.teams || [])
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getTeams()
  }, [])

  return (
    <div className="home-container">
      <header className="dashboard-heading">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="IPL logo"
          className="ipl-logo"
        />
        <h1>IPL Dashboard</h1>
      </header>

      {isLoading ? (
        <div className="page-loader" data-testid="loader">
          <div className="loader" />
        </div>
      ) : hasError ? (
        <div className="error-container">
          <p>Unable to load IPL teams.</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      ) : (
        <ul className="teams-list">
          {teams.map(team => (
            <TeamCard key={team.id} teamDetails={team} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home