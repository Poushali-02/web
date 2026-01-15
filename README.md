# Little Darjeeling Restaurant Website 🍽️

A modern, responsive restaurant website built with React, featuring an elegant UI, interactive components, and comprehensive menu display for Little Darjeeling restaurant.

## 🌟 Key Features

### 🎨 User Interface & Design
- **Responsive Design**: Fully responsive layout optimized for all devices (mobile, tablet, desktop)
- **Modern Styling**: Built with Tailwind CSS v4 for a clean, contemporary aesthetic
- **Custom Accent Colors**: Tailwind accent plugin for consistent brand theming
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Parallax Effects**: Dynamic parallax scrolling on hero section for visual depth

### 🖥️ Core Components

#### Navigation
- **Sticky Navbar**: Always-accessible navigation with smooth scrolling to sections
- **Mobile-Friendly Menu**: Responsive navigation for seamless mobile experience

#### Hero Section
- **Typewriter Effect**: Animated text reveal for brand name
- **Parallax Background**: Dynamic scaling effect on scroll for engaging visuals
- **High-Quality Imagery**: Eye-catching hero images to capture visitor attention

#### About Section
- **Restaurant Story**: Introduction to Little Darjeeling's heritage and values
- **Brand Identity**: Showcase of restaurant's unique selling points

#### Location & Contact
- **Interactive Map**: Integrated map component for easy location finding
- **Address Information**: Complete contact and location details
- **Directions**: Easy-to-find restaurant location

#### Specialties Section
- **Signature Dishes**: Highlight of restaurant's specialty items
- **Visual Presentation**: Attractive display of special offerings

#### Menu System
- **Multi-Category Navigation**: 
  - Specialties
  - Continental
  - Momo
  - Soup
  - Steak
  - Chinese
  - Indian
  - Thai
  - And more...
- **Dynamic Filtering**: Easy category switching with active state indication
- **LocalStorage Integration**: Remembers user's last selected category
- **Structured Display**: Organized menu items with:
  - Item names
  - Descriptions
  - Prices in INR (₹)
  - Subsections (Starters, Main Course, etc.)
- **Reveal Animations**: Smooth fade-in effects for menu items on scroll

#### Reviews Section
- **Customer Testimonials**: Display of customer feedback and ratings
- **Social Proof**: Build trust through authentic reviews

#### Footer
- **Complete Information**: Contact details, hours, social media links
- **Professional Presentation**: Well-organized footer with essential information

#### Order Button
- **Floating CTA**: Easy-access order button for conversions
- **Quick Action**: Streamlined ordering process

### ⚡ Technical Features

#### Performance
- **Vite Build Tool**: Lightning-fast development and optimized production builds
- **React 19**: Latest React features for optimal performance
- **Code Splitting**: Efficient loading with React Router DOM v7
- **PostCSS Processing**: Optimized CSS with Autoprefixer

#### Development
- **ESLint**: Code quality and consistency enforcement
- **React Hooks**: Modern React patterns with hooks
- **Component Architecture**: Modular, reusable components
- **Hot Module Replacement**: Instant feedback during development

#### Routing
- **React Router**: Client-side routing with React Router DOM v7
- **Single Page Application**: Smooth navigation without page reloads
- **Homepage Structure**: Well-organized component composition

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The optimized production files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
web/
├── README.md
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── eslint.config.js
    ├── public/              # Static assets
    └── src/
        ├── App.jsx          # Main app component with routing
        ├── main.jsx         # Application entry point
        ├── App.css          # Global app styles
        ├── index.css        # Base styles and Tailwind directives
        ├── assets/          # Images and media
        │   └── menu/        # Menu-related images
        ├── components/      # Reusable UI components
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── About.jsx
        │   ├── Location.jsx
        │   ├── Map.jsx
        │   ├── Specialties.jsx
        │   ├── Menu.jsx
        │   ├── Reviews.jsx
        │   ├── Order.jsx
        │   └── Footer.jsx
        ├── items/           # Data files
        │   ├── menu.js      # Complete menu data
        │   └── reviews.js   # Customer reviews data
        └── pages/           # Page components
            └── HomePage.jsx # Main landing page
```

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.2.0**: Modern UI library with latest features
- **React DOM 19.2.0**: React renderer for web applications

### Build Tools
- **Vite 7.2.4**: Next-generation frontend tooling
- **@vitejs/plugin-react 5.1.1**: Official React plugin for Vite

### Styling
- **Tailwind CSS 4.1.18**: Utility-first CSS framework
- **Tailwind Accent 2.1.2**: Custom accent color system
- **PostCSS 8.5.6**: CSS transformations
- **Autoprefixer 10.4.23**: Vendor prefix automation

### Routing
- **React Router DOM 7.12.0**: Declarative routing for React

### Code Quality
- **ESLint 9.39.1**: JavaScript linting
- **@eslint/js**: ESLint JavaScript configurations
- **eslint-plugin-react-hooks**: Rules for React Hooks
- **eslint-plugin-react-refresh**: React Fast Refresh support

### Development Tools
- **TypeScript Types**: Type definitions for React and React DOM
- **Globals 16.5.0**: Global environment variables

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎯 Features Highlight

### Menu Management
The menu system is powered by a comprehensive data structure (`menu.js`) that includes:
- Multiple cuisine categories
- Detailed item descriptions
- Pricing information
- Subsection organization
- Easy content updates

### User Experience
- **Smooth Scrolling**: Seamless navigation between sections
- **Visual Feedback**: Interactive elements with hover states
- **Loading States**: Proper handling of asynchronous operations
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and lazy loading

### Design Philosophy
- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Minimalist**: Clean interface focusing on content
- **Brand-Consistent**: Unified color scheme and typography
- **User-Centric**: Intuitive navigation and clear call-to-actions

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **tailwind.config.js**: Tailwind CSS customization
- **postcss.config.js**: PostCSS plugins setup
- **eslint.config.js**: ESLint rules and settings

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 📞 Contact

For more information about Little Darjeeling restaurant, please visit our website or contact us through the information provided in the Location section.

---

Built with ❤️ using React and Vite