import './index.css'

const RPSResultsView = props => {
  const {
    score,
    result,
    selectedImg,
    randomImg,
    randomId,
    selectedId,
    onClickPlayAgainBtn,
  } = props

  const onClickStartPlayingBtn = () => {
    onClickPlayAgainBtn()
  }

  const getWonResultView = () => (
    <div className="rpsResultViewBgContainer">
      <h1 className="rpsResultViewHeader">Rock Paper Scissor</h1>
      <div className="rpsScoreContainer">
        <ul className="listsInScoreContainer">
          <li key="rock" className="textContent">
            Rock
          </li>
          <li key="paper" className="textContent">
            Paper
          </li>
          <li key="scissor" className="textContent">
            Scissor
          </li>
        </ul>
        <div className="resultEmojiImg">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741076228/Group_7618_vrfc8w.png"
            alt="won emoji"
            className="emojiImgEl"
          />
        </div>
        <div className="scoreValueContainer">
          <p className="scoreText">Score</p>
          <p className="scoreValue">{score}</p>
        </div>
      </div>
      <div className="youAndOpponentContainer">
        <p className="youText">You</p>
        <p className="youText">Opponent</p>
      </div>
      <div className="rpsFinalResultsContainer">
        <div className="selectedImgContainer">
          <img src={selectedImg} alt={selectedId} className="emoji" />
        </div>
        <div className="groupContainer">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741077367/Emoji_1_oxbtuo.png"
            alt="Smiling face with star eyes"
            className="smallEmojiImg"
          />
          <p className="youWonText">YOU WON</p>
          <button
            className="rpsPlayAgainBtn"
            type="button"
            onClick={onClickStartPlayingBtn}
          >
            <span className="rpsStartPlayingText">Play Again</span>
          </button>
        </div>
        <div className="selectedImgContainer">
          <img src={randomImg} alt={randomId} className="emoji" />
        </div>
      </div>
    </div>
  )

  const getLoseResultView = () => (
    <div className="rpsResultViewBgContainer">
      <h1 className="rpsResultViewHeader">Rock Paper Scissor</h1>
      <div className="rpsScoreContainer">
        <ul className="listsInScoreContainer">
          <li key="rock" className="textContent">
            Rock
          </li>
          <li key="paper" className="textContent">
            Paper
          </li>
          <li key="scissor" className="textContent">
            Scissor
          </li>
        </ul>
        <div className="resultEmojiImg">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741077073/Group_7618_3_uph30h.png"
            alt="lose emoji"
            className="emojiImgEl"
          />
        </div>
        <div className="scoreValueContainer">
          <p className="scoreText">Score</p>
          <p className="scoreValue">{score}</p>
        </div>
      </div>
      <div className="youAndOpponentContainer">
        <p className="youText">You</p>
        <p className="youText">Opponent</p>
      </div>
      <div className="rpsFinalResultsContainer">
        <div className="selectedImgContainer">
          <img src={selectedImg} alt={selectedId} className="emoji" />
        </div>
        <div className="groupContainer">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741077377/Emoji_ukcbne.png"
            alt="Face without mouth"
            className="smallEmojiImg"
          />
          <p className="youWonText">YOU LOSE</p>
          <button
            className="rpsPlayAgainBtn"
            type="button"
            onClick={onClickStartPlayingBtn}
          >
            <span className="rpsStartPlayingText">Play Again</span>
          </button>
        </div>
        <div className="selectedImgContainer">
          <img src={randomImg} alt={randomId} className="emoji" />
        </div>
      </div>
    </div>
  )

  const getDrawResultView = () => (
    <div className="rpsResultViewBgContainer">
      <h1 className="rpsResultViewHeader">Rock Paper Scissor</h1>
      <div className="rpsScoreContainer">
        <ul className="listsInScoreContainer">
          <li key="rock" className="textContent">
            Rock
          </li>
          <li key="paper" className="textContent">
            Paper
          </li>
          <li key="scissor" className="textContent">
            Scissor
          </li>
        </ul>
        <div className="resultEmojiImg">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741076988/Group_7618_1_sdiqau.png"
            alt="draw emoji"
            className="emojiImgEl"
          />
        </div>
        <div className="scoreValueContainer">
          <p className="scoreText">Score</p>
          <p className="scoreValue">{score}</p>
        </div>
      </div>
      <div className="youAndOpponentContainer">
        <p className="youText">You</p>
        <p className="youText">Opponent</p>
      </div>
      <div className="rpsFinalResultsContainer">
        <div className="selectedImgContainer">
          <img src={selectedImg} alt={selectedId} className="emoji" />
        </div>
        <div className="groupContainer">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741077441/Emoji_3_dpiusj.png"
            alt="Face without mouth"
            className="smallEmojiImg"
          />
          <p className="youWonText">IT IS DRAW</p>
          <button
            className="rpsPlayAgainBtn"
            type="button"
            onClick={onClickStartPlayingBtn}
          >
            <span className="rpsStartPlayingText">Play Again</span>
          </button>
        </div>
        <div className="selectedImgContainer">
          <img src={randomImg} alt={randomId} className="emoji" />
        </div>
      </div>
    </div>
  )

  const getResultView = () => {
    switch (result) {
      case 'won':
        console.log('Won')
        return getWonResultView()
      case 'lose':
        console.log('Lose')
        return getLoseResultView()
      case 'draw':
        console.log('Draw')
        return getDrawResultView()
      default:
        console.log('Null')
        return null
    }
  }

  return getResultView()
}

export default RPSResultsView
