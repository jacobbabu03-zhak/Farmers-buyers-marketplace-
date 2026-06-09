# 😂 Random Joke Generator

A fun and interactive random joke generator application that fetches jokes from an external API. Built with HTML, CSS, and vanilla JavaScript.

## 🎯 Features

### Core Features
- **Random Joke Generator**: Fetch random jokes from the JokeAPI
- **Multiple Categories**: Choose from General, Knock-Knock, Programming, or Any
- **Two Joke Formats**: 
  - Single-line jokes
  - Two-part jokes (Setup + Delivery)
- **Copy to Clipboard**: Easy copy functionality with notification
- **Real-time Loading**: Visual spinner while fetching jokes

### Advanced Features
- **Joke History**: Track all jokes you've loaded (last 20)
- **Statistics Tracking**: 
  - Count total jokes loaded
  - Count total laughs generated
- **Local Storage**: Persist history and statistics
- **Dark Theme**: Modern dark blue color scheme
- **Responsive Design**: Works on desktop, tablet, and mobile

## 🚀 Getting Started

### Installation
1. Download or clone the files
2. Open `joke-generator.html` in your web browser
3. Start getting jokes!

### Files Included
```
├── joke-generator.html      # Main HTML structure
├── joke-style.css           # Complete styling
├── joke-script.js           # All functionality
└── README.md               # Documentation
```

## 🎮 How to Use

### Get a Joke
1. Click the **"Get New Joke"** button
2. A random joke will appear on the screen
3. Click again for another joke!

### Select Category
Choose from:
- **Any** - Random joke from any category
- **General** - General jokes
- **Knock-Knock** - Knock-knock jokes
- **Programming** - Developer jokes

### Copy a Joke
1. Click the **"Copy"** button
2. The joke will be copied to your clipboard
3. You'll see a confirmation message

### View History
- All loaded jokes are automatically saved
- View your recent jokes in the "Recent Jokes" section
- Delete individual jokes or clear all history

### Check Statistics
- See how many jokes you've loaded
- Track your total laughs count

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Space` | Get new joke |
| `Ctrl+C` | Copy current joke |

## 🔄 API Information

### JokeAPI
- **Base URL**: `https://v2.jokeapi.dev/joke/`
- **Free to use**: No authentication required
- **Rate Limit**: 120 requests per minute
- **Documentation**: https://sv443.net/jokeapi/v2/

### Supported Categories
- `Any` - Any category
- `General` - General jokes
- `Knock-Knock` - Knock-knock jokes
- `Programming` - Programming jokes

### Response Types
- **Single**: Single-line jokes
- **TwoPart**: Setup + Delivery jokes

## 🎨 Customization

### Change Colors
Edit the CSS variables in `joke-style.css`:
```css
:root {
    --primary-color: #001d3d;      /* Dark Blue */
    --secondary-color: #003d82;    /* Medium Blue */
    --accent-color: #00a8e1;       /* Cyan Blue */
    --success-color: #31a24c;      /* Green */
    /* ... more colors ... */
}
```

### Modify Categories
Edit the category buttons in `joke-generator.html`:
```html
<button class="category-btn" onclick="setCategory('your-category')">
    Your Category
</button>
```

### Change API Endpoint
Update the API URL in `joke-script.js`:
```javascript
const JOKE_API = 'https://v2.jokeapi.dev/joke/';
```

## 💾 Data Storage

The application uses browser's **localStorage** to save:
- **Joke History**: Last 20 jokes (auto-cleared after 20)
- **Statistics**: Joke count and laugh count

Data is automatically synced and persists across browser sessions.

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript ES6+**: Async/await, Fetch API
- **Font Awesome**: Icons
- **JokeAPI**: External API for jokes

### Key Functions
- `getNewJoke()` - Fetch and display a new joke
- `setCategory()` - Change joke category
- `copyToClipboard()` - Copy joke to clipboard
- `addToHistory()` - Add joke to history
- `updateStats()` - Update statistics
- `showToast()` - Display notification

### State Management
- `currentJoke` - Currently displayed joke
- `jokeHistory` - Array of previous jokes
- `jokeCount` - Total jokes loaded
- `laughCount` - Total laughs generated
- `selectedCategory` - Current selected category

## 📱 Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## 🌐 Responsive Breakpoints

- **Desktop**: 900px+ width
- **Tablet**: 768px - 899px
- **Mobile**: Below 768px

## 🐛 Error Handling

- **Network errors**: Shows helpful error message
- **Invalid category**: Falls back to "Any" category
- **No jokes found**: Displays appropriate message
- **Copy failures**: Toast notification on error

## 🔐 Privacy

- All data stored locally in browser
- No data sent to external servers (except jokes API)
- No analytics or tracking
- History can be cleared anytime

## 🚀 Performance

- Lazy loading of jokes
- Efficient DOM manipulation
- Optimized animations
- Local caching of history and stats

## 📈 Future Enhancements

- [ ] Add more categories
- [ ] Favorite jokes feature
- [ ] Share jokes on social media
- [ ] Joke categories with descriptions
- [ ] Dark/Light theme toggle
- [ ] Export jokes to file
- [ ] Joke difficulty levels
- [ ] Custom joke filters

## 🎓 Learning Resources

This project demonstrates:
- Async JavaScript with Fetch API
- DOM manipulation and events
- CSS animations and transitions
- Local Storage usage
- Error handling and validation
- Responsive web design
- API integration

## 📝 License

Open source and free to use for personal and educational purposes.

---

**Built with ❤️ for laughs**

Made by: jacobbabu03-zhak

**Jokes API Credit**: [JokeAPI by sv443](https://sv443.net/jokeapi/v2/)
