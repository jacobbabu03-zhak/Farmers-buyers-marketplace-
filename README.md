# 🌾 FarmBuy - Farmers & Buyers Marketplace

A modern, Instagram-style e-commerce platform connecting farmers directly with buyers for fresh, organic produce.

## 🎨 Design Features

### Color Scheme
- **Primary Color**: Dark Blue (#001d3d)
- **Secondary Color**: Lighter Blue (#003d82)
- **Accent Color**: Cyan Blue (#00a8e1)
- **Success Color**: Green (#31a24c)

### Key Design Elements
- **Centered Layout**: All content is perfectly centered and responsive
- **Instagram-Style**: Clean, modern UI with smooth animations
- **Product Cards**: Beautiful hover effects with overlay buttons
- **Farmer Profiles**: Featured farmer cards with stats and ratings
- **Gradient Backgrounds**: Professional gradients using dark blue palette

## 📱 Features

### Navigation
- Sticky header with logo and menu
- Quick action icons (Search, Favorites, Cart, Profile)
- Smooth scroll navigation

### Product Showcase
- **6 Featured Products** with:
  - High-quality images
  - Farmer attribution
  - Star ratings and reviews count
  - Price per unit
  - Like/favorite button
  - Add to cart functionality

### Farmer Profiles
- **Top Farmers Section** featuring:
  - Farmer profile images
  - Location information
  - Product specialization
  - Follower count and ratings
  - Follow button with interaction

### Interactive Elements
- 💚 Heart/Like buttons with animations
- 🛒 Add to cart notifications
- 👥 Follow/Unfollow farmers
- 🔍 Search functionality
- 📧 Social media links

## 🚀 Getting Started

### Installation
1. Clone the repository
```bash
git clone https://github.com/jacobbabu03-zhak/Farmers-buyers-marketplace-.git
cd Farmers-buyers-marketplace-
```

2. Open in your browser
```bash
# Simply open index.html in your default browser
open index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 File Structure
```
├── index.html          # Main HTML structure
├── style.css           # All styling (dark blue theme)
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## 🎯 Responsive Design

The marketplace is fully responsive:
- **Desktop**: Full grid layout with 3 columns for products, 3 for farmers
- **Tablet**: 2 columns for products, optimized spacing
- **Mobile**: Single column layout with touch-friendly buttons

### Breakpoints
- Large screens: 1200px+
- Tablets: 768px - 1199px
- Mobile: Below 768px
- Small mobile: Below 480px

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #001d3d;      /* Dark Blue */
    --secondary-color: #003d82;    /* Medium Blue */
    --accent-color: #00a8e1;       /* Cyan Blue */
    --success-color: #31a24c;      /* Green */
}
```

### Products
Edit the product cards in `index.html`:
- Change product names, prices, images
- Update farmer names
- Modify ratings and review counts

### Farmers
Update farmer profiles in the farmers section:
- Change names, locations, descriptions
- Update follower counts and ratings
- Modify profile images

## 🎬 Animations

- **Smooth Scrolling**: All navigation links have smooth scroll behavior
- **Hover Effects**: Cards lift up on hover with shadow enhancement
- **Image Zoom**: Product and farmer images scale on hover
- **Like Animation**: Hearts float up when you like a product
- **Notifications**: Toast notifications for actions (add to cart, follow)
- **Fade In**: Cards fade in and slide up on page load

## 📊 Sections

### 1. Hero Section
- Eye-catching headline
- Subheading about the marketplace
- Call-to-action button

### 2. Featured Products
- 6 product cards in responsive grid
- Product details (name, farmer, rating, price)
- Interactive buttons for liking and adding to cart

### 3. Top Farmers
- 3 featured farmer profiles
- Farmer stats (followers, rating)
- Follow button

### 4. Footer
- Company information
- Quick links
- Social media links
- Copyright information

## ✨ Interactive Features

### Product Cards
- **Hover**: Shows overlay with "Add to Cart" button
- **Like Button**: Toggle favorite status with animation
- **Image**: Zooms smoothly on hover

### Farmer Cards
- **Hover**: Lifts up with enhanced shadow
- **Follow Button**: Changes state and shows notification
- **Stats**: Displays followers and rating

### Navigation
- **Active Link**: Highlights current section
- **Smooth Scroll**: Animated scroll to sections
- **Search**: Opens modal search dialog

## 🔧 JavaScript Functions

- `showNotification()`: Displays toast notifications
- `openSearchModal()`: Opens search dialog
- Event listeners for interactive buttons
- Intersection Observer for scroll animations
- Animation styles and effects

## 📝 Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

This project demonstrates:
- HTML5 semantic markup
- CSS3 Grid and Flexbox
- CSS animations and transitions
- Vanilla JavaScript DOM manipulation
- Responsive design principles
- UX/UI best practices

## 🐛 Known Issues

None currently reported. Please create an issue if you find any!

## 📈 Future Enhancements

- [ ] Product filtering and search
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment integration
- [ ] Order tracking
- [ ] Farmer dashboard
- [ ] Reviews and ratings system
- [ ] Product categories

## 💬 Support

For support, questions, or suggestions:
- Create an issue in the GitHub repository
- Check existing issues for solutions
- Review the code comments for implementation details

## 📄 License

This project is open source and available for educational and commercial use.

---

**Created with ❤️ for connecting farmers and buyers directly**

Made by: jacobbabu03-zhak
