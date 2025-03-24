import {Link} from 'react-router-dom'
import './index.css'

const HomeRoute = () => (
  <div className="homeBgContainer">
    <h1 className="HomeHeading">Games</h1>
    <ul className="gameCardsContainer">
      <Link to="/emoji-game" className="linkEl gameCard">
        <li className="listItem">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740473984/Asset_1_4x_1_x5epar.jpg"
            alt="emoji game"
            className="eachEmoji"
          />
          <p className="gameCardContent">Emoji Game</p>
        </li>
      </Link>
      <Link to="/memory-matrix" className="linkEl gameCard">
        <li className="listItem">
          <p className="gameCardContent2">Memory Matrix</p>
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740475660/memory_gidu5i.jpg"
            alt="memory matrix"
            className="eachEmoji2"
          />
        </li>
      </Link>
      <Link to="/rock-paper-scissor" className="linkEl gameCard">
        <li className="listItem">
          <p className="gameCardContent3">ROCK PAPER SCISSOR</p>
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740478272/Group_7469_2_iieu1u.jpg"
            alt="rock paper scissor"
            className="eachEmoji3"
          />
        </li>
      </Link>
      <Link to="/card-flip-memory-game" className="linkEl gameCard">
        <li className="listItem">
          <img
            src="https://res.cloudinary.com/dikncs8sp/image/upload/v1740478142/animals_ycbbxp.jpg"
            alt="card flip memory game"
            className="eachEmoji4"
          />
        </li>
      </Link>
    </ul>
  </div>
)

export default HomeRoute
