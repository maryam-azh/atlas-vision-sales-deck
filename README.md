# Atlas Vision - Interactive Pitch Deck

An interactive pitch deck website for Atlas Vision's AI-driven automotive inspection platform. Built with React, TypeScript, and modern web animations.

🌐 **Live Demo**: [atlasinsights.ai](https://atlasinsights.ai)

## Features

- **11 Interactive Slides** covering problem, market, solution, product, roadmap, revenue, GTM, team, and investment ask
- **Viral Gradient Transitions** using Framer Motion with morphing radial gradients
- **GSAP User Journey** animation showing inspection workflow
- **D3.js Market Visualization** with animated bar charts
- **Brutalist/Grid Design** aesthetic with bold typography
- **Professional Midjourney-generated visuals** for all slides

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Framer Motion** for page transitions and gradients
- **GSAP** for user journey animations
- **D3.js** for data visualizations
- **Playwright** for E2E testing

## Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/atlas-vision.git
   cd atlas-vision
   ```

2. **Pull Git LFS files** (IMPORTANT - video won't display without this):
   ```bash
   git lfs install
   git lfs pull
   ```
   Verify the demo video is downloaded:
   ```bash
   ls -lh src/assets/demo.mp4
   # Should show ~7.7M, not 132 bytes
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   - The app will be available at `http://localhost:5175`
   - The port may vary if 5175 is already in use - check the terminal output

6. **Navigate the deck**:
   - Use arrow keys (← →) or spacebar to navigate slides
   - Click the on-screen arrows to navigate
   - Press Play on the Product Workflow slide to see the animated journey

### Testing

Run the test suite to ensure everything works:

```bash
# Run all Playwright tests
npm test

# Run quick smoke test
npm run test:quick

# Run specific test file
npx playwright test tests/hero-border.spec.ts

# Run tests with browser visible (headed mode)
npx playwright test --headed
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run all Playwright tests
- `npm run test:quick` - Run quick smoke test
- `npm run lint` - Lint TypeScript/React files
- `npm run lint:fix` - Fix linting issues
- `npm run typecheck` - Type check without building

## Navigation

- **Arrow Keys** (← →) to navigate between slides
- **Spacebar** to advance to next slide
- **On-screen buttons** for click navigation

## Pre-commit Hooks

This project uses Husky and lint-staged to ensure code quality:

- **ESLint** checks for code quality issues
- **TypeScript** type checking
- **Playwright** quick smoke test to ensure nothing is broken

## Fonts

- **Headings**: Poppins Black
- **Body**: Manrope
- **Mono/Data**: IBM Plex Mono

## Brand Colors (Soft Pastel Palette)

- Soft Pink/Blush: `#FFD6E8`
- Soft Blue: `#C2E3FF`
- Soft Cream/Yellow: `#FFF4CC`
- Soft Peach: `#FFE5D9`

## Project Structure

```
src/
├── slides/          # Individual slide components
├── components/      # Reusable components (Navigation, ImagePlaceholder, UserJourney)
├── App.tsx          # Main app with slide orchestration
├── main.tsx         # Entry point
└── index.css        # Global styles

tests/
└── deck.spec.ts     # Playwright E2E tests
```

## Deployment

### Important: Git LFS Large Files

This project uses **Git LFS** (Large File Storage) to track large media files:
- `demo.mp4` (8.5 MB) - Product demo video on Slide 4
- `inspection.png` (2.0 MB) and `port.png` (2.1 MB) - Problem slide images

**Before deploying**, you must ensure:
1. You have Git LFS installed: `git lfs install`
2. You have pulled the actual files (not just pointers): `git lfs pull`
3. Check file sizes: `ls -lh src/assets/demo.mp4` should show **8.5M**, not 132 bytes

### Deploy to Vercel

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/atlas-vision.git
   git push -u origin main
   ```

2. **Verify LFS files are pushed**:
   ```bash
   git lfs ls-files
   # Should show: demo.mp4, inspection.png, port.png
   ```

3. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework Preset: **Vite** (auto-detected)
   - Build Command: `npm run vercel:build` (uses vercel.json config)
   - Output Directory: `dist`
   - Click "Deploy"

4. **Enable Git LFS in Vercel** (CRITICAL - do this before redeploying):
   - Go to your project → Settings → Git
   - Find "Git Large File Storage (LFS)" section
   - Toggle **Enable Git LFS** to ON
   - Click "Save"
   - **Redeploy** your project (Deployments → ⋯ → Redeploy)

   **Why this is needed**:
   - Without Git LFS enabled, Vercel only downloads 132-byte pointer files
   - The demo.mp4 video (8.5MB) and images won't display
   - Vercel's native LFS support fetches actual files from GitHub LFS storage
   - LFS is free on all Vercel plans

5. **Configure Custom Domain** (atlasinsights.ai):
   - Go to your Vercel project → Settings → Domains
   - Add `atlasinsights.ai` and `www.atlasinsights.ai`
   - Vercel will provide DNS records to configure:

   **Add these DNS records at your domain registrar**:
   ```
   Type    Name    Value
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```

   - Wait for DNS propagation (can take up to 48 hours, usually much faster)
   - Vercel will automatically provision SSL certificates

6. **Environment Variables** (if needed):
   - Go to Settings → Environment Variables
   - Add any API keys or configuration

### Alternative: Deploy to Netlify

1. **Deploy**:
   ```bash
   npm run build
   npx netlify-cli deploy --prod --dir=dist
   ```

2. **Custom Domain**:
   - Netlify Dashboard → Domain Settings → Add custom domain
   - Follow similar DNS configuration as above

### Alternative: Deploy to GitHub Pages

Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/atlas-vision/',
  // ... rest of config
})
```

Then deploy:
```bash
npm run build
npx gh-pages -d dist
```

## Documentation

- 📱 **[Mobile Optimization Guide](docs/mobile-optimization.md)** - Comprehensive plan for mobile responsiveness
- ⚡ **[Mobile Quick Start](docs/mobile-optimization-quick-start.md)** - Developer guide with Claude Code prompts
- 🧪 **[Testing Plan](docs/testing-plan.md)** - Cross-browser and cross-platform testing
- 📚 **[All Documentation](docs/README.md)** - Complete docs index

## TODO

### High Priority
- [ ] 📱 **Mobile Optimization** - Make deck responsive for portrait phones (see [mobile optimization docs](docs/mobile-optimization.md))
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Cross-platform testing (macOS, Windows, Linux, iOS, Android)
- [ ] Performance testing and optimization
- [ ] Accessibility audit (WCAG compliance)

### Medium Priority
- [ ] Add visual regression testing
- [ ] Test animations across different frame rates
- [ ] Test with different screen resolutions
- [ ] Add more comprehensive E2E tests

### Low Priority
- [ ] Add internationalization (i18n) support
- [ ] Add analytics tracking
- [ ] Optimize asset loading and bundle size
- [ ] Add contact information for team members on final slide
- [ ] Add LinkedIn profile links for team members and advisors
- [ ] Add email links for sales and investor contact information

## License

ISC
