import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

function TeamMatches() {
  const {id} = useParams()
  const [teamData, setTeamData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getTeamMatches = async () => {
      setIsLoading(true)
      setHasError(false)
      setTeamData(null)

      try {
        const response = await fetch(`
          https://apis.ccbp.in/ipl/${id}`,
        )

        if (!response.ok) {
          throw new Error('Unable to fetch team matches')
        }

        const data = await response.json()
        setTeamData(data)
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getTeamMatches()
  }, [id])

  if (isLoading) {
    return (
      <div className="page-loader" data-testid="loader">
        <div className="loader" />
      </div>
    )
  }

  if (hasError || !teamData) {
    return (
      <div className="page-loader">
        <div className="team-error">
          <h2>Unable to load team matches</h2>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const {
    team_banner_url,
    latest_match_details,
    recent_matches,
  } = teamData

  return (
    <div className={`team-matches-container ${id.toLowerCase()}`}>
      <img
        src={team_banner_url}
        alt="team banner"
        className="team-banner"
      />

      <LatestMatch matchDetails={latest_match_details} />

      <section className="recent-matches-section">
        <h2>Recent Matches</h2>

        <ul className="recent-matches-list">
          {(recent_matches || []).map(match => (
            <MatchCard key={match.id} matchDetails={match} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default TeamMatches