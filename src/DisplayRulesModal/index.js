import {useState} from 'react'
import {CgClose} from 'react-icons/cg'
import Modal from 'react-modal'
import RulesContentOfModal from '../RulesContentOfModal'
import './index.css'

// Accessibility: Bind modal to the root app element
Modal.setAppElement('#root')

const DisplayRulesModal = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const {ruleSet1, ruleSet2, setRulesColor} = props

  return (
    <div>
      <button
        type="button"
        className="RulesBtnStyle"
        style={{color: setRulesColor, border: `2px solid ${setRulesColor}`}}
        onClick={() => {
          setModalIsOpen(true)
        }}
      >
        <p className="rulesTextEl">Rules</p>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
          content: {
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            margin: 'auto',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
          },
        }}
      >
        <button
          type="button"
          aria-label="Close Modal"
          className="buttonEl"
          data-testid="close"
          onClick={() => setModalIsOpen(false)}
        >
          <CgClose className="closeIcon" />
        </button>
        <h1 className="rulesTextEll">Rules</h1>
        <RulesContentOfModal ruleSet1={ruleSet1} ruleSet2={ruleSet2} />
      </Modal>
    </div>
  )
}

export default DisplayRulesModal
