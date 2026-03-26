import { test, expect } from '@playwright/test'

test.describe('Slide 4 Video Dimensions', () => {
  test('video should display with correct aspect ratio without letterboxing', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await page.waitForTimeout(1000)

    // Navigate to slide 4 (index 3, so press arrow 3 times)
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(800)
    }

    // Take screenshot to verify we're on the right slide
    await page.screenshot({
      path: 'test-results/slide4-navigation-check.png',
      fullPage: true
    })

    // Wait for video to be visible
    const video = page.locator('video')
    await expect(video).toBeVisible()

    // Get video dimensions
    const videoBox = await video.boundingBox()
    expect(videoBox).not.toBeNull()

    if (videoBox) {
      const aspectRatio = videoBox.width / videoBox.height
      console.log('Video dimensions:', {
        width: videoBox.width,
        height: videoBox.height,
        aspectRatio: aspectRatio.toFixed(2),
        expectedAspectRatio: '5.0'
      })

      // Check if aspect ratio is close to 5:1 (allowing for small rounding differences)
      expect(aspectRatio).toBeGreaterThan(4.5)
      expect(aspectRatio).toBeLessThan(5.5)

      // Video should be reasonably tall (at least 150px)
      expect(videoBox.height).toBeGreaterThan(150)

      // Take a screenshot for visual verification
      await page.screenshot({
        path: 'test-results/slide4-video-test.png',
        fullPage: true
      })
    }
  })

  test('video container should not have black letterboxing', async ({ page }) => {
    await page.goto('http://localhost:5173')

    // Navigate to slide 4
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(500)
    }

    // Check the video container
    const videoContainer = page.locator('video').locator('..')
    const containerBox = await videoContainer.boundingBox()
    const video = page.locator('video')
    const videoBox = await video.boundingBox()

    expect(containerBox).not.toBeNull()
    expect(videoBox).not.toBeNull()

    if (containerBox && videoBox) {
      console.log('Container vs Video:', {
        containerHeight: containerBox.height,
        videoHeight: videoBox.height,
        heightDifference: Math.abs(containerBox.height - videoBox.height)
      })

      // Container and video should have similar heights (within 5px)
      const heightDiff = Math.abs(containerBox.height - videoBox.height)
      expect(heightDiff).toBeLessThan(5)
    }
  })
})
