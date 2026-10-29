import './index.css'

function MatchCard({matchDetails}) {
  const {
    competing_team,
    competing_team_logo,
    result,
    match_status,
    date,
  } = matchDetails

  const isWon = match_status === 'Won'

  return (
    <li className="match-card">
      <img
        src={competing_team_logo}
        alt={competing_team}
        className="match-card-logo"
      />

      <h3 className="match-card-team">{competing_team}</h3>
      <p className="match-card-date">{date}</p>
      <p className="match-card-result">{result}</p>

      <p className={`match-card-status ${isWon ? 'won' : 'lost'}`}>
        {match_status}
      </p>
    </li>
  )
}

export default MatchCard