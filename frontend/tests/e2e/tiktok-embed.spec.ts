import { test, expect } from "@playwright/test";

test.describe("TikTok Embed Playback", () => {
  test("should render TikTok embed without console errors", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() !== "error") {
        return;
      }

      const text = msg.text();

      if (text.includes("ResizeObserver loop limit exceeded")) {
        return;
      }

      if (text.includes("__Secure-YEC")) {
        return;
      }

      consoleErrors.push(text);
    });

    await page.goto("/");

    // 1. Filter for TikTok videos
    await page.getByRole("button", { name: "TikTok", exact: true }).click();

    // 2. Wait for the grid and find the first video card
    const grid = page.getByTestId("video-grid-body");
    await expect(grid).toBeVisible();
    const firstCard = grid.locator("article").first();
    await expect(firstCard).toBeVisible({ timeout: 15_000 });

    // 3. Click the card to open the modal flow
    await firstCard.locator('button[aria-label$="상세 보기"]').click();

    // 4. Handle the interstitial ad modal
    const adCloseButton = page.getByRole("button", { name: "영상 재생하기" });
    await expect(adCloseButton).toBeVisible({ timeout: 10_000 });
    await adCloseButton.click();

    // 5. Wait for the main video modal and the TikTok iframe
    const modal = page.getByRole("dialog", { name: "영상 플레이어" });
    await expect(modal).toBeVisible({ timeout: 10_000 });

    const tiktokFrame = modal.locator('iframe[src*="tiktok.com"]');
    await expect(tiktokFrame).toBeVisible({ timeout: 15_000 });

    // 6. Final verification
    const frameHandle = await tiktokFrame.elementHandle();
    expect(frameHandle).not.toBeNull();
    expect(consoleErrors).toEqual([]);
  });
});
