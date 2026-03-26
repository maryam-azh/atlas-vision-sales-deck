# Testing Plan for Atlas Vision Pitch Deck

This document outlines a comprehensive testing strategy for the Atlas Vision interactive pitch deck, inspired by cross-browser and cross-platform testing approaches.

## Cross-Browser Testing

### Desktop Browsers

| Browser | Versions | Priority | Test Coverage |
|---------|----------|----------|---------------|
| Chrome | Latest, Latest-1 | High | Full |
| Firefox | Latest, Latest-1 | High | Full |
| Safari | Latest (macOS) | High | Full |
| Edge | Latest | Medium | Core features |

### Mobile Browsers

| Browser | Platform | Priority | Test Coverage |
|---------|----------|----------|---------------|
| Safari | iOS 16+ | High | Core features |
| Chrome | Android 12+ | High | Core features |
| Firefox | Android | Low | Smoke tests |

## Cross-Platform Testing

### Desktop Operating Systems

- **macOS** (Sonoma, Ventura)
  - Safari, Chrome, Firefox
  - Test Retina display rendering
  - Test trackpad gestures

- **Windows** (11, 10)
  - Edge, Chrome, Firefox
  - Test high-DPI displays
  - Test keyboard navigation

- **Linux** (Ubuntu 22.04+)
  - Chrome, Firefox
  - Basic functionality verification

### Mobile Platforms

- **iOS** (16+)
  - iPhone (various screen sizes)
  - iPad (tablet layout)
  - Safari mobile

- **Android** (12+)
  - Various manufacturers (Samsung, Google Pixel)
  - Chrome mobile
  - Different screen densities

## Test Categories

### 1. Visual Testing

#### Slides Layout
- [ ] All 11 slides render correctly
- [ ] No content overflow or clipping
- [ ] Consistent spacing and alignment
- [ ] Proper font rendering across browsers

#### Animations
- [ ] Framer Motion gradient transitions work smoothly
- [ ] GSAP user journey animation performs well
- [ ] D3.js chart animations render correctly
- [ ] Video playback is smooth (demo.mp4)

#### Responsive Design
- [ ] Desktop layout (1920x1080, 1440x900, 1280x720)
- [ ] Tablet layout (1024x768, 768x1024)
- [ ] Mobile layout (375x667, 414x896, 390x844)
- [ ] Ultra-wide displays (2560x1080, 3440x1440)

### 2. Functional Testing

#### Navigation
- [ ] Arrow key navigation (← →)
- [ ] Spacebar advances slides
- [ ] On-screen button clicks work
- [ ] Slide counter displays correctly
- [ ] Navigation boundaries prevent overflow

#### Interactive Elements
- [ ] User journey Play/Pause button
- [ ] Car animation along journey path
- [ ] Tooltip displays at correct positions
- [ ] Hover states on step cards
- [ ] Video autoplay and loop

#### Media Loading
- [ ] All images load correctly (maryam.jpg, ian.jpg, inspection.jpg, port.jpg)
- [ ] Video loads and plays (demo.mp4)
- [ ] Proper fallbacks for slow connections
- [ ] Lazy loading optimization

### 3. Performance Testing

#### Load Performance
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Time to Interactive (TTI) < 3.5s
- [ ] Total bundle size < 500KB (gzipped)

#### Runtime Performance
- [ ] 60 FPS during animations
- [ ] Smooth transitions between slides
- [ ] No memory leaks during extended use
- [ ] Efficient D3.js chart rendering

#### Network Conditions
- [ ] Fast 3G (test on mobile)
- [ ] Slow 3G (graceful degradation)
- [ ] Offline behavior (service worker if applicable)

### 4. Accessibility Testing

#### Keyboard Navigation
- [ ] All interactive elements accessible via keyboard
- [ ] Focus indicators visible
- [ ] Tab order is logical
- [ ] Escape key behavior (if applicable)

#### Screen Reader Support
- [ ] Semantic HTML structure
- [ ] ARIA labels for interactive elements
- [ ] Alt text for all images
- [ ] Slide announcements for screen readers

#### Color Contrast
- [ ] Text meets WCAG AA standards (4.5:1)
- [ ] Large text meets WCAG AA (3:1)
- [ ] Color not sole indicator of information

#### Motion Preferences
- [ ] Respect `prefers-reduced-motion`
- [ ] Provide option to disable animations
- [ ] Static alternative for animated content

### 5. Video Testing

#### Aspect Ratio & Display
- [ ] Video maintains 5:1 aspect ratio (1216 × 304)
- [ ] No letterboxing or black bars
- [ ] Video height minimum 230px
- [ ] No cropping of video content
- [ ] Proper scaling on different screen sizes

#### Playback
- [ ] Autoplay works across browsers
- [ ] Loop functionality works correctly
- [ ] Muted by default
- [ ] No audio issues

## Playwright Test Examples

### Browser Matrix Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] },
    },
  ],
});
```

### Visual Regression Tests

```typescript
// tests/visual-regression.spec.ts
test('all slides match visual snapshots', async ({ page }) => {
  for (let i = 0; i < 11; i++) {
    await expect(page).toHaveScreenshot(`slide-${i + 1}.png`, {
      maxDiffPixels: 100,
    });
    if (i < 10) await page.keyboard.press('ArrowRight');
  }
});
```

### Performance Tests

```typescript
// tests/performance.spec.ts
test('first contentful paint under 1.5s', async ({ page }) => {
  const metrics = await page.evaluate(() =>
    JSON.stringify(performance.getEntriesByType('paint'))
  );
  const fcp = JSON.parse(metrics).find(m => m.name === 'first-contentful-paint');
  expect(fcp.startTime).toBeLessThan(1500);
});
```

## Testing Tools

### Recommended Tools

1. **Playwright** - Cross-browser E2E testing (current)
2. **Lighthouse** - Performance and accessibility auditing
3. **BrowserStack** or **Sauce Labs** - Real device testing
4. **Percy** or **Chromatic** - Visual regression testing
5. **axe DevTools** - Accessibility testing
6. **WebPageTest** - Performance analysis

### CI/CD Integration

```yaml
# .github/workflows/test.yml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chromium, firefox, webkit]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install ${{ matrix.browser }}
      - run: npx playwright test --project=${{ matrix.browser }}
```

## Testing Schedule

### Pre-release
- Run full test suite on all browsers/platforms
- Manual testing on physical devices
- Accessibility audit
- Performance profiling

### Continuous
- Automated tests on every commit (smoke tests)
- Full suite on pull requests
- Visual regression on staging deployments

### Post-release
- Monitor real user metrics
- Address browser-specific issues
- Performance monitoring

## Bug Tracking

### Priority Levels

1. **Critical** - Blocks core functionality or affects all users
2. **High** - Affects major features or significant user subset
3. **Medium** - Affects minor features or small user subset
4. **Low** - Cosmetic issues or edge cases

### Bug Report Template

```markdown
**Browser/Platform**: Chrome 120 / macOS Sonoma
**Screen Resolution**: 1920x1080
**Issue**: Video displays with incorrect aspect ratio
**Steps to Reproduce**:
1. Navigate to slide 4
2. Observe video dimensions
**Expected**: 5:1 aspect ratio (e.g., 1150 × 230)
**Actual**: 7.65:1 aspect ratio (1148 × 150)
**Screenshot**: [attached]
```

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Web.dev Performance](https://web.dev/performance/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [MDN Web Docs](https://developer.mozilla.org/) - Browser standards

## Next Steps

1. Set up Playwright with browser matrix
2. Implement visual regression testing
3. Add performance budgets to CI
4. Conduct accessibility audit
5. Test on real mobile devices
6. Set up monitoring for production
