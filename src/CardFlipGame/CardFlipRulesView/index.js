import {BiArrowBack} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import {CFRuleSet1, CFRuleSet2} from '../../AllGameRules'
import './index.css'

const CardFlipRulesView = props => {
  const {onClickingStartPlaying, onClickingBack} = props

  const onClickStartPlayingBtn = () => {
    onClickingStartPlaying()
  }

  const onClickingBackBtn = () => {
    onClickingBack()
  }

  return (
    <div className="CFRulesViewBgContainer">
      <button
        className="rpsBackContainer"
        type="button"
        onClick={onClickingBackBtn}
      >
        <BiArrowBack className="rpsArrowIcon" />
        <h1 className="rpsBackContent">Back</h1>
      </button>
      <div className="memoryMatrixImgContainer">
        <img
          src="https://res.cloudinary.com/dikncs8sp/image/upload/v1742196535/animals_bxrybj.png"
          alt="card flip memory game"
          className="memoryMatrixImg"
        />
      </div>
      <div className="rpsRulesContentContainer">
        <h1 className="rpsRulesText">Rules</h1>

        <ul className="rpseachRuleSetContainer">
          {CFRuleSet1.map(eachRule => (
            <li key={eachRule.id} className="eachRules">
              <div className="dotContainer">
                <BsDot className="dotEl" />
              </div>
              <p className="cfEachRuleText">{eachRule.rule}</p>
            </li>
          ))}
          {CFRuleSet2.map(eachRule => (
            <li key={eachRule.id} className="eachRules">
              <div className="dotContainer">
                <BsDot className="dotEl" />
              </div>
              <p className="cfEachRuleText">{eachRule.rule}</p>
            </li>
          ))}
        </ul>

        <button
          className="rpsStartPlayingBtn"
          type="button"
          onClick={onClickStartPlayingBtn}
        >
          <span className="rpsStartPlayingText">Start Playing</span>
        </button>
      </div>
    </div>
  )
}

export default CardFlipRulesView
