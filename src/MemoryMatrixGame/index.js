import {Component} from 'react'
import MMRulesView from './MMRulesView'
import MMPlayingView from './MMPlayingView'

class MemoryMatrixGame extends Component {
  state = {isMMRulesDisplayed: true, isMMPlayingViewEnabled: false}

  onClickingStartPlaying = () => {
    const {isMMRulesDisplayed, isMMPlayingViewEnabled} = this.state
    this.setState({
      isMMRulesDisplayed: !isMMRulesDisplayed,
      isMMPlayingViewEnabled: !isMMPlayingViewEnabled,
    })
  }

  onClickingBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isMMRulesDisplayed, isMMPlayingViewEnabled} = this.state
    return (
      <>
        {isMMRulesDisplayed === true && (
          <MMRulesView
            onClickingStartPlaying={this.onClickingStartPlaying}
            onClickingBack={this.onClickingBack}
          />
        )}
        {isMMPlayingViewEnabled === true && (
          <MMPlayingView onClickingBack={this.onClickingBack} />
        )}
      </>
    )
  }
}

export default MemoryMatrixGame
