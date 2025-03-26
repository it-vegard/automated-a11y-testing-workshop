import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("test webpage", async ({ page }) => {
  await page.goto("http://localhost:3000/oppgaver/3-ende-til-ende-testing");
});
