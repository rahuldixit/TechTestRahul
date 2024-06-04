import { Locator, Page } from "@playwright/test";

/*
This super page is for functions applicable to any application.
Typically functions which operate on a given Locator, or does generic calculations
*/

export class SuperPage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForVisibility(element: Locator, timeout: number = 5000) {
    let wait = 0;
    while (!(await element.isVisible()) && timeout > wait) {
      await this.page.waitForTimeout(1000);
      wait += 1000;
    }
    return await element.isVisible();
  }
}
