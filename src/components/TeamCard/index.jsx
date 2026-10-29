import {Link} from 'react-router-dom'
import './index.css'

function TeamCard({teamDetails}) {
  const {id, name, team_image_url} = teamDetails

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <img
          src={team_image_url}
          alt={name}
          className="team-card-logo"
        />
        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard