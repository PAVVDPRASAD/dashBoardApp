// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
