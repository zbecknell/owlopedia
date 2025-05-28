# Owls Website - Build and Deployment Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Local Development Setup](#local-development-setup)
4. [Building the Website](#building-the-website)
5. [Project Structure](#project-structure)
6. [Deployment to GitHub Pages](#deployment-to-github-pages)
7. [CI/CD Pipeline Setup](#cicd-pipeline-setup)
8. [Troubleshooting](#troubleshooting)
9. [Maintenance and Updates](#maintenance-and-updates)

## Project Overview

The Owls Website (Owlopedia) is a comprehensive educational website built with modern web technologies:

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages with CI/CD

### Features Implemented
- ✅ Homepage with hero section and navigation
- ✅ Habitat information page
- ✅ Behavior patterns page
- ✅ Anatomy and biology page
- ✅ Diet information page
- ✅ Responsive design for all devices
- ✅ External resource links
- ✅ Consistent styling and user experience

## Prerequisites

Before building and deploying the website, ensure you have the following installed:

### Required Software
- **Node.js**: Version 16.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For version control and deployment

### Verify Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## Local Development Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd AgileTraining/owls-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The development server will start at `http://localhost:5173` (or another available port).

### 4. Available Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

## Building the Website

### Development Build
For development with hot reloading:
```bash
npm run dev
```

### Production Build
To create an optimized production build:
```bash
npm run build
```

This creates a `dist/` directory with:
- Minified and optimized JavaScript
- Compressed CSS
- Optimized images and assets
- Generated HTML files

### Preview Production Build
To test the production build locally:
```bash
npm run preview
```

### Build Output Structure
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
└── [other-static-files]
```

## Project Structure

```
owls-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Layout.jsx     # Main layout wrapper
│   │   └── Navigation.jsx # Navigation component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── Habitat.jsx    # Habitat information
│   │   ├── Behavior.jsx   # Behavior patterns
│   │   ├── Anatomy.jsx    # Anatomy and biology
│   │   └── Diet.jsx       # Diet information
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Application entry point
│   ├── index.css          # Global styles and Tailwind
│   └── App.css            # Component-specific styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── index.html             # HTML template
```

## Deployment to GitHub Pages

### Step 1: Repository Setup

1. **Create GitHub Repository**
   ```bash
   # If not already done
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/owls-website.git
   git push -u origin main
   ```

2. **Configure Vite for GitHub Pages**
   
   Update `vite.config.js`:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/owls-website/', // Replace with your repository name
     build: {
       outDir: 'dist',
       assetsDir: 'assets'
     }
   })
   ```

3. **Update Package.json**
   
   Add deployment scripts:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

### Step 2: Manual Deployment (Optional)

For one-time manual deployment:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

## CI/CD Pipeline Setup

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: owls-website/package-lock.json
        
    - name: Install dependencies
      run: |
        cd owls-website
        npm ci
        
    - name: Run tests (if any)
      run: |
        cd owls-website
        npm run lint
        
    - name: Build
      run: |
        cd owls-website
        npm run build
        
    - name: Deploy to GitHub Pages
      if: github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: owls-website/dist
        cname: your-custom-domain.com  # Optional: if using custom domain
```

### Alternative: Simpler Workflow

For a more straightforward approach:

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: owls-website/package-lock.json
          
      - name: Install dependencies
        working-directory: owls-website
        run: npm ci
        
      - name: Build
        working-directory: owls-website
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: owls-website/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### Step 3: Enable GitHub Pages

1. **Go to Repository Settings**
   - Navigate to your GitHub repository
   - Click on "Settings" tab

2. **Configure Pages**
   - Scroll down to "Pages" section
   - Source: Select "GitHub Actions"
   - Save the configuration

3. **Verify Deployment**
   - Push changes to trigger the workflow
   - Check the "Actions" tab for build status
   - Visit your site at: `https://username.github.io/repository-name/`

## Environment Configuration

### Environment Variables (if needed)

Create `.env` files for different environments:

```bash
# .env.development
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=Owlopedia (Dev)

# .env.production
VITE_API_URL=https://api.owlopedia.com
VITE_APP_TITLE=Owlopedia
```

### Vite Configuration for Multiple Environments

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [react()],
    base: isProduction ? '/owls-website/' : '/',
    build: {
      outDir: 'dist',
      sourcemap: !isProduction,
      minify: isProduction
    }
  }
})
```

## Troubleshooting

### Common Issues and Solutions

#### 1. Build Failures
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

#### 2. Routing Issues on GitHub Pages
- Ensure `base` is correctly set in `vite.config.js`
- For client-side routing, you may need a `404.html` that redirects to `index.html`

#### 3. Asset Loading Issues
- Check that all asset paths are relative
- Verify the `base` configuration matches your repository name

#### 4. GitHub Actions Failures
- Check Node.js version compatibility
- Verify working directory paths in workflow
- Ensure all dependencies are listed in `package.json`

### Debug Commands
```bash
# Check build output
npm run build && ls -la dist/

# Test production build locally
npm run preview

# Check for linting errors
npm run lint

# Verbose build for debugging
npm run build -- --debug
```

## Maintenance and Updates

### Regular Maintenance Tasks

1. **Update Dependencies**
   ```bash
   # Check for outdated packages
   npm outdated
   
   # Update packages
   npm update
   
   # Update major versions (carefully)
   npm install package@latest
   ```

2. **Security Updates**
   ```bash
   # Check for security vulnerabilities
   npm audit
   
   # Fix automatically fixable issues
   npm audit fix
   ```

3. **Performance Monitoring**
   - Monitor build times
   - Check bundle size with `npm run build`
   - Use browser dev tools for performance analysis

### Content Updates

1. **Adding New Pages**
   - Create new component in `src/pages/`
   - Add route in `App.jsx`
   - Update navigation in `Navigation.jsx`

2. **Updating Existing Content**
   - Edit relevant page components
   - Test locally with `npm run dev`
   - Deploy via git push to main branch

### Deployment Monitoring

- Monitor GitHub Actions for failed deployments
- Check GitHub Pages status in repository settings
- Verify site functionality after each deployment

## Performance Optimization

### Build Optimization
- Vite automatically handles code splitting
- Images are optimized during build
- CSS is minified and purged

### Runtime Optimization
- Lazy loading for images
- Component-level code splitting (if needed)
- Service worker for caching (future enhancement)

---

## Quick Reference

### Essential Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Deploy (manual)
npm run deploy

# Preview build
npm run preview
```

### Important Files
- `vite.config.js` - Build configuration
- `.github/workflows/deploy.yml` - CI/CD pipeline
- `src/App.jsx` - Main routing
- `src/components/Navigation.jsx` - Site navigation

### Useful Links
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

*Last updated: [Current Date]*
*For questions or issues, please create an issue in the GitHub repository.* 