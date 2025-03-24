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
    isAllItemsDisables: false,
  }

  /* updateTime = () => {
    const {timer, score, cardsItems} = this.state
    const updatedTimer = timer - 1
    if (updatedTimer === 0 || score * 2 === cardsItems.length) {
      console.log('Stopping Game - Final Score:', score)
      this.setState({
        isPlayingViewDisplayed: false,
        timer: 0,
      })
      clearInterval(timerId)
    } else if (updatedTimer > 0) {
      this.setState({timer: updatedTimer})
    }
  } */
  updateTime = () => {
    const {timer} = this.state
    const updatedTimer = timer - 1

    if (updatedTimer === 0) {
      this.setState({
        isPlayingViewDisplayed: false,
        timer: 0,
      })
      clearInterval(timerId)
    } else {
      this.setState({timer: updatedTimer})
    }
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

  componentWillUnmount = () => {
    clearTimeout(timerIdd)
    clearInterval(timerId) // ✅ Add this to prevent timing issues in tests
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
      id: Math.random().toString(36).substr(2, 9),
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
      cardsItems,
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
        firstSelectedCard: '',
        isAllItemsDisables: false,
      })
    }

    if (firstSelectedCard === '') {
      flipCardId.push(cardIndex)
      flipCardName.push(cardName)
      this.setState({
        firstSelectedCard: cardIndex,
      })
    } else if (flipCardName.includes(cardName)) {
      const updatedScore = score + 1
      flipCardId.push(cardIndex)
      this.setState(
        {
          score: updatedScore,
          firstSelectedCard: '',
          noOfFlips: updatedFlipCount,
        },
        () => {
          console.log('Updated Score:', score)
          if (updatedScore * 2 === cardsItems.length) {
            console.log('🎉 Winning Condition Met - Stopping Immediately')
            clearInterval(timerId) // Stop the timer
            this.setState({isPlayingViewDisplayed: false}) // Render results immediately
          }
        },
      )
    } else {
      flipCardId.push(cardIndex)
      this.setState({noOfFlips: updatedFlipCount, isAllItemsDisables: true})
      timerIdd = setTimeout(() => {
        onClickingSecondCard()
      }, 2000)
    }
  }

  componentWillUnmount = () => {
    clearTimeout(timerIdd)
  }

  onPlayingViewEnabled = () => {
    const {
      score,
      noOfFlips,
      cardsItems,
      flipCardId,
      isAllItemsDisables,
    } = this.state

    return (
      <div className="CFPlayingViewBgContainer">
        <ul className="backRulesContainer">
          <li className="backRulesListItem" key="backContainer">
            <button
              className="rpsBackContainer"
              type="button"
              onClick={this.onClickingBackBtn}
            >
              <BiArrowBack className="rpsArrowIcon" />
              <h1 className="rpsBackContent">Back</h1>
            </button>
          </li>
          <li className="backRulesListItem" key="rulesContainer">
            <DisplayRulesModal
              ruleSet1={CFRuleSet1}
              ruleSet2={CFRuleSet2}
              setRulesColor="#ffffff"
            />
          </li>
        </ul>
        <div className="CFPlayingViewBottomContainer">
          <h1 className="CFRulesViewHeader">Card-Flip Memory Game</h1>
          <div className="cfScoreMainBgContainer">
            <p className="flipCountText">{`Card flip count - ${noOfFlips}`}</p>
            <p className="timerVal">{this.getTimeInFormat()}</p>
            <p className="flipCountText">{`Score - ${score}`}</p>
          </div>
          <div className="gameImgsContainer">
            {cardsItems.map(card => (
              <li className="cardListWithButton" key={card.id}>
                <button
                  className={`eachCardListItem ${
                    flipCardId.includes(card.id) ? 'flipped' : ''
                  }`}
                  type="button"
                  data-testid={card.name}
                  onClick={() => this.onClickFlipCard(card.name, card.id)}
                  disabled={flipCardId.includes(card.id) || isAllItemsDisables}
                >
                  {!flipCardId.includes(card.id) ? (
                    // Show Footprint Image when not flipped
                    <img
                      src="https://res.cloudinary.com/dikncs8sp/image/upload/v1742221046/foot-print_1_1_umdcyf.png"
                      alt="foot print"
                      className="frontCard"
                    />
                  ) : (
                    // Show Card Image when flipped
                    <img src={card.image} alt={card.name} className="cardBtn" />
                  )}
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {
      isPlayingViewDisplayed,
      score,
      noOfFlips,
      cardsItems,
      timer,
    } = this.state
    console.log('Score:', score)
    console.log('Total Cards:', cardsItems.length)
    console.log('Score * 2:', score * 2)
    console.log('Timer:', timer)
    console.log(
      'Winning Condition:',
      score * 2 === cardsItems.length && timer > 0,
    )
    return isPlayingViewDisplayed === true ? (
      this.onPlayingViewEnabled()
    ) : (
      <CFResultsView
        onClickPlayAgain={this.onClickPlayAgain}
        status={score * 2 === cardsItems.length ? 'won' : 'lost'}
        flips={noOfFlips}
      />
    )
  }
}

export default CardFlipPlayingView
