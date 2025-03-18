import './index.css'

const EmojiGameLossView = props => {
  const {score, onClickPlayAgain} = props
  const onClickingPlayAgain = () => {
    onClickPlayAgain()
  }

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
      </div>
      <div className="bottomTextContainer">
        <div className="lossViewContainer">
          <div className="lossViewTextContainer">
            <h1 className="youLoseText">You Lose</h1>
            <p className="bestScoreText">Best Score</p>
            <h1 className="scoreValue">{`0${score}/12`}</h1>
            <button
              className="playAgainBtn"
              type="button"
              onClick={onClickingPlayAgain}
            >
              Play Again
            </button>
          </div>
          <div className="lossViewImgContainer">
            <img
              src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740825604/Image_ytanja.jpg"
              alt="lose"
              className="lossViewEmoji"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default EmojiGameLossView
