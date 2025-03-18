import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import DisplayRulesModal from '../../../DisplayRulesModal'
import {EmojiGameRuleSet} from '../../../AllGameRules'
import {EmojisList} from '../../../AllGamesImages'
import EmojiCard from '../EmojiCard'
import EmojiGameWonView from '../EmojiGameWonView'
import EmojiGameLossView from '../EmojiGameLossView'
import './index.css'

class EmojiGamePlayingView extends Component {
  state = {
    score: 0,
    isGamePlayingViewEnabled: true,
    currentSelectedId: '',
    isWon: false,
    isLoss: false,
    emojisList: EmojisList,
  }

  onClickingBackBtn = () => {
    const {onClickingBack} = this.props
    onClickingBack()
  }

  onClickPlayAgain = () => {
    this.setState({
      score: 0,
      isGamePlayingViewEnabled: true,
      currentSelectedId: '',
      isWon: false,
      isLoss: false,
    })
  }

  onClickEmojiCard = clickedId => {
    const {currentSelectedId, score, emojisList} = this.state
    const shuffledArray = emojisList.sort(() => Math.random() - 0.5)
    this.setState({emojisList: shuffledArray})
    if (currentSelectedId === '') {
      this.setState({score: 1, currentSelectedId: clickedId})
    } else if (currentSelectedId !== clickedId) {
      if (score <= 11) {
        const updatedScore = score + 1
        if (updatedScore !== 12) this.setState({score: updatedScore})
        else {
          this.setState({isWon: true, isGamePlayingViewEnabled: false})
        }
      }
    } else {
      console.log('You Lost')
      this.setState({isLoss: true, isGamePlayingViewEnabled: false})
    }
  }

  onGamePlayingViewEnabled = () => {
    const {score} = this.state
    return (
      <div className="emojiPlayingViewBgContainer">
        <div className="navBarBgContainer">
          <div className="navBarEmojiContainer">
            <img
              src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740726334/wink_1_yhbynt.jpg"
              alt="emoji logo"
              className="navBarEmojiImg"
            />
            <h1 className="navBarHeader">Emoji Game</h1>
          </div>
          <div className="scoreContainer">
            <p>
              Score: <span className="scoreValue">{score}</span>
            </p>
          </div>
        </div>
        <div className="bottomContainer">
          <div className="backRulesContainer">
            <div className="backBtnContainer">
              <button
                className="backContainer"
                type="button"
                onClick={this.onClickingBackBtn}
              >
                <BiArrowBack className="arrowIcon" />
                <h1 className="backContent">Back</h1>
              </button>
            </div>
            <div>
              <DisplayRulesModal
                ruleSet1={EmojiGameRuleSet}
                setRulesColor="#334155"
              />
            </div>
          </div>
          <ul className="allEmojiImgsContainer">
            {EmojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiValue={eachEmoji}
                onClickEmojiCard={this.onClickEmojiCard}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isGamePlayingViewEnabled, score, isWon, isLoss} = this.state
    return (
      <>
        {isGamePlayingViewEnabled === true && this.onGamePlayingViewEnabled()}
        {isWon === true && (
          <EmojiGameWonView onClickPlayAgain={this.onClickPlayAgain} />
        )}
        {isLoss === true && (
          <EmojiGameLossView
            onClickPlayAgain={this.onClickPlayAgain}
            score={score}
          />
        )}
      </>
    )
  }
}

export default EmojiGamePlayingView
