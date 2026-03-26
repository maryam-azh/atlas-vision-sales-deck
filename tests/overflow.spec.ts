import { test, expect } from '@playwright/test'

test.describe('Overflow Detection', () => {
  test('should not have horizontal overflow on any slide', async ({ page }) => {
    await page.goto('http://localhost:5173')

    const totalSlides = 11

    for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
      // Wait for slide to be ready
      await page.waitForTimeout(500)

      // Get viewport and document dimensions
      const dimensions = await page.evaluate(() => {
        return {
          viewportWidth: window.innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body.scrollWidth,
          viewportHeight: window.innerHeight,
          documentHeight: document.documentElement.scrollHeight,
          bodyHeight: document.body.scrollHeight,
        }
      })

      // Check for horizontal overflow
      const hasHorizontalOverflow =
        dimensions.documentWidth > dimensions.viewportWidth ||
        dimensions.bodyWidth > dimensions.viewportWidth

      console.log(`Slide ${slideIndex + 1}/${totalSlides}:`, {
        viewport: `${dimensions.viewportWidth}x${dimensions.viewportHeight}`,
        document: `${dimensions.documentWidth}x${dimensions.documentHeight}`,
        hasHorizontalOverflow,
      })

      // Take screenshot if overflow detected
      if (hasHorizontalOverflow) {
        await page.screenshot({
          path: `overflow-slide-${slideIndex + 1}.png`,
          fullPage: true
        })
      }

      // Assert no horizontal overflow
      expect(hasHorizontalOverflow,
        `Slide ${slideIndex + 1} has horizontal overflow: viewport=${dimensions.viewportWidth}px, document=${dimensions.documentWidth}px`
      ).toBe(false)

      // Navigate to next slide (except on last slide)
      if (slideIndex < totalSlides - 1) {
        await page.keyboard.press('ArrowRight')
      }
    }
  })

  test('should detect elements extending beyond viewport', async ({ page }) => {
    await page.goto('http://localhost:5173')

    const totalSlides = 11

    for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
      await page.waitForTimeout(500)

      // Find all elements that extend beyond the viewport
      const overflowingElements = await page.evaluate(() => {
        const viewportWidth = window.innerWidth
        const elements = document.querySelectorAll('*')
        const overflowing = []

        elements.forEach(el => {
          const rect = el.getBoundingClientRect()
          if (rect.right > viewportWidth) {
            overflowing.push({
              tag: el.tagName,
              class: el.className,
              right: rect.right,
              viewportWidth,
              overflow: rect.right - viewportWidth,
            })
          }
        })

        return overflowing
      })

      if (overflowingElements.length > 0) {
        console.log(`Slide ${slideIndex + 1} - Overflowing elements:`, overflowingElements.slice(0, 5))
        await page.screenshot({
          path: `overflow-elements-slide-${slideIndex + 1}.png`,
          fullPage: true
        })
      }

      expect(overflowingElements.length,
        `Slide ${slideIndex + 1} has ${overflowingElements.length} elements extending beyond viewport`
      ).toBe(0)

      if (slideIndex < totalSlides - 1) {
        await page.keyboard.press('ArrowRight')
      }
    }
  })
})
