import {Component} from 'react'
import RPSRulesView from './RPSRulesView'
import RPSPlayingView from './RPSPlayingView'

class RockPaperScissors extends Component {
  state = {isRPSRulesDisplayed: true, isRPSPlayingViewEnabled: false}

  onClickingStartPlaying = () => {
    const {isRPSRulesDisplayed, isRPSPlayingViewEnabled} = this.state
    this.setState({
      isRPSRulesDisplayed: !isRPSRulesDisplayed,
      isRPSPlayingViewEnabled: !isRPSPlayingViewEnabled,
    })
  }

  onClickingBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isRPSRulesDisplayed, isRPSPlayingViewEnabled} = this.state
    return (
      <>
        {isRPSRulesDisplayed === true && (
          <RPSRulesView
            onClickingStartPlaying={this.onClickingStartPlaying}
            onClickingBack={this.onClickingBack}
          />
        )}
        {isRPSPlayingViewEnabled === true && (
          <RPSPlayingView onClickingBack={this.onClickingBack} />
        )}
      </>
    )
  }
}

export default RockPaperScissors
