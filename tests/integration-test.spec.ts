import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("test webpage", async ({ page }) => {
  await page.goto("http://localhost:3000/oppgaver/3-ende-til-ende-testing"); // Or swap the URL with the one you want to test

  // TODO: Scan the page with axe-core

  // TODO: Navigate the screen with keyboard, perform actions to change the view (open a menu, fill in and submit a form, etc.)
  //       Scan with axe-core again at each significant step to get a thorough check of the page.
  //       You can also use the testing library API to look up elements by role, name and value, e.g. to check if an element is visible or not.
});
