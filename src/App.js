import {Switch, Route} from 'react-router-dom'
import HomeRoute from './HomeRoute/index'
import EmojiGameRoute from './EmojiGame/EmojiGameRoute/index'
import RockPaperScissors from './RockPaperScissors'
import MemoryMatrixGame from './MemoryMatrixGame'
import CardFlipGame from './CardFlipGame'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/emoji-game" component={EmojiGameRoute} />
    <Route exact path="/rock-paper-scissor" component={RockPaperScissors} />
    <Route exact path="/memory-matrix" component={MemoryMatrixGame} />
    <Route exact path="/card-flip-memory-game" component={CardFlipGame} />
  </Switch>
)

export default App
