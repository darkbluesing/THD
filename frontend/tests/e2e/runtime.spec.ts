import { test, expect } from "@playwright/test";

test.describe("Runtime Diagnostics", () => {
  test("should load the page and log console/network activity", async ({ page }) => {
    const consoleLogs: string[] = [];
    const networkRequests: {
      url: string;
      status: number;
      statusText: string;
      responseBody?: string;
    }[] = [];

    page.on("console", (message) => {
      const text = message.text();

      if (
        message.type() === "error" &&
        (text.includes("__Secure-YEC") || text.includes("quotaExceeded"))
      ) {
        return;
      }

      consoleLogs.push(`[Console ${message.type().toUpperCase()}] ${text}`);
    });

    page.on("request", (_request) => {
      // Optionally filter requests if needed
    });

    page.on("response", async (response) => {
      const url = response.url();
      const status = response.status();
      const statusText = response.statusText();
      let responseBody: string | undefined;

      const contentType = response.headers()["content-type"] ?? "";
      const wantsBody =
        status >= 400 ||
        url.includes("/api/") ||
        contentType.startsWith("application/json") ||
        contentType.startsWith("text/");

      if (wantsBody) {
        try {
          responseBody = await response.text();
        } catch (error) {
          responseBody = `Failed to get response body: ${error.message}`;
        }
      }

      networkRequests.push({ url, status, statusText, responseBody });
    });

    await page.goto("/", { waitUntil: "domcontentloaded" });

    // Wait for some time to ensure all dynamic content loads and errors appear
    await page.waitForTimeout(5000);

    // Capture a screenshot
    await page.screenshot({
      path: "playwright-report/runtime-screenshot.png",
      fullPage: true,
    });

    console.log("--- Console Logs ---");
    consoleLogs.forEach((log) => console.log(log));
    console.log("--- End Console Logs ---");

    console.log("--- Network Requests ---");
    networkRequests.forEach((req) => {
      console.log(`[${req.status} ${req.statusText}] ${req.url}`);
      if (req.responseBody) {
        const preview =
          req.responseBody.length > 200
            ? `${req.responseBody.substring(0, 200)}...`
            : req.responseBody;
        console.log(`  Response Body: ${preview}`);
      }
    });
    console.log("--- End Network Requests ---");

    // Assertions can be added here if specific conditions are expected
    // For now, we just capture and log.
    expect(true).toBe(true); // Placeholder assertion
  });
});
