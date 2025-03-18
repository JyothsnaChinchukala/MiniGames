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
        <div className="container1">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740992142/Group_7600_izmb2f.png"
            alt="rock"
            className="eachImg"
          />
          <div className="beatsArrowContainer1">
            <p className="beatsText">Beats</p>
            <img
              src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740990331/arrow_right_alt_mg1qmh.png"
              className="arrow1"
              alt="arrow"
            />
          </div>
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740992682/Group_7598_oism6f.png"
            alt="scissor"
            className="eachImg"
          />
        </div>
        <div className="container2">
          <div className="beatsArrowContainer2">
            <p className="beatsText">Beats</p>
            <img
              src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740990331/arrow_right_alt_mg1qmh.png"
              className="arrow2"
              alt="arrow"
            />
          </div>
          <div className="beatsArrowContainer3">
            <p className="beatsText">Beats</p>
            <img
              src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740990331/arrow_right_alt_mg1qmh.png"
              className="arrow3"
              alt="arrow"
            />
          </div>
        </div>
        <div className="container3">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740996483/Group_6943_mnre8w.png"
            alt="paper"
            className="eachImg"
          />
        </div>
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
