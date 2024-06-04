import { Locator, Page } from "@playwright/test";
import { SuperPage } from "./SuperPage";

export class AmpolEnergyPage extends SuperPage {
  //Common locators used while submitting quote attributes
  readonly switchNow: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.switchNow = this.page
      .locator("section")
      .filter({ hasText: "Switch to Ampol EnergyWant to" })
      .getByTestId("Button");
  }
}
