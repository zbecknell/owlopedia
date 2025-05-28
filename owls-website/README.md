# Owlopedia - Owls Educational Website

A comprehensive educational website dedicated to owls, featuring information about their habitat, behavior, anatomy, and diet.

## 🦉 Live Demo

Visit the live website: [Owlopedia on GitHub Pages](https://zbecknell.github.io/owlopedia/)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm 8+

### Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the website.

### Build for Production
```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx          # Main layout wrapper
│   ├── Navigation.jsx      # Site navigation
│   └── DarkModeToggle.jsx  # Dark mode toggle component
├── hooks/
│   └── useDarkMode.js      # Dark mode state management
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── Habitat.jsx         # Habitat information
│   ├── Behavior.jsx        # Behavior patterns
│   ├── Anatomy.jsx         # Anatomy & biology
│   └── Diet.jsx            # Diet information
├── App.jsx                 # Main app with routing
└── main.jsx                # Entry point
```

## 🛠️ Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework with dark mode support
- **React Router** - Client-side routing

## 📖 Features

- ✅ Responsive design for all devices
- ✅ Five comprehensive information pages
- ✅ Modern, accessible UI
- ✅ **Dark mode with system preference detection**
- ✅ **Persistent theme selection via localStorage**
- ✅ Fast loading with optimized builds
- ✅ External resource links
- ✅ Consistent design system

## 🌙 Dark Mode

The website features a comprehensive dark mode implementation:

### Features
- **Toggle Button**: Sun/moon icon in the navigation bar
- **System Detection**: Automatically detects user's system preference
- **Persistence**: Remembers your choice using localStorage
- **Smooth Transitions**: Animated transitions between light and dark themes

### Theme Colors
- **Light Mode**: Warm amber and orange gradients
- **Dark Mode**: Cool midnight blue and indigo gradients

### Implementation
The dark mode uses Tailwind CSS's built-in dark mode support with the `class` strategy. The theme state is managed by a custom React hook (`useDarkMode`) that handles:
- Initial theme detection (localStorage → system preference → light)
- Theme toggling and persistence
- DOM class management for Tailwind's dark mode

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📚 Documentation

For detailed build and deployment instructions, see:
- [BUILD_AND_DEPLOYMENT.md](../BUILD_AND_DEPLOYMENT.md) - Complete build and deployment guide
- [owls-website-plan.md](../owls-website-plan.md) - Project planning and requirements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## 📄 License

This project is for educational purposes.

---

**Owlopedia** - Your complete guide to understanding owls and their amazing world 🦉
