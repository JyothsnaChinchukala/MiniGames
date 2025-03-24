import {useEffect} from 'react'
import './index.css'

const CFResultsView = props => {
  const {status, onClickPlayAgain, flips} = props

  const onClickingPlayAgainBtn = () => {
    onClickPlayAgain()
  }

  useEffect(() => {
    console.log('Winning Condition:', status, 'Flips:', flips)
    console.log(`No.of Flips - ${flips}`)
    console.log('Winning Condition:', status, 'Flips:', flips)
  }, [status, flips])

  useEffect(() => {
    console.log('Jest Rendered Output:', document.body.innerHTML)
  }, [])

  return (
    <div className="CFResultsViewBgContainer">
      <img
        src={
          status === 'won'
            ? 'https://res.cloudinary.com/dikncs8sp/image/upload/v1741781232/2x_pciyfe.png'
            : 'https://res.cloudinary.com/dikncs8sp/image/upload/v1741780940/05_Pokerface_yvcmcc.png'
        }
        alt={status === 'won' ? 'grinning face with big eyes' : 'neutral face'}
        className="wonImg"
      />
      <h1 className="CFResultViewHeader">
        {status === 'won' ? 'Congratulations' : 'Better luck next time'}
      </h1>
      <p className="CFResultViewCount">{`No.of Flips - ${flips}`}</p>
      <h1 className="CFResultViewDescription">
        {status === 'won'
          ? 'You matched all of the cards in record time'
          : 'You did not match all of the cards in record time'}
      </h1>
      <button
        className="rpsStartPlayingBtn"
        type="button"
        onClick={() => onClickingPlayAgainBtn()}
      >
        Play Again
      </button>
    </div>
  )
}

export default CFResultsView
