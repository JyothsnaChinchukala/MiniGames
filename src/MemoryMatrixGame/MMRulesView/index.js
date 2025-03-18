import {BiArrowBack} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import {RpsRuleSet1, RpsRuleSet2} from '../../AllGameRules'
import './index.css'

const MMRulesView = props => {
  const {onClickingStartPlaying, onClickingBack} = props

  const onClickStartPlayingBtn = () => {
    onClickingStartPlaying()
  }

  const onClickingBackBtn = () => {
    onClickingBack()
  }

  return (
    <div className="rpsRulesViewBgContainer">
      <button
        className="rpsBackContainer"
        type="button"
        onClick={onClickingBackBtn}
      >
        <BiArrowBack className="rpsArrowIcon" />
        <h1 className="rpsBackContent">Back</h1>
      </button>
      <h1 className="rpsRulesViewHeader">Memory Matrix</h1>
      <div className="memoryMatrixImgContainer">
        <img
          src="https://res.cloudinary.com/dikncs8sp/image/upload/v1741083214/memory_wfy0ez.png"
          alt="memory matrix game"
          className="memoryMatrixImg"
        />
      </div>
      <div className="rpsRulesContentContainer">
        <h1 className="rpsRulesText">Rules</h1>
        <div className="rpsRulesContent">
          <ul className="rpseachRuleSetContainer">
            {RpsRuleSet1.map(eachRule => (
              <li key={eachRule.id} className="rpsEachRules">
                <div className="rpsDotContainer">
                  <BsDot className="dotEl" />
                </div>
                <p className="rpsEachRuleText">{eachRule.rule}</p>
              </li>
            ))}
          </ul>
          <ul className="rpseachRuleSetContainer">
            {RpsRuleSet2.map(eachRule => (
              <li key={eachRule.id} className="rpsEachRules">
                <div className="rpsDotContainer">
                  <BsDot className="dotEl" />
                </div>
                <p className="rpsEachRuleText">{eachRule.rule}</p>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="MMStartPlayingBtn"
          type="button"
          onClick={onClickStartPlayingBtn}
        >
          <span className="mmStartPlayingText">Start Playing</span>
        </button>
      </div>
    </div>
  )
}

export default MMRulesView
