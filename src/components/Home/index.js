// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const filteredDate = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeams: filteredDate, isLoading: false})
  }

  render() {
    const {iplTeams, isLoading} = this.state
    return (
      <div className="home-bg-img">
        <div className="ipl-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul>
            {iplTeams.map(eachTeam => (
              <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
