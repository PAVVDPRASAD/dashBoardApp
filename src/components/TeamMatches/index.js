// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: [], isLoading: true}

  componentDidMount() {
    this.getTeamDatailsData()
  }

  getTeamDatailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const filtteredData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachmatch => ({
        umpires: eachmatch.umpires,
        result: eachmatch.result,
        manOfTheMatch: eachmatch.man_of_the_match,
        id: eachmatch.id,
        date: eachmatch.date,
        venue: eachmatch.venue,
        competingTeam: eachmatch.competing_team,
        competingTeamLogo: eachmatch.competing_team_logo,
        firstInnings: eachmatch.first_innings,
        secondInnings: eachmatch.second_innings,
        matchStatus: eachmatch.match_status,
      })),
    }
    this.setState({teamDetails: filtteredData, isLoading: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {teamDetails, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails

    return (
      <div className="team-matches-bg-clr">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className={`team-banner-bg-cont ${this.getRouteClassName()}`}>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="image-banner"
            />

            <LatestMatch lstMatch={latestMatchDetails} />

            <ul>
              {recentMatches.map(recentMatch => (
                <MatchCard key={recentMatch.id} recentMatch={recentMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
