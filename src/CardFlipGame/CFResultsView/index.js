import './index.css'

const CFResultsView = props => {
  const {count, onClickPlayAgain, flips} = props

  const onClickingPlayAgainBtn = () => {
    onClickPlayAgain()
  }

  return count === 10 ? (
    <div className="CFResultsViewBgContainer">
      <img
        src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741781232/2x_pciyfe.png"
        alt="grinning face with big eyes"
        className="wonImg"
      />
      <h1 className="CFResultViewHeader">Congratulations!</h1>
      <p className="CFResultViewCount">No.of Flips - {flips}</p>
      <p className="CFResultViewDescription">
        You matched all of the cards in record time
      </p>
      <button
        className="rpsStartPlayingBtn"
        type="button"
        onClick={onClickingPlayAgainBtn}
      >
        <span className="rpsStartPlayingText">Play Again</span>
      </button>
    </div>
  ) : (
    <div className="CFResultsViewBgContainer">
      <img
        src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741780940/05_Pokerface_yvcmcc.png"
        alt="neutral face"
        className="wonImg"
      />
      <h1 className="CFResultViewHeader">Better luck next time!</h1>
      <p className="CFResultViewCount">No.of Flips - {flips}</p>
      <p className="CFResultViewDescription">
        You did not match all of the cards in record time
      </p>
      <button
        className="rpsStartPlayingBtn"
        type="button"
        onClick={onClickingPlayAgainBtn}
      >
        <span className="rpsStartPlayingText">Play Again</span>
      </button>
    </div>
  )
}

export default CFResultsView
