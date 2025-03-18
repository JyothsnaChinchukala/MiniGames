import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import DisplayRulesModal from '../../DisplayRulesModal'
import RPSResultsView from '../RPSResultsView'
import {RpsRuleSet1, RpsRuleSet2} from '../../AllGameRules'
import './index.css'

const rpsRules = [
  {
    id: 'rock',
    value: 'Rock',
    imageUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1740992142/Group_7600_izmb2f.png',
  },
  {
    id: 'paper',
    value: 'Paper',
    imageUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1740996483/Group_6943_mnre8w.png',
  },
  {
    id: 'scissor',
    value: 'Scissor',
    imageUrl:
      'https://res.cloudinary.com/dikncs8sp/image/upload/v1740992682/Group_7598_oism6f.png',
  },
]

class RPSPlayingView extends Component {
  state = {
    isPlayingViewDisplayed: true,
    score: 0,
    result: '',
    selectedImg: '',
    randomImg: '',
    selectedId: '',
    randomId: '',
  }

  onClickingBackBtn = () => {
    const {onClickingBack} = this.props
    onClickingBack()
  }

  getResult = selectedIdEl => {
    const {score} = this.state
    const selectedImage = rpsRules.find(each => {
      if (each.id === selectedIdEl) {
        return each.imageUrl
      }
      return null
    })
    const systemSelectedId = Math.floor(Math.random() * 2)
    const randomIdEl = rpsRules[systemSelectedId].id
    if (
      (selectedIdEl === 'rock' && randomIdEl === 'scissor') ||
      (selectedIdEl === 'paper' && randomIdEl === 'rock') ||
      (selectedIdEl === 'scissor' && randomIdEl === 'paper')
    ) {
      const updatedScore = score + 1
      this.setState({
        score: updatedScore,
        result: 'won',
        selectedImg: selectedImage.imageUrl,
        randomImg: rpsRules[systemSelectedId].imageUrl,
        randomId: randomIdEl,
        selectedId: selectedIdEl,
      })
    } else if (
      (selectedIdEl === 'rock' && randomIdEl === 'paper') ||
      (selectedIdEl === 'scissor' && randomIdEl === 'rock') ||
      (selectedIdEl === 'paper' && randomIdEl === 'scissor')
    ) {
      const updatedScore = score - 1
      this.setState({
        score: updatedScore,
        result: 'lose',
        selectedImg: selectedImage.imageUrl,
        randomImg: rpsRules[systemSelectedId].imageUrl,
        randomId: randomIdEl,
        selectedId: selectedIdEl,
      })
    } else if (
      (selectedIdEl === 'rock' && randomIdEl === 'rock') ||
      (selectedIdEl === 'paper' && randomIdEl === 'paper') ||
      (selectedIdEl === 'scissor' && randomIdEl === 'scissor')
    ) {
      const updatedScore = score
      this.setState({
        score: updatedScore,
        result: 'draw',
        selectedImg: selectedImage.imageUrl,
        randomImg: rpsRules[systemSelectedId].imageUrl,
        randomId: randomIdEl,
        selectedId: selectedIdEl,
      })
    }
  }

  onClickingCard = id => {
    this.getResult(id)
    const {isPlayingViewDisplayed} = this.state
    this.setState({
      isPlayingViewDisplayed: !isPlayingViewDisplayed,
    })
  }

  onPlayingViewEnabled = () => (
    <div className="rpsPlayingViewBgContainer">
      <div className="backRulesContainer">
        <button
          className="rpsBackContainer"
          type="button"
          onClick={this.onClickingBackBtn}
        >
          <BiArrowBack className="rpsArrowIcon" />
          <h1 className="rpsBackContent">Back</h1>
        </button>
        <div>
          <DisplayRulesModal
            ruleSet1={RpsRuleSet1}
            ruleSet2={RpsRuleSet2}
            setRulesColor="#ffffff"
          />
        </div>
      </div>
      <div className="rpsPlayingViewBottomContainer">
        <h1 className="rpsRulesViewHeader">ROCK PAPER SCISSOR</h1>
        <h1 className="rpsRulesViewHeader1">Let&#39;s pick</h1>
        <div className="rpsRulesWithImgsContainer">
          <div className="container1">
            <button
              type="button"
              data-testid="rockButton"
              className="eachRpsButton"
              onClick={() => this.onClickingCard('rock')}
            >
              <img
                src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740992142/Group_7600_izmb2f.png"
                alt="rock"
                className="eachImgWithBtn"
              />
            </button>
            <div className="beatsArrowContainer1">
              <p className="beatsText">Beats</p>
              <img
                src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740990331/arrow_right_alt_mg1qmh.png"
                className="arrow1"
                alt="arrow"
              />
            </div>
            <button
              type="button"
              data-testid="scissorButton"
              className="eachRpsButton"
              onClick={() => this.onClickingCard('scissor')}
            >
              <img
                src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740992682/Group_7598_oism6f.png"
                alt="scissor"
                className="eachImgWithBtn"
              />
            </button>
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
            <button
              type="button"
              data-testid="paperButton"
              className="eachRpsButton"
              onClick={() => this.onClickingCard('paper')}
            >
              <img
                src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740996483/Group_6943_mnre8w.png"
                alt="paper"
                className="eachImgWithBtn"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  onClickPlayAgainBtn = () => {
    this.setState({
      isPlayingViewDisplayed: true,
      result: '',
      selectedImg: '',
      randomImg: '',
      selectedId: '',
      randomId: '',
    })
  }

  render() {
    const {
      isPlayingViewDisplayed,
      score,
      result,
      selectedImg,
      randomImg,
      selectedId,
      randomId,
    } = this.state
    return isPlayingViewDisplayed === true ? (
      this.onPlayingViewEnabled()
    ) : (
      <RPSResultsView
        score={score}
        result={result}
        selectedImg={selectedImg}
        randomImg={randomImg}
        selectedId={selectedId}
        randomId={randomId}
        onClickPlayAgainBtn={this.onClickPlayAgainBtn}
      />
    )
  }
}

export default RPSPlayingView
