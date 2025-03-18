import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import DisplayRulesModal from '../../DisplayRulesModal'
import CFResultsView from '../CFResultsView'
import {CFRuleSet1, CFRuleSet2} from '../../AllGameRules'
import {CardsData} from '../../AllGamesImages'
import './index.css'

let timerId
let timerIdd

class CardFlipPlayingView extends Component {
  state = {
    isPlayingViewDisplayed: true,
    noOfFlips: 0,
    score: 0,
    timer: 120,
    cardsItems: [],
    firstSelectedCard: '',
    flipCardId: [],
    flipCardName: [],
  }

  updateTime = () => {
    const {timer, score} = this.state
    const updatedTimer = timer - 1
    if (timer === 0 || score === 10) {
      this.setState({isPlayingViewDisplayed: false})
      clearInterval(timerId)
    }
    this.setState({timer: updatedTimer})
  }

  getTimer = () => {
    timerId = setInterval(() => {
      this.updateTime()
    }, 1000)
  }

  getTimeInFormat = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)
    const formattedMinutes = () => {
      if (minutes < 9) {
        return `0${minutes}`
      }
      return minutes
    }
    const remainingSeconds = timer % 60
    const formattedSeconds = () => {
      if (remainingSeconds < 10) {
        return `0${remainingSeconds}`
      }
      return remainingSeconds
    }

    return `${formattedMinutes()}:${formattedSeconds()}`
  }

  componentDidMount = () => {
    this.getTimer()
    this.getShuffledCards()
  }

  onClickingBackBtn = () => {
    const {onClickingBack} = this.props
    onClickingBack()
  }

  onClickPlayAgain = () => {
    this.setState(
      {
        isPlayingViewDisplayed: true,
        timer: 120,
        score: 0,
        noOfFlips: 0,
      },
      () => {
        this.getTimer()
        this.getShuffledCards()
      },
    )
  }

  getShuffledCards = () => {
    const doubledCardsData = [...CardsData, ...CardsData]
    let updatedCardsData = []
    updatedCardsData = doubledCardsData.map(each => ({
      id: uuidv4(),
      name: each.name,
      image: each.image,
    }))
    for (let i = updatedCardsData.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[updatedCardsData[i], updatedCardsData[j]] = [
        updatedCardsData[j],
        updatedCardsData[i],
      ]
    }

    this.setState({cardsItems: updatedCardsData})
  }

  onClickFlipCard = (cardName, cardIndex) => {
    const {
      flipCardId,
      flipCardName,
      score,
      noOfFlips,
      firstSelectedCard,
    } = this.state
    const updatedFlipCount = noOfFlips + 1

    const onClickingSecondCard = () => {
      const updatedCardId = flipCardId.filter(each => {
        if (each !== firstSelectedCard && each !== cardIndex) {
          return each
        }
        return null
      })

      this.setState({
        flipCardId: updatedCardId,
        flipCardName: [],
        noOfFlips: updatedFlipCount,
        firstSelectedCard: '',
      })
    }

    if (firstSelectedCard === '') {
      flipCardId.push(cardIndex)
      flipCardName.push(cardName)
      this.setState({
        noOfFlips: updatedFlipCount,
        firstSelectedCard: cardIndex,
      })
    } else if (flipCardName.includes(cardName)) {
      const updatedScore = score + 1
      flipCardId.push(cardIndex)
      this.setState({
        score: updatedScore,
        noOfFlips: updatedFlipCount,
        firstSelectedCard: '',
      })
    } else {
      flipCardId.push(cardIndex)
      timerIdd = setTimeout(() => {
        onClickingSecondCard()
      }, 2000)
    }
  }

  componentWillUnmount = () => {
    clearTimeout(timerIdd)
  }

  onPlayingViewEnabled = () => {
    const {score, noOfFlips, cardsItems, flipCardId} = this.state

    return (
      <div className="CFPlayingViewBgContainer">
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
              ruleSet1={CFRuleSet1}
              ruleSet2={CFRuleSet2}
              setRulesColor="#ffffff"
            />
          </div>
        </div>
        <div className="CFPlayingViewBottomContainer">
          <h1 className="CFRulesViewHeader">Card-Flip Memory Game</h1>
          <div className="cfScoreMainBgContainer">
            <p className="flipCountText">
              Card flip count - {noOfFlips > 9 ? noOfFlips : `0${noOfFlips}`}
            </p>
            <p className="timerVal">{this.getTimeInFormat()}</p>
            <p className="flipCountText">
              Score - {score >= 10 ? score : `0${score}`}
            </p>
          </div>
          <div className="gameImgsContainer">
            {cardsItems.map(card => (
              <button
                className={`eachCardListItem ${
                  flipCardId.includes(card.id) ? 'flipped' : ''
                }`}
                type="button"
                key={card.id}
                onClick={() => this.onClickFlipCard(card.name, card.id)}
                disabled={flipCardId.includes(card.id)}
              >
                <div className="frontCard" type="button">
                  <img
                    src="https://res.cloudinary.com/dikncs8sp/image/upload/v1742221046/foot-print_1_1_umdcyf.png"
                    alt="foot print"
                    className="eachCard"
                  />
                </div>
                <div data-testid={card.name} type="button" className="cardBtn">
                  <img src={card.image} alt={card.name} className="eachCard" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isPlayingViewDisplayed, score, noOfFlips} = this.state
    return isPlayingViewDisplayed === true ? (
      this.onPlayingViewEnabled()
    ) : (
      <CFResultsView
        onClickPlayAgain={this.onClickPlayAgain}
        count={score}
        flips={noOfFlips}
      />
    )
  }
}

export default CardFlipPlayingView
