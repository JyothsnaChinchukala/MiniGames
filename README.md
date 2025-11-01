# 🎮 MiniGames Collection

A React-based interactive gaming platform featuring four engaging mini-games with responsive design and modern gameplay mechanics.

[![React](https://img.shields.io/badge/React-17.0.1-blue.svg)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-5.3.0-red.svg)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🚀 Live Demo

[🎮 Play Games Online](https://jyothsnachinchukala.github.io/MiniGames)

## 🎯 Featured Games

### 🎭 Emoji Game
**Objective:** Click on unique emojis without repeating any selection
- 📊 **Scoring:** +1 for each unique emoji (maximum 12 points)
- 🎮 **Gameplay:** Dynamic emoji shuffling after each click
- 🏆 **Win Condition:** Click all 12 unique emojis
- ❌ **Game Over:** Clicking the same emoji twice

### ✂️ Rock Paper Scissors
**Objective:** Beat the computer in the classic hand game
- 🤖 **AI Opponent:** Randomized computer choices
- 📊 **Scoring:** Win (+1), Lose (-1), Draw (0 change)
- 🎯 **Rules:** Rock beats Scissors, Scissors beats Paper, Paper beats Rock
- 🔄 **Gameplay:** Unlimited rounds with persistent scoring

### 🧠 Memory Matrix
**Objective:** Memorize and recreate highlighted cell patterns
- 📈 **Progressive Difficulty:** Starts at 3x3 grid, expands to 17x17
- ⏱️ **Timing Mechanics:** N seconds to memorize, N seconds to input
- 🎯 **Pattern Memory:** N highlighted cells per level (where N = grid size)
- 📊 **Progress Tracking:** Visual progress bar through 15 levels

### 🃏 Card-Flip Memory Game
**Objective:** Match all animal pairs within the time limit
- 🐾 **Cards:** 10 unique animals (20 cards total as pairs)
- ⏰ **Time Limit:** 120-second countdown timer
- 🔄 **Mechanics:** Flip 2 cards at a time, auto-flip mismatches after 2 seconds
- 🏆 **Victory:** Match all pairs before time expires

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/JyothsnaChinchukala/MiniGames.git
cd MiniGames

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 17.0.1 | UI Framework |
| **React Router** | 5.3.0 | Navigation & Routing |
| **React Icons** | 4.3.1 | UI Icons |
| **RC Progress** | 3.1.4 | Progress Bars |
| **UUID** | 9.0.0 | Unique Identifiers |
| **React Modal** | 3.14.3 | Modal Components |

## 📁 Project Structure

```
src/
├── App.js                      # Main routing configuration
├── HomeRoute/                  # Game selection landing page
├── EmojiGame/
│   └── EmojiGameRoute/
│       ├── EmojiCard/          # Individual emoji component
│       ├── EmojiGameRulesView/ # Game rules display
│       ├── EmojiGamePlayingView/ # Main game interface
│       ├── EmojiGameWonView/   # Victory screen
│       └── EmojiGameLossView/  # Game over screen
├── RockPaperScissors/
│   ├── RPSRulesView/           # Game rules
│   ├── RPSPlayingView/         # Game interface
│   └── RPSResultsView/         # Results display
├── MemoryMatrixGame/
│   ├── MMRulesView/            # Game rules
│   ├── MMPlayingView/          # Grid gameplay
│   └── MMResultsView/          # Level completion
├── CardFlipGame/
│   ├── CardFlipRulesView/      # Game rules
│   ├── CardFlipPlayingView/    # Card flipping interface
│   └── CFResultsView/          # Game completion
├── DisplayRulesModal/          # Shared modal component
├── AllGamesImages.js           # Game asset data
└── AllGameRules.js             # Game rules configuration
```

## 🎮 Game Implementation Details

### Emoji Game Architecture
```javascript
// Core game logic
const onClickEmojiCard = (clickedId) => {
  // Fisher-Yates shuffle implementation
  const shuffledArray = emojisList.sort(() => Math.random() - 0.5);
  
  // Duplicate detection and scoring
  if (currentSelectedId !== clickedId) {
    // Valid move: increment score
  } else {
    // Game over: duplicate selection
  }
};
```

### Memory Matrix Algorithm
- **Grid Generation:** Dynamic NxN matrix based on current level
- **Random Highlighting:** Uses Set() for unique random cell selection
- **Timer Management:** Precise timing with setTimeout and clearTimeout
- **State Transitions:** Memorization → Input → Results phases

### Card-Flip Memory System
- **Card Shuffling:** Fisher-Yates algorithm for random placement
- **Pair Matching:** Name-based comparison for successful matches
- **Flip Animation:** CSS transforms with 180deg rotation
- **Timer Integration:** Real-time countdown with auto-game-over

### Rock Paper Scissors Logic
```javascript
const gameRules = {
  rock: { beats: 'scissor' },
  paper: { beats: 'rock' },
  scissor: { beats: 'paper' }
};
```

## 🔧 Available Scripts

```bash
npm start       # Start development server (localhost:3000)
npm build       # Create production build
npm test        # Run test suite
npm lint        # Run ESLint checker
npm lint:fix    # Auto-fix linting issues
npm format      # Format code with Prettier
npm run-all     # Run tests and linting in parallel
```

## 🎨 Design Features

### Visual Design
- **Color Palette:** Primary blue (#467AFF) with game-specific gradients
- **Typography:** Bree Serif font family for headings
- **Icons:** React Icons (BiArrowBack, CgClose, BsDot)
- **Animations:** Smooth card flips, hover effects, transitions

### Responsive Design
```css
/* Mobile-first approach */
@media screen and (max-width: 678px) {
  /* Optimized layouts for mobile devices */
}
```

### Accessibility Features
- ARIA labels on interactive elements
- Semantic HTML structure
- High contrast color schemes
- Touch-optimized interfaces

## 🚀 Deployment

### GitHub Pages
```bash
# Add deployment script to package.json
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `build/` folder to your hosting service
3. Configure routing for Single Page Application

## 🧪 Testing

The project includes comprehensive testing for:
- ✅ Component rendering and UI elements
- ✅ Game logic and scoring systems
- ✅ User interactions and state changes
- ✅ Timer functions and timeout behaviors
- ✅ Responsive design across devices

## 📱 Browser Compatibility

- ✅ Chrome 96+ 
- ✅ Firefox 94+
- ✅ Safari 15+
- ✅ Edge 96+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔮 Future Enhancements

- [ ] **Local Storage:** Save high scores and game progress
- [ ] **Sound Effects:** Audio feedback for game actions
- [ ] **Difficulty Levels:** Customizable game settings
- [ ] **Multiplayer Mode:** Real-time multiplayer capabilities
- [ ] **Achievement System:** Unlock badges and rewards
- [ ] **Dark Mode:** Theme toggle functionality
- [ ] **Statistics Dashboard:** Detailed performance analytics

## �� Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'feat: add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Jyothsna Chinchukala**
- GitHub: [@JyothsnaChinchukala](https://github.com/JyothsnaChinchukala)
- LinkedIn: www.linkedin.com/in/jyothsna29


## 🙏 Acknowledgments

- [React](https://reactjs.org/) team for the amazing framework
- [React Router](https://reactrouter.com/) for seamless navigation
- [React Icons](https://react-icons.github.io/react-icons/) for comprehensive icon library
- [RC Progress](https://github.com/react-component/progress) for progress bar components
- [Cloudinary](https://cloudinary.com/) for reliable image hosting

## 📞 Support

For questions, bug reports, or feature requests:

- 🐛 **Issues:** [GitHub Issues](https://github.com/JyothsnaChinchukala/MiniGames/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/JyothsnaChinchukala/MiniGames/discussions)

---

<div align="center">
  <strong>🎮 Built with ❤️ using React</strong>
  <br>
  <sub>An interactive gaming experience in your browser</sub>
</div>
