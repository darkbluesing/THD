import { test, expect } from '@playwright/test';

test.describe('YouTube Video Grid', () => {
  test('should load videos and display them in the grid', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() !== 'error') {
        return;
      }

      const text = msg.text();

      if (text.includes('favicon.ico')) {
        return;
      }

      if (text.includes('Cookie "__Secure-YEC" has been rejected')) {
        return;
      }

      if (text.includes('__Secure-YEC')) {
        return;
      }

      consoleErrors.push(text);
    });

    // Intercept the network request to the videos API
    const apiResponsePromise = page.waitForResponse('**/api/youtube/videos**');

    await page.goto('/');

    const apiResponse = await apiResponsePromise;
    const responseStatus = apiResponse.status();
    const responseBody = await apiResponse.json();

    console.log(`API Response Status: ${responseStatus}`);
    console.log(`API Response Body: ${JSON.stringify(responseBody, null, 2)}`);

    // Check that there were no console errors during page load
    expect(consoleErrors).toEqual([]);

    // Check that the API call was successful
    expect(responseStatus).toBe(200);

    // Check that the API response contains a "videos" array, even if it's empty
    expect(Array.isArray(responseBody.videos)).toBe(true);

    // Wait for the grid to be populated and check the number of video cards
    const videoGrid = page.getByTestId('video-grid-body');
    await expect(videoGrid).toBeVisible();

    const videoCards = videoGrid.locator('article');
    const count = await videoCards.count();
    console.log(`Found ${count} video cards rendered in the DOM.`);

    // Expect at least one video card to be rendered
    await expect(videoCards.first()).toBeVisible();
    expect(count).toBeGreaterThan(0);
  });
});
