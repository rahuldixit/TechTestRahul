import { Page } from "@playwright/test";
import { AmpolEnergyPage } from "../pages/AmpolEnergyPage.ts";

export class AmpolEnergySteps {
  readonly ampolEnergyPage: AmpolEnergyPage;
  readonly page: Page;

  constructor(page: Page) {
    this.ampolEnergyPage = new AmpolEnergyPage(page);
    this.page = page;
  }

  async switchNow() {
    await this.ampolEnergyPage.switchNow.click();
    return this.page.url();
  }
}
