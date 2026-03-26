import { test, expect } from '@playwright/test'

test.describe('User Journey Animation', () => {
  test('should display user journey with correct animation', async ({ page }) => {
    await page.goto('http://localhost:5173')

    // Wait for initial load
    await page.waitForTimeout(1000)

    // Navigate to slide 5 (Product Workflow) - need to press right arrow 4 times
    // Slides: 1=Hero, 2=Problem, 3=Market, 4=Solution, 5=Product
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(500)
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(500)
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(500)
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(1000)

    // Take initial screenshot
    await page.screenshot({ path: 'user-journey-0-start.png', fullPage: true })

    // Check we're on Product Workflow slide
    const hasProductWorkflow = await page.locator('text=PRODUCT WORKFLOW').isVisible()
    console.log('Is PRODUCT WORKFLOW visible?', hasProductWorkflow)

    // Check all 5 steps are visible
    const hasCAPTURE = await page.locator('text=CAPTURE').isVisible()
    const hasDETECT = await page.locator('text=DETECT').isVisible()
    const hasREASON = await page.locator('text=REASON').isVisible()
    const hasVERIFY = await page.locator('text=VERIFY').isVisible()
    const hasREPORT = await page.locator('text=REPORT').isVisible()

    console.log('Steps visible:', { hasCAPTURE, hasDETECT, hasREASON, hasVERIFY, hasREPORT })

    // Click Play button to start animation
    const playButton = page.locator('button', { hasText: 'Play' })
    if (await playButton.isVisible()) {
      await playButton.click()
      console.log('Clicked Play button')
    }

    // Take screenshots at different points in the animation (12 second total animation)
    // Every 2.4 seconds should capture each step
    for (let i = 1; i <= 5; i++) {
      await page.waitForTimeout(2400)
      await page.screenshot({ path: `user-journey-${i}-step.png`, fullPage: true })
      console.log(`Screenshot ${i} taken`)
    }
  })
})
