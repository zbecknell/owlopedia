# Owlopedia - Quick Setup Guide

## Repository Information
- **Repository**: https://github.com/zbecknell/owlopedia
- **Live Site**: https://zbecknell.github.io/owlopedia/ (after deployment)

## Next Steps to Enable Deployment

### 1. Enable GitHub Pages
1. Go to your repository: https://github.com/zbecknell/owlopedia
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the configuration

### 2. Push Your Changes
```bash
# Make sure you're in the repository root
cd owlopedia

# Add all the new files
git add .

# Commit the changes
git commit -m "Add build documentation and CI/CD pipeline"

# Push to trigger the first deployment
git push origin main
```

### 3. Monitor Deployment
1. Go to the **Actions** tab in your repository
2. Watch the "Build and Deploy to GitHub Pages" workflow
3. Once it completes successfully, your site will be live at: https://zbecknell.github.io/owlopedia/

## Local Development

### First Time Setup
```bash
# Clone your repository
git clone https://github.com/zbecknell/owlopedia.git
cd owlopedia/owls-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Daily Development
```bash
# Start development server
npm run dev

# Build for production (test locally)
npm run build
npm run preview
```

## Configuration Summary

The following files have been configured for your repository:

### ✅ Vite Configuration (`owls-website/vite.config.js`)
- Base path set to `/owlopedia/` for GitHub Pages
- Environment-aware configuration
- Production optimizations enabled

### ✅ GitHub Actions (`.github/workflows/deploy.yml`)
- Automatic deployment on push to main branch
- Build verification with linting
- Artifact upload and deployment to GitHub Pages

### ✅ Documentation
- `BUILD_AND_DEPLOYMENT.md` - Complete deployment guide
- `owls-website/README.md` - Project overview and quick start
- Repository URLs updated throughout

## Troubleshooting

### If the deployment fails:
1. Check the **Actions** tab for error messages
2. Ensure GitHub Pages is enabled in repository settings
3. Verify all files were committed and pushed

### If the site doesn't load correctly:
1. Check that the base path in `vite.config.js` matches your repository name
2. Ensure all asset paths are relative
3. Check browser console for any errors

### Common Commands
```bash
# Check if everything builds correctly
cd owls-website
npm run build

# Test the production build locally
npm run preview

# Check for linting errors
npm run lint
```

## What Happens Next

1. **First Push**: Triggers the GitHub Actions workflow
2. **Build Process**: Installs dependencies, runs linting, builds the project
3. **Deployment**: Automatically deploys to GitHub Pages
4. **Live Site**: Available at https://zbecknell.github.io/owlopedia/

## Future Updates

To update the website:
1. Make changes to files in `owls-website/src/`
2. Test locally with `npm run dev`
3. Commit and push to main branch
4. GitHub Actions will automatically deploy the updates

---

**Ready to deploy!** 🚀

Push your changes and watch your Owlopedia website come to life! 