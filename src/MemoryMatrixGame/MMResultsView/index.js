import {Line} from 'rc-progress'
import './index.css'

const emojiList = [
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1741780940/05_Pokerface_yvcmcc.png',
    alt: 'neutral face',
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1741781050/fbsidj6cu8wmacnnf2xm.png',
    alt: 'grimacing face',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1741781161/2x_yz7swj.png',
    alt: 'slightly smiling face',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1741781232/2x_pciyfe.png',
    alt: 'grinning face with big eyes',
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1741781378/04_Grin_olkx3y.png',
    alt: 'grinning face with smiling eyes',
  },
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1741781449/05_Laugh_wiky4l.png',
    alt: 'beaming face with smiling eyes',
  },
  {
    id: 7,
    imgUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1741781507/02_Happy_he0dwl.png',
    alt: 'grinning face',
  },
  {
    id: 8,
    imgUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1741781572/02_Like_a_boss_ky8csw.png',
    alt: 'smiling face with sunglasses',
  },
]

const MMResultsView = props => {
  const {onClickPlayAgain, level} = props
  const progressPercentage = (level / 15) * 100

  const onClickingPlayAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="MMResultViewBgContainer">
      <div className="lineProgressContainer">
        <ul className="emojiContainer">
          {emojiList.map(each => (
            <li key={each.id} className="eachEmojiContainerr">
              <img src={each.imgUrl} alt={each.alt} className="emoji" />
            </li>
          ))}
        </ul>
        <Line
          percent={progressPercentage}
          strokeWidth={1}
          strokeColor="#467AFF"
          className="lineProgress"
        />
        <div className="levelsContainer">
          <p className="levelsTxt">Level 1</p>
          <p className="levelsTxt">Level 5</p>
          <p className="levelsTxt">Level 10</p>
          <p className="levelsTxt lastLevel">Level 15</p>
        </div>
      </div>
      <h1 className="resultsViewHeader">Congratulations!</h1>
      <p className="resultsViewPara">You have reached level {level}</p>
      <button
        className="MMStartPlayingBtn"
        type="button"
        onClick={onClickingPlayAgain}
      >
        <span className="mmStartPlayingText">Play Again</span>
      </button>
    </div>
  )
}

export default MMResultsView
