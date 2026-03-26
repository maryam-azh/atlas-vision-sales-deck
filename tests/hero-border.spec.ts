import { test, expect } from '@playwright/test'

test.describe('Hero Slide Border Visibility', () => {
  test('should show top border of hero box with white space above it', async ({ page }) => {
    await page.goto('http://localhost:5173')

    // Wait for animation to complete
    await page.waitForTimeout(1500)

    // Take screenshot
    await page.screenshot({ path: 'hero-border-check.png', fullPage: false })

    // Find the bordered box element
    const borderedBox = page.locator('.border-4.border-black')
    await expect(borderedBox).toBeVisible()

    // Get the bounding box of the bordered element
    const box = await borderedBox.boundingBox()

    if (!box) {
      throw new Error('Could not find bordered box')
    }

    console.log('Bordered box position:', {
      top: box.y,
      left: box.x,
      width: box.width,
      height: box.height,
    })

    // The top border should be at least 20px from the top of the viewport
    // to ensure it's visible with white space above
    const minTopMargin = 20

    expect(box.y,
      `Top border is at ${box.y}px, should be at least ${minTopMargin}px from top to be visible`
    ).toBeGreaterThanOrEqual(minTopMargin)

    // Also check bottom doesn't overflow
    const viewportHeight = page.viewportSize()?.height || 720
    expect(box.y + box.height,
      `Bottom of box at ${box.y + box.height}px exceeds viewport height ${viewportHeight}px`
    ).toBeLessThanOrEqual(viewportHeight - 20)
  })
})
