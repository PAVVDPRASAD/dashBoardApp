// Write your code here
import './index.css'

const LatestMatch = props => {
  const {lstMatch} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = lstMatch

  return (
    <div className="latest-match-bg">
      <h1 className="latest-match-heading ">Latest Matches</h1>
      <div className="latest-matches-bg-cont">
        <div className="team-results">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img
            className="latest-team-image"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr />
        <div className="team-results">
          <p>First Innings </p>
          <p> {firstInnings}</p>
          <p>Second Innings </p>
          <p> {secondInnings}</p>
          <p>Man Of The Match </p>
          <p> {manOfTheMatch}</p>
          <p>Umpires </p>
          <p> {umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
