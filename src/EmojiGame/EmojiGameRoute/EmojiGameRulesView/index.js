import {BiArrowBack} from 'react-icons/bi'
// import {BsDot} from 'react-icons/bs'
import {EmojiGameRuleSet} from '../../../AllGameRules'
import './index.css'

const EmojiGameRulesView = props => {
  const {onClickingStartPlaying, onClickingBack} = props

  const onClickStartPlayingBtn = () => {
    onClickingStartPlaying()
  }

  const onClickingBackBtn = () => {
    onClickingBack()
  }

  return (
    <div className="emojiGameBgContainer">
      <button
        className="BackContainer"
        type="button"
        onClick={onClickingBackBtn}
      >
        <BiArrowBack className="arrowIcon" />
        <h1 className="backContent">Back</h1>
      </button>
      <div className="GameRulesContainer">
        <div className="rulesEmojiContainer">
          <img
            className="rulesCardEmoji"
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740552322/Asset_1_4x_1_1_zfhwdj.jpg"
            alt="emoji game"
          />
          <h1 className="emojiGameText">Emoji Game</h1>
        </div>
        <div className="RulesContentContainer">
          <h1 className="rulesText">Rules</h1>
          <ul className="eachRuleContainer">
            {EmojiGameRuleSet.map(eachRule => (
              <li key={eachRule.id} className="eachRules">
                <div className="dotContainer">
                  <p className="dotEl">.</p>
                </div>
                <p className="eachRuleText">{eachRule.rule}</p>
              </li>
            ))}
          </ul>
          <button
            className="startPlayingBtn"
            type="button"
            onClick={onClickStartPlayingBtn}
          >
            <span className="startPlayingText">Start Playing</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmojiGameRulesView
