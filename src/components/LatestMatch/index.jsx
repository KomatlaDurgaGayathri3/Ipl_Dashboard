import './index.css'

function LatestMatch({matchDetails}) {
  if (!matchDetails) {
    return null
  }

  const {
    competing_team,
    competing_team_logo,
    date,
    first_innings,
    second_innings,
    match_status,
    man_of_the_match,
    venue,
    result,
    competing_team_score,
    umpires,
  } = matchDetails

  return (
    <section className="latest-match">
      <h2 className="latest-match-title">Latest Match</h2>

      <div className="latest-match-card">
        <div className="latest-match-main">
          <div className="match-team-info">
            <h3>{competing_team}</h3>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>

          <img
            src={competing_team_logo}
            alt={competing_team}
            className="latest-opponent-logo"
          />
        </div>

        <hr className="match-divider" />

        <div className="latest-match-details">
          <div>
            <h4>First Innings</h4>
            <p>{first_innings || 'Not available'}</p>

            <h4>Second Innings</h4>
            <p>{second_innings || 'Not available'}</p>

            <h4>Match Status</h4>
            <p>{match_status}</p>
          </div>

          <div>
            <h4>Man of the Match</h4>
            <p>{man_of_the_match || 'Not available'}</p>

            <h4>Opponent Score</h4>
            <p>{competing_team_score || 'Not available'}</p>

            <h4>Umpires</h4>
            <p>{umpires || 'Not available'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestMatch