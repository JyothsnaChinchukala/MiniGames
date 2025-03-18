import {Component} from 'react'
import CardFlipRulesView from './CardFlipRulesView'
import CardFlipPlayingView from './CardFlipPlayingView'

class CardFlipGame extends Component {
  state = {isCFRulesDisplayed: true, isCFPlayingViewEnabled: false}

  onClickingStartPlaying = () => {
    const {isCFRulesDisplayed, isCFPlayingViewEnabled} = this.state
    this.setState({
      isCFRulesDisplayed: !isCFRulesDisplayed,
      isCFPlayingViewEnabled: !isCFPlayingViewEnabled,
    })
  }

  onClickingBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isCFRulesDisplayed, isCFPlayingViewEnabled} = this.state
    return (
      <>
        {isCFRulesDisplayed === true && (
          <CardFlipRulesView
            onClickingStartPlaying={this.onClickingStartPlaying}
            onClickingBack={this.onClickingBack}
          />
        )}
        {isCFPlayingViewEnabled === true && (
          <CardFlipPlayingView onClickingBack={this.onClickingBack} />
        )}
      </>
    )
  }
}

export default CardFlipGame
