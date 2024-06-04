import { Locator, Page } from "@playwright/test";
import { SuperPage } from "./SuperPage";

export class EVChargingPage extends SuperPage {
  //Common locators used while submitting quote attributes
  readonly pageHeader: Locator;
  readonly findChargingLocation: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.pageHeader = this.page.locator(".hero__title");
    this.findChargingLocation = this.page
      .locator('a:text-is("FIND A CHARGING LOCATION")')
      .first();
  }
}
