import { test, expect } from '@playwright/test';

test.describe('Atlas Vision Pitch Deck', () => {
  test('should not be empty/white screen', async ({ page }) => {
    await page.goto('/');

    // Wait for React to render
    await page.waitForTimeout(1000);

    // Check if the page has actual content (not just white)
    const bodyText = await page.textContent('body');
    expect(bodyText).toBeTruthy();
    expect(bodyText?.length).toBeGreaterThan(50);

    // Check for main heading
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('ATLAS VISION');
  });

  test('should display hero slide with impact statement', async ({ page }) => {
    await page.goto('/');

    // Check for hero content
    await expect(page.locator('text=ATLAS VISION')).toBeVisible();
    await expect(page.locator('text=AI-Powered Robotics for Automotive Pre-Delivery Inspection')).toBeVisible();
    await expect(page.locator('text=Intelligent agents that identify, categorize, and process defects across the automotive supply chain.')).toBeVisible();
  });

  test('should have navigation controls', async ({ page }) => {
    await page.goto('/');

    // Check for navigation
    const prevButton = page.locator('button').filter({ hasText: /previous/i }).or(page.locator('button svg').first());
    const nextButton = page.locator('button').filter({ hasText: /next/i }).or(page.locator('button svg').last());

    await expect(prevButton).toBeVisible();
    await expect(nextButton).toBeVisible();
  });

  test('should navigate to next slide on arrow click', async ({ page }) => {
    await page.goto('/');

    // Get initial content
    const initialContent = await page.textContent('body');

    // Click next button (last button in navigation)
    const buttons = page.locator('button');
    await buttons.last().click();

    // Wait for animation
    await page.waitForTimeout(500);

    // Content should change
    const newContent = await page.textContent('body');
    expect(newContent).not.toBe(initialContent);

    // Should show problem slide
    await expect(page.locator('text=THE PROBLEM')).toBeVisible();
  });

  test('should navigate with keyboard arrows', async ({ page }) => {
    await page.goto('/');

    // Press right arrow key
    await page.keyboard.press('ArrowRight');

    // Wait for animation
    await page.waitForTimeout(500);

    // Should be on problem slide
    await expect(page.locator('text=THE PROBLEM')).toBeVisible();

    // Press left arrow to go back
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(500);

    // Should be back on hero
    await expect(page.locator('text=ATLAS VISION')).toBeVisible();
  });

  test('should show progress indicator', async ({ page }) => {
    await page.goto('/');

    // Check for progress indicator showing 01 / 11 or similar
    const progressText = await page.locator('text=/\\d{2}\\s*\\/\\s*\\d{2}/').textContent();
    expect(progressText).toMatch(/01.*11/);
  });

  test('should have D3 chart on market slide', async ({ page }) => {
    await page.goto('/');

    // Navigate to market slide (slide 3)
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);

    // Check for market content
  await expect(page.locator('text=MARKET OPPORTUNITY')).toBeVisible(); // This matches the actual heading

    // Check for SVG chart
    const svg = page.locator('svg').first();
    await expect(svg).toBeVisible();

    // Check for market data
    await expect(page.locator('text=$4.3B')).toBeVisible();
  });

  test('should have GSAP user journey animation on product slide', async ({ page }) => {
    await page.goto('/');

    // Navigate to product slide (slide 5)
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(300);
    }

    // Check for product workflow
  await expect(page.locator('text=PRODUCT ARCHITECTURE')).toBeVisible();

    // Check for user journey SVG path
    const svgPath = page.locator('svg path');
    await expect(svgPath.first()).toBeVisible();

    // Check for workflow stages
    await expect(page.locator('text=CAPTURE')).toBeVisible();
    await expect(page.locator('text=DETECT')).toBeVisible();
    await expect(page.locator('text=REPORT')).toBeVisible();
  });

  test('should apply gradient background transitions', async ({ page }) => {
    await page.goto('/');

    // Check if gradient background exists
    const gradientDiv = page.locator('div').filter({
      has: page.locator('*')
    }).first();

    // Navigate to trigger gradient change
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(500);

    // Gradient should have updated (different background)
    const hasGradient = await page.evaluate(() => {
      const divs = document.querySelectorAll('div');
      for (const div of divs) {
        const bg = window.getComputedStyle(div).background;
        if (bg.includes('gradient') || bg.includes('radial')) {
          return true;
        }
      }
      return false;
    });

    expect(hasGradient).toBe(true);
  });

  test('should have image placeholders', async ({ page }) => {
    await page.goto('/');

  // Go to problem slide which has images
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);

  // Check for images with alt text
  await expect(page.locator('img[alt="Manual inspection"]')).toBeVisible();
  await expect(page.locator('img[alt="Crowded delivery yard"]')).toBeVisible();
  });

  test('should complete full deck navigation', async ({ page }) => {
    await page.goto('/');

    const totalSlides = 11;

    // Navigate through all slides
    for (let i = 1; i < totalSlides; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(300);
    }

    // Should be on last slide (Team)
  await expect(page.locator('text=THE TEAM')).toBeVisible(); // This matches the actual heading
    await expect(page.locator('text=Maryam Azh')).toBeVisible();

    // Next button should be disabled
    const nextButton = page.locator('button').last();
    await expect(nextButton).toBeDisabled();
  });
});
