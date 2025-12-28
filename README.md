# 🎮 Rock Paper Scissors Game

A modern, visually stunning Rock Paper Scissors game built with vanilla JavaScript and styled with Tailwind CSS. Features smooth animations, responsive design, and an engaging user experience.

![Rock Paper Scissors](https://img.shields.io/badge/Game-Rock%20Paper%20Scissors-purple?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

##  Features

-  **Modern UI Design** - Beautiful gradient backgrounds with glassmorphism effects
-  **Smooth Animations** - Hover effects, transitions, and bounce animations
-  **Live Score Tracking** - Real-time scoreboard for player vs computer
-  **Interactive Gameplay** - Large, clickable buttons with visual feedback
-  **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
-  **Dramatic Effects** - Computer "thinking" animation before revealing choice
-  **Visual Results** - Animated modal showing both choices side-by-side
-  **Easy Restart** - Quick reset button to start a new game

##  Demo

Simply open `index.html` in your web browser to start playing!

##  How to Play

1. **Choose Your Weapon** - Click on Rock, Paper, or Scissors
2. **Wait for Computer** - The computer makes its choice
3. **See the Result** - A modal appears showing who won
4. **Play Again** - Click "Play Again" or choose another weapon
5. **Reset Score** - Use the "New Game" button to reset scores

### Game Rules

- 🪨 Rock beats Scissors
-  Paper beats Rock
-  Scissors beats Paper

##  Technologies Used

- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first CSS framework via CDN
- **JavaScript (ES6+)** - Game logic and DOM manipulation
- **Font Awesome 6** - Icon library for hand gestures
- **Google Fonts** - Poppins font family

##  Project Structure

```
rock-paper-game/
│
├── index.html          # Main HTML file with Tailwind CSS
├── eraa.js            # Game logic and functionality
├── era.js             # (Empty) Reserved for future features
├── style.css          # Legacy CSS (not used in current version)
├── model.css          # Legacy CSS (not used in current version)
└── README.md          # Project documentation
```

##  Design Highlights

### Color Scheme

- **Primary Gradient**: Purple to violet (`#667eea` → `#764ba2`)
- **Win State**: Green gradient with celebration emoji 
- **Lose State**: Red gradient with sad emoji 
- **Draw State**: Blue gradient with handshake emoji 

### Visual Effects

- Glassmorphism with backdrop blur
- Scale transforms on hover and click
- Pulse animations for status messages
- Smooth color transitions
- Shadow and glow effects

##  Installation & Setup

1. **Clone or Download** the repository

   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate** to the project folder

   ```bash
   cd rock-paper-game
   ```

3. **Open** `index.html` in your browser

   - Double-click the file, or
   - Right-click → Open with → Your Browser, or
   - Use a local server:

     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js (http-server)
     npx http-server
     ```

4. **Start Playing!** 

##  Browser Compatibility

Works on all modern browsers:

-  Chrome (recommended)
-  Firefox
-  Safari
-  Edge
-  Opera

##  Responsive Design

The game adapts beautifully to different screen sizes:

-  **Mobile**: Single column layout, optimized touch targets
-  **Tablet**: Responsive grid, comfortable spacing
-  **Desktop**: Full three-column layout with hover effects

##  Future Enhancements

Potential features for future versions:

- [ ] Best of 3/5/7 game modes
- [ ] Difficulty levels (easy, medium, hard)
- [ ] Sound effects and background music
- [ ] Player name customization
- [ ] Game statistics and history
- [ ] Multiplayer mode (local or online)
- [ ] Different themes and color schemes
- [ ] Lizard and Spock mode (Big Bang Theory variant)

##  Contributing

Feel free to fork this project and submit pull requests with improvements!

##  License

This project is open source and available for personal and educational use.

##  Author
Mohammed belmekki 

**Enjoy the game! May the best hand win!** 🏆✨
