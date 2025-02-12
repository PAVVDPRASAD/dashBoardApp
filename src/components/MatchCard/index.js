// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatch

  const matchResult = matchStatus === 'Won' ? 'match-won' : 'match-loss'
  return (
    <li className="match-card-cont">
      <img
        className="match-card-img"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={matchResult}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
