const EmojiGameWonView = props => {
  const {onClickPlayAgain} = props
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
            <h1 className="youLoseText">You Won</h1>
            <p className="bestScoreText">Best Score</p>
            <p className="scoreValue">12/12</p>
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
              src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740826631/Image_1_cctkyi.jpg"
              alt="won"
              className="lossViewEmoji"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmojiGameWonView
