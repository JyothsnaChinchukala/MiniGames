# Contributing to MiniGames

First off, thank you for considering contributing to MiniGames! It's people like you that make this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Testing Guidelines](#testing-guidelines)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js (^10.13 || 12 || 14 || 15)
- PNPM (recommended) or NPM
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the Fork button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/MiniGames.git
   cd MiniGames
   ```

2. **Add the original repository as upstream**
   ```bash
   git remote add upstream https://github.com/JyothsnaChinchukala/MiniGames.git
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Start the development server**
   ```bash
   pnpm start
   ```

## 🎯 How Can I Contribute?

### 🐛 Bug Reports

If you find a bug, please create an issue with:

- **Clear title** describing the issue
- **Steps to reproduce** the bug
- **Expected behavior**
- **Actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node version)

### ✨ Feature Requests

We welcome feature suggestions! Please include:

- **Clear description** of the feature
- **Use case** explaining why it would be useful
- **Possible implementation** if you have ideas

### 🔧 Code Contributions

1. **Choose an issue** from the [Issues](https://github.com/JyothsnaChinchukala/MiniGames/issues) page
2. **Comment** on the issue to let others know you're working on it
3. **Follow the development workflow** below

## 🛠️ Development Workflow

### 1. Create a Feature Branch

```bash
# Sync with upstream
git checkout master
git pull upstream master

# Create and switch to feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run tests
pnpm test

# Run linting
pnpm lint

# Fix any linting issues
pnpm lint:fix

# Format code
pnpm format
```

### 4. Commit Changes

Use conventional commit messages:

```bash
git add .
git commit -m "feat: add new game difficulty levels

- Implement easy/medium/hard modes for Memory Matrix
- Add difficulty selector in game rules view
- Update scoring system based on difficulty
- Add tests for difficulty functionality

Closes #123"
```

#### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### 5. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name

# Create PR on GitHub
```

## 📝 Pull Request Process

### Before Submitting

- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation is updated
- [ ] Self-review completed
- [ ] Related issues are linked

### PR Description Template

```markdown
## Description
Brief description of the changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?
Describe the tests you ran and how to reproduce them.

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where necessary
- [ ] I have made corresponding changes to documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective
- [ ] New and existing unit tests pass locally
```

## 🎨 Style Guidelines

### JavaScript/React

```javascript
// Use functional components with hooks
const GameComponent = () => {
  const [score, setScore] = useState(0);
  
  // Use descriptive variable names
  const handlePlayerMove = (move) => {
    // Implementation
  };
  
  return (
    <div className="game-container">
      {/* Component JSX */}
    </div>
  );
};

export default GameComponent;
```

### CSS

```css
/* Use BEM methodology for class names */
.game-container {
  /* Mobile-first approach */
  display: flex;
  flex-direction: column;
}

.game-container__header {
  /* Block element modifier */
}

.game-container__button--active {
  /* Block element modifier with state */
}

/* Use media queries for responsive design */
@media (min-width: 768px) {
  .game-container {
    flex-direction: row;
  }
}
```

### File Organization

```
src/
├── components/
│   ├── GameName/
│   │   ├── index.js          # Main component
│   │   ├── index.css         # Component styles
│   │   ├── GameView/         # Sub-components
│   │   └── __tests__/        # Component tests
```

## 🧪 Testing Guidelines

### Writing Tests

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import EmojiCard from '../EmojiCard';

describe('EmojiCard', () => {
  const mockProps = {
    emoji: '��',
    onClick: jest.fn(),
    isClicked: false
  };

  it('should render emoji correctly', () => {
    render(<EmojiCard {...mockProps} />);
    expect(screen.getByText('😀')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    render(<EmojiCard {...mockProps} />);
    fireEvent.click(screen.getByText('😀'));
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
```

### Test Coverage

- Aim for at least 80% code coverage
- Test critical game logic thoroughly
- Include edge cases and error scenarios
- Test responsive behavior where applicable

## 🏷️ Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `documentation`: Improvements to docs
- `duplicate`: This issue already exists
- `question`: Further information is requested

## 📞 Getting Help

If you need help or have questions:

- 💬 Create a [Discussion](https://github.com/JyothsnaChinchukala/MiniGames/discussions)
- 🐛 Open an [Issue](https://github.com/JyothsnaChinchukala/MiniGames/issues)
- 📧 Contact maintainers directly

## 🙏 Recognition

Contributors will be recognized in:

- Repository contributors list
- Release notes for significant contributions
- README acknowledgments

Thank you for contributing to MiniGames! 🎮✨
