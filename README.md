# 🎮 MiniGames Collection

A comprehensive React-based gaming platform featuring four interactive mini-games: Emoji Game, Rock Paper Scissors, Memory Matrix, and Card-Flip Memory Game. Built with modern React patterns, responsive design, and engaging gameplay mechanics.

![React](https://img.shields.io/badge/React-17.0.1-blue.svg)
![React Router](https://img.shields.io/badge/React_Router-5.3.0-red.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)

## 🎯 Live Demo

[View Live Demo](https://jyothsnachinchukala.github.io/MiniGames) <!-- Update with actual deployment URL -->

## ✨ Features

### 🎪 Game Collection

#### 🎭 Emoji Game
- **Objective**: Click on unique emojis without repeating any selection
- **Scoring**: Score increases with each unique emoji clicked (max 12 points)
- **Game Over**: Clicking the same emoji twice ends the game
- **Features**: Dynamic emoji shuffling, score tracking, win/loss feedback

#### ✂️ Rock Paper Scissors  
- **Objective**: Beat the computer in the classic hand game
- **Mechanics**: Rock beats Scissors, Scissors beats Paper, Paper beats Rock
- **Scoring**: Win (+1), Lose (-1), Draw (0 change)
- **Features**: Random computer choices, visual result feedback, score persistence

#### 🧠 Memory Matrix
- **Objective**: Memorize and recreate highlighted patterns in increasing grid sizes
- **Progression**: Starts with 3x3 grid (3 highlighted cells), increases with each level
- **Timing**: N seconds to memorize, N seconds to recreate (where N = grid size)
- **Features**: Progressive difficulty (up to 15 levels), visual feedback, progress tracking

#### 🃏 Card-Flip Memory Game
- **Objective**: Match all animal/bird pairs before the 2-minute timer expires
- **Mechanics**: Flip two cards at a time, matches stay revealed, mismatches flip back
- **Scoring**: Successful matches increase score, flip count tracking
- **Features**: 120-second countdown, card shuffling, visual flip animations

### 🚀 Technical Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **React Router**: Seamless navigation between games and game states
- **Component Architecture**: Modular structure with Rules, Playing, and Results views
- **State Management**: Efficient React hooks and class component state handling
- **Performance Optimized**: Proper cleanup of timers and event listeners
- **Accessibility**: ARIA labels and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 17.0.1, JavaScript ES6+
- **Routing**: React Router DOM 5.3.0
- **Styling**: CSS3 with responsive media queries, BEM methodology
- **Icons**: React Icons (BiArrowBack, CgClose, BsDot)
- **Progress**: RC Progress library for Memory Matrix results
- **Utilities**: UUID for unique identifiers, Modal for rule displays
- **Development**: ESLint, Prettier, Husky for code quality

## 🚀 Quick Start

### Prerequisites
- Node.js (^10.13 || 12 || 14 || 15)
- PNPM (recommended) or NPM (>=6)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JyothsnaChinchukala/MiniGames.git
   cd MiniGames
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm start
   # or
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Architecture

```
MiniGames/
├── src/
│   ├── App.js                     # Main routing configuration
│   ├── App.css                    # Global styles
│   ├── AllGamesImages.js          # Centralized image data (emojis, choices, cards)
│   ├── AllGameRules.js            # Game rules configuration
│   ├── HomeRoute/                 # Landing page with game selection
│   ├── EmojiGame/
│   │   └── EmojiGameRoute/
│   │       ├── EmojiCard/         # Individual emoji component
│   │       ├── EmojiGameRulesView/
│   │       ├── EmojiGamePlayingView/
│   │       ├── EmojiGameWonView/
│   │       └── EmojiGameLossView/
│   ├── RockPaperScissors/
│   │   ├── RPSRulesView/
│   │   ├── RPSPlayingView/
│   │   └── RPSResultsView/
│   ├── MemoryMatrixGame/
│   │   ├── MMRulesView/
│   │   ├── MMPlayingView/
│   │   └── MMResultsView/
│   ├── CardFlipGame/
│   │   ├── CardFlipRulesView/
│   │   ├── CardFlipPlayingView/
│   │   └── CFResultsView/
│   ├── DisplayRulesModal/         # Reusable modal component
│   └── RulesContentOfModal/       # Modal content wrapper
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── img/                       # Favicon and logos
├── package.json
└── README.md
```

## �� Game Mechanics Deep Dive

### Emoji Game Implementation
- **State Management**: Tracks score, selected emojis, game status
- **Shuffling Algorithm**: Fisher-Yates shuffle for random emoji order
- **Win Condition**: Score reaches 12 (all unique emojis clicked)
- **Loss Condition**: Same emoji clicked twice

### Rock Paper Scissors Logic
```javascript
// Game logic implementation
const rpsRules = [
  { id: 'rock', beats: 'scissor' },
  { id: 'paper', beats: 'rock' },
  { id: 'scissor', beats: 'paper' }
];
```

### Memory Matrix Algorithm
- **Grid Generation**: Dynamic NxN matrix based on current level
- **Random Selection**: N cells randomly highlighted per level
- **Timer Management**: Precise timing for memorization and input phases
- **Progress Tracking**: Visual progress bar using RC Progress library

### Card-Flip Memory System
- **Card Duplication**: Creates pairs from 10 unique animal cards
- **Shuffle Implementation**: Ensures random card placement each game
- **Match Detection**: Compares card names for successful pairs
- **Timer Integration**: 120-second countdown with game state management

## 🔧 Available Scripts

```bash
# Development
pnpm start          # Start development server
pnpm build          # Build for production
pnpm test           # Run test suite

# Code Quality
pnpm lint           # Run ESLint
pnpm lint:fix       # Fix ESLint issues automatically
pnpm format         # Format code with Prettier
pnpm run-all        # Run tests and linting in parallel
```

## 🎨 Design & Styling

### Color Scheme
- **Primary**: #467AFF (Blue) - Used for buttons and highlights
- **Backgrounds**: Game-specific gradients (#223A5F, #14332E, etc.)
- **Text**: #FFFFFF (White) for contrast
- **Success**: #00C851 (Green) for wins
- **Error**: #FF4444 (Red) for losses

### Responsive Breakpoints
```css
@media screen and (max-width: 678px) {
  /* Mobile-specific styles */
}
```

### Component Styling
- **BEM Methodology**: Block__Element--Modifier naming convention
- **CSS Custom Properties**: Consistent spacing and typography
- **Flexbox Layout**: Responsive grid systems for game boards

## 🧪 Testing Strategy

The project includes comprehensive test coverage for:
- **Component Rendering**: Ensuring UI elements display correctly
- **Game Logic**: Validating scoring, win/loss conditions
- **User Interactions**: Testing click handlers and state changes
- **Timer Functions**: Verifying countdown and timeout behaviors

## 🚀 Deployment

### GitHub Pages (Automated)
```bash
# Build and deploy
pnpm build
pnpm deploy  # Uses gh-pages package
```

### Manual Deployment
1. Run `pnpm build` to create production build
2. Deploy `build/` folder to your hosting service
3. Ensure proper routing configuration for SPA

## 📊 Performance Optimizations

- **Code Splitting**: Route-based splitting for faster initial load
- **Image Optimization**: Cloudinary CDN for all game assets  
- **Memory Management**: Proper cleanup of timers and event listeners
- **Bundle Size**: Optimized dependencies and tree shaking

## 🔮 Future Enhancements

- [ ] **Local Storage**: Save high scores and game progress
- [ ] **Sound Effects**: Audio feedback for game actions
- [ ] **Difficulty Levels**: Customizable game difficulty settings
- [ ] **Multiplayer Mode**: Real-time multiplayer capabilities
- [ ] **Statistics Dashboard**: Detailed performance analytics
- [ ] **Theme Customization**: Dark/Light mode toggle
- [ ] **Achievement System**: Unlock badges and rewards

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit using conventional commits: `git commit -m 'feat: add amazing feature'`
5. Push to your fork: `git push origin feature/amazing-feature`
6. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Jyothsna Chinchukala** - *Initial work* - [@JyothsnaChinchukala](https://github.com/JyothsnaChinchukala)

## 🙏 Acknowledgments

- React team for the robust framework
- React Icons for the comprehensive icon library
- RC Progress for the progress bar component
- Cloudinary for reliable image hosting
- React Testing Library for testing utilities

## 📞 Support

For questions, bug reports, or feature requests:

- 🐛 **Issues**: [GitHub Issues](https://github.com/JyothsnaChinchukala/MiniGames/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/JyothsnaChinchukala/MiniGames/discussions)
- 📧 **Contact**: Create an issue for direct communication

---

<div align="center">
  <strong>Built with ❤️ using React</strong>
  <br>
  <sub>A modern gaming experience in your browser</sub>
</div>
