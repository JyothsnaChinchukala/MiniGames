import {Component} from 'react'
import EmojiGameRulesView from './EmojiGameRulesView'
import EmojiGamePlayingView from './EmojiGamePlayingView'

class EmojiGameRoute extends Component {
  state = {isEmojiRulesDisplayed: true, isGamePlayingViewEnabled: false}

  onClickingStartPlaying = () => {
    const {isEmojiRulesDisplayed, isGamePlayingViewEnabled} = this.state
    this.setState({
      isEmojiRulesDisplayed: !isEmojiRulesDisplayed,
      isGamePlayingViewEnabled: !isGamePlayingViewEnabled,
    })
  }

  onClickingBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {isEmojiRulesDisplayed, isGamePlayingViewEnabled} = this.state
    return (
      <>
        {isEmojiRulesDisplayed === true && (
          <EmojiGameRulesView
            onClickingStartPlaying={this.onClickingStartPlaying}
            onClickingBack={this.onClickingBack}
          />
        )}
        {isGamePlayingViewEnabled === true && (
          <EmojiGamePlayingView onClickingBack={this.onClickingBack} />
        )}
      </>
    )
  }
}

export default EmojiGameRoute
