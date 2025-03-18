import './index.css'

const EmojiCard = props => {
  const {emojiValue, onClickEmojiCard} = props
  const {id, emojiName, emojiUrl} = emojiValue

  const onClickEmojiImg = () => {
    onClickEmojiCard(id)
  }

  return (
    <li className="eachEmojiContainer">
      <button type="button" className="emojiImgBtn" onClick={onClickEmojiImg}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}

export default EmojiCard
