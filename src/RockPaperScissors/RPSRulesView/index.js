import {BiArrowBack} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import {RpsRuleSet1, RpsRuleSet2} from '../../AllGameRules'
import './index.css'

const RPSRulesView = props => {
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
      <h1 className="rpsRulesViewHeader">ROCK PAPER SCISSOR</h1>
      <div className="rpsRulesWithImgsContainer">
        <img
          src="https://res.cloudinary.com/dikncs8sp/image/upload/v1742568686/Group_7469_xxhbtl.png"
          alt="rock paper scissor"
          className="gameRulesImg"
        />
      </div>
      <div className="rpsRulesContentContainer">
        <h1 className="rpsRulesText">Rules</h1>
        <div className="rpsRulesContent">
          <ul className="rpseachRuleSetContainer">
            {RpsRuleSet1.map(eachRule => (
              <li key={eachRule.id} className="rpsEachRules">
                <div className="dotContainer">
                  <BsDot className="dotEl" />
                </div>
                <p className="rpsEachRuleText">{eachRule.rule}</p>
              </li>
            ))}
            {RpsRuleSet2.map(eachRule => (
              <li key={eachRule.id} className="rpsEachRules">
                <div className="dotContainer">
                  <BsDot className="dotEl" />
                </div>
                <p className="rpsEachRuleText">{eachRule.rule}</p>
              </li>
            ))}
          </ul>
        </div>
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

export default RPSRulesView
