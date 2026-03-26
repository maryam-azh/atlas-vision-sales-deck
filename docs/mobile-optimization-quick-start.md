# Mobile Optimization Quick Start Guide

## TL;DR - What to Ask Claude Code

If you want Claude Code to help optimize the slide deck for mobile, use these prompts in order:

### 1. Start with Layout Responsiveness

```
Please update all slide components in src/slides/ to use responsive padding and layouts:

1. Change all fixed padding (p-16) to responsive: p-4 sm:p-8 md:p-12 lg:p-16
2. Convert all fixed grid layouts to responsive flex/grid that stack on mobile
3. Update typography to scale across breakpoints (text-3xl → sm:text-4xl → md:text-5xl → lg:text-6xl)
4. Ensure all multi-column layouts become single-column stacks on mobile

Priority files:
- src/slides/Slide2_Problem.tsx (has fixed grid: gridTemplateColumns: '38% 1fr')
- src/slides/Slide4_Solution.tsx (has 3-column grid that breaks on mobile)
- src/slides/Slide1_Hero.tsx (typography too large on mobile)

Test that there's no horizontal scrolling on a 375px viewport (iPhone SE).
```

### 2. Add Touch Gestures

```
Add swipe gesture support to the slide deck navigation:

1. Install react-swipeable: npm install react-swipeable
2. Update src/App.tsx to add swipe handlers:
   - Swipe left = next slide
   - Swipe right = previous slide
   - Only on touch devices, not desktop
3. Add visual feedback for swipe gestures if possible
4. Test that keyboard navigation still works

Reference the react-swipeable documentation for best practices.
```

### 3. Optimize Navigation for Touch

```
Make the navigation controls in src/components/Navigation.tsx more mobile-friendly:

1. Increase button touch targets to minimum 44x44px
2. Add a visual progress indicator showing current slide number
3. Ensure buttons don't obscure slide content on small screens
4. Make the slide counter more prominent
5. Test on mobile viewport that all buttons are easily tappable

The buttons should work well with both touch and mouse input.
```

### 4. Add Performance Optimizations

```
Optimize media loading for mobile devices:

1. Install react-responsive: npm install react-responsive
2. Add conditional rendering for videos - show static PNG on mobile, video on desktop
3. For Slide4_Solution, create a static fallback image from the demo video first frame
4. Reduce animation complexity on mobile (simpler fade transitions instead of scale/transform)
5. Test load time on throttled 3G connection

Ensure the deck loads in under 3 seconds on mobile 3G.
```

### 5. Create Mobile Tests

```
Set up Playwright mobile testing:

1. Update playwright.config.ts to include mobile device projects:
   - iPhone 12
   - iPad Pro
   - Pixel 7
2. Create tests/mobile-responsiveness.spec.ts with tests for:
   - No horizontal overflow on any slide
   - All text readable (minimum 14px)
   - Touch targets minimum 44px
   - Swipe gestures work
   - Generate screenshots for visual regression
3. Run tests and fix any failures

Use the Playwright device emulation API documented at playwright.dev/docs/emulation
```

## File-by-File Breakdown

### High Priority Files (Fix These First)

1. **src/slides/Slide2_Problem.tsx** - Line 11
   - Issue: `gridTemplateColumns: '38% 1fr'` breaks on mobile
   - Fix: Convert to `flex flex-col lg:grid lg:grid-cols-[38%_1fr]`

2. **src/slides/Slide4_Solution.tsx** - Line 10
   - Issue: `grid grid-cols-3` becomes unreadable on mobile
   - Fix: Change to `flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3`

3. **src/App.tsx**
   - Issue: No swipe gestures for mobile
   - Fix: Add useSwipeable hook

4. **src/components/Navigation.tsx**
   - Issue: Buttons too small for touch
   - Fix: Increase to min-w-[44px] min-h-[44px]

### Medium Priority Files

5. **src/slides/Slide1_Hero.tsx**
   - Issue: Typography too large (text-7xl)
   - Fix: Scale down to text-3xl sm:text-5xl lg:text-7xl

6. **All other slide files**
   - Apply responsive patterns consistently

## Testing Checklist

After making changes, test on these viewports:

- [ ] iPhone SE (375px width) - smallest modern phone
- [ ] iPhone 12 (390px width) - common size
- [ ] iPhone 15 Pro Max (430px width) - large phone
- [ ] iPad (768px width) - tablet
- [ ] Desktop (1280px+) - ensure we didn't break desktop

### Quick Test Commands

```bash
# Open dev server
npm run dev

# In another terminal, run Playwright tests
npm run test

# Or test specific mobile viewport in browser DevTools:
# Chrome: F12 → Toggle device toolbar → Select "iPhone 12 Pro"
```

## Success Criteria

You'll know mobile optimization is complete when:

1. ✅ No horizontal scrolling on any slide (375px viewport)
2. ✅ All text readable without zooming
3. ✅ Navigation buttons easy to tap (44x44px minimum)
4. ✅ Swipe gestures work smoothly
5. ✅ Images/videos load within 3 seconds on 3G
6. ✅ All Playwright mobile tests pass
7. ✅ Visual comparison with desktop looks intentional, not broken

## Common Issues & Solutions

### Issue: "Text is cut off on mobile"
**Solution**: Reduce font sizes using responsive classes
```tsx
// Before
<h1 className="text-7xl">Title</h1>

// After
<h1 className="text-3xl sm:text-5xl lg:text-7xl">Title</h1>
```

### Issue: "Columns are too narrow on mobile"
**Solution**: Stack columns vertically on mobile
```tsx
// Before
<div className="grid grid-cols-3 gap-8">

// After
<div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
```

### Issue: "Navigation buttons hard to tap"
**Solution**: Increase touch target size
```tsx
// Before
<button className="p-2">

// After
<button className="p-4 min-w-[44px] min-h-[44px]">
```

### Issue: "Video loads slowly on mobile"
**Solution**: Use conditional rendering
```tsx
import { useMediaQuery } from 'react-responsive'

const isMobile = useMediaQuery({ maxWidth: 768 })

{isMobile ? (
  <img src="/static-fallback.jpg" />
) : (
  <video src="/demo.mp4" autoPlay />
)}
```

## Resources

- **Full Documentation**: See `docs/mobile-optimization.md`
- **Screenshots**: See `docs/mobile-views/` folder
- **Tailwind Responsive Docs**: https://tailwindcss.com/docs/responsive-design
- **React Swipeable**: https://github.com/FormidableLabs/react-swipeable
- **Playwright Mobile**: https://playwright.dev/docs/emulation

## Need Help?

If you get stuck, refer to these reference projects:
- `/Users/petteri/Dropbox/LABs/KusiKasa/github/homepage` - Good responsive patterns
- `/Users/petteri/Dropbox/LABs/dpp-fashion/repository` - Mobile-first design

Or ask Claude Code:
```
I'm having trouble with [specific issue] in the mobile optimization.
Can you help me fix [file name] so that [desired behavior]?
I've read docs/mobile-optimization.md but need more specific guidance on [topic].
```
