import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import DisplayRulesModal from '../../DisplayRulesModal'
import MMResultsView from '../MMResultsView'
import {MMRuleSet1, MMRuleSet2} from '../../AllGameRules'
import './index.css'

class MMPlayingView extends Component {
  state = {
    isPlayingViewDisplayed: true,
    n: 3,
    level: 1,
    memoryMatrixList: [],
    availableIndex: [],
    randomIndex: [],
    userSelectedBoxes: [],
    noOfCorrectBoxes: 0,
  }

  timeoutRef = null

  onClickingBackBtn = () => {
    const {onClickingBack} = this.props
    onClickingBack()
  }

  onClickPlayAgain = () => {
    this.setState(
      {
        isPlayingViewDisplayed: true,
        n: 3,
        level: 1,
        memoryMatrixList: [],
        availableIndex: [],
        randomIndex: [],
        userSelectedBoxes: [],
        noOfCorrectBoxes: 0,
      },
      () => {
        this.getMaskedBoxes()
        this.getUnMaskedBoxes()
      },
    )
  }

  onClickEachBox = id => {
    const {randomIndex, availableIndex, userSelectedBoxes} = this.state
    console.log(id)
    userSelectedBoxes.push(id)
    const updatedBlueBoxes = randomIndex.map(each => availableIndex[each])
    const result = updatedBlueBoxes.includes(id)
    const finalResult =
      result === true ? this.getOnClickCorrectBox() : this.onClickWrongBox(id)
    console.log(finalResult)
  }

  getOnClickCorrectBox = () => {
    const {userSelectedBoxes, n, level, noOfCorrectBoxes} = this.state
    const listsOfMatrix = []
    const noOfCorrectBox = noOfCorrectBoxes + 1

    if (noOfCorrectBox <= n) {
      for (let i = 0; i < n; i += 1) {
        const eachMatrixRow = []
        for (let j = 0; j < n; j += 1) {
          let backgroundColor = 'normalBox'
          console.log(userSelectedBoxes, `${i}${j}`)
          if (userSelectedBoxes.includes(`${i}${j}`)) {
            backgroundColor = 'selectedBox'
          }
          eachMatrixRow.push({
            id: `${i}${j}`,
            content: (
              <button
                type="button"
                className={`eachBox ${backgroundColor}`}
                aria-label="matrix-box"
                onClick={() => this.onClickEachBox(`${i}${j}`)}
              />
            ),
          })
        }
        listsOfMatrix.push(eachMatrixRow)
      }

      if (noOfCorrectBox === n) {
        this.setState(
          {
            n: n + 1,
            level: level + 1,
            memoryMatrixList: listsOfMatrix,
            availableIndex: [],
            randomIndex: [],
            userSelectedBoxes: [],
            noOfCorrectBoxes: 0,
          },
          () => {
            const maskedTimerIdd = setTimeout(() => {
              this.getMaskedBoxes()
              this.getUnMaskedBoxes()
              clearTimeout(maskedTimerIdd)
            }, 500)
          },
        )
      } else {
        this.setState({
          memoryMatrixList: listsOfMatrix,
          noOfCorrectBoxes: noOfCorrectBox,
        })
      }
    }
  }

  getResultPage = () => {
    this.setState({isPlayingViewDisplayed: false})
  }

  onClickWrongBox = wrongId => {
    const {userSelectedBoxes, n} = this.state
    const listsOfMatrix = []

    for (let i = 0; i < n; i += 1) {
      const eachMatrixRow = []
      for (let j = 0; j < n; j += 1) {
        let backgroundColor = 'normalBox'
        if (userSelectedBoxes.includes(`${i}${j}`) && wrongId !== `${i}${j}`) {
          backgroundColor = 'selectedBox'
        } else if (wrongId === `${i}${j}`) {
          backgroundColor = 'wrongBox'
        }
        eachMatrixRow.push({
          id: `${i}${j}`,
          content: (
            <button
              type="button"
              className={`eachBox ${backgroundColor}`}
              aria-label="matrix-box"
              onClick={() => this.onClickEachBox(`${i}${j}`)}
            />
          ),
        })
      }
      listsOfMatrix.push(eachMatrixRow)
    }

    this.setState(
      {
        memoryMatrixList: listsOfMatrix,
      },
      () => {
        setTimeout(() => {
          this.getResultPage()
        }, 500)
      },
    )
  }

  getMaskedBoxes = () => {
    const {n, availableIndex, randomIndex} = this.state
    const listsOfMatrix = []

    for (let i = 0; i < n; i += 1) {
      let selectedRandomId = Math.floor(Math.random() * (n * n - 1))
      if (randomIndex.length === 0) {
        randomIndex.push(selectedRandomId)
      } else if (randomIndex.includes(selectedRandomId)) {
        selectedRandomId = Math.floor(Math.random() * (n * n - 1))
        randomIndex.push(selectedRandomId)
      } else {
        randomIndex.push(selectedRandomId)
      }
      for (let j = 0; j < n; j += 1) {
        availableIndex.push(`${i}${j}`)
      }
    }

    for (let i = 0; i < n; i += 1) {
      const eachMatrixRow = []
      for (let j = 0; j < n; j += 1) {
        let backgroundColor = 'normalBox'
        const updatedBlueBoxes = randomIndex.map(each => availableIndex[each])
        if (updatedBlueBoxes.includes(`${i}${j}`)) {
          backgroundColor = 'selectedBox'
        }
        eachMatrixRow.push({
          id: `${i}${j}`,
          content: (
            <button
              type="button"
              className={`eachBox ${backgroundColor}`}
              aria-label="matrix-box"
            />
          ),
        })
      }
      listsOfMatrix.push(eachMatrixRow)
    }

    this.setState({
      memoryMatrixList: listsOfMatrix,
    })
  }

  getUnMaskedBoxes = () => {
    const {n, userSelectedBoxes} = this.state

    const checkForCorrectClickedBox = () => {
      if (userSelectedBoxes.length === 0 || userSelectedBoxes.length < n) {
        this.getResultPage()
      }
    }

    const setUnselectedBoxes = () => {
      const listsOfUnMaskedMatrix = []
      for (let i = 0; i < n; i += 1) {
        const eachMatrixRow = []
        for (let j = 0; j < n; j += 1) {
          const backgroundColor = 'normalBox'
          eachMatrixRow.push({
            id: `${i}${j}`,
            content: (
              <button
                type="button"
                className={`eachBox ${backgroundColor}`}
                aria-label="matrix-box"
                onClick={() => this.onClickEachBox(`${i}${j}`)}
              />
            ),
          })
        }
        listsOfUnMaskedMatrix.push(eachMatrixRow)
      }
      this.setState({memoryMatrixList: listsOfUnMaskedMatrix})
      if (this.timeoutRef) clearTimeout(this.timeoutRef)
      this.timeoutRef = setTimeout(() => {
        checkForCorrectClickedBox()
      }, n * 1000)
    }
    if (this.timeoutRef) clearTimeout(this.timeoutRef)
    this.timeoutRef = setTimeout(() => {
      setUnselectedBoxes()
    }, n * 1000)
  }

  componentDidMount = () => {
    this.getMaskedBoxes()
    this.getUnMaskedBoxes()
  }

  getMatrix = () => {
    const {memoryMatrixList} = this.state

    return memoryMatrixList.map(eachRow => (
      <ul className="eachRow">
        {eachRow.map(box => (
          <li className="eachBoxContainer" key={box.id}>
            {box.content}
          </li>
        ))}
      </ul>
    ))
  }

  onPlayingViewEnabled = () => {
    const {level} = this.state

    return (
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
              ruleSet1={MMRuleSet1}
              ruleSet2={MMRuleSet2}
              setRulesColor="#ffffff"
            />
          </div>
        </div>
        <div className="rpsPlayingViewBottomContainer">
          <h1 className="rpsRulesViewHeader">Memory Matrix</h1>
          <p className="levelTxt">Level {level}</p>
          <div className="matrixContainer">{this.getMatrix()}</div>
        </div>
      </div>
    )
  }

  render() {
    const {isPlayingViewDisplayed, level} = this.state
    return isPlayingViewDisplayed === true ? (
      this.onPlayingViewEnabled()
    ) : (
      <MMResultsView onClickPlayAgain={this.onClickPlayAgain} level={level} />
    )
  }
}

export default MMPlayingView
