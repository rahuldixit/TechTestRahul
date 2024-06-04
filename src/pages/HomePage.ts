import { Locator, Page } from "@playwright/test";
import { SuperPage } from "./SuperPage";

export class HomePage extends SuperPage {
  readonly yourVehicle: Locator;
  readonly EVCharging: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.yourVehicle = this.page.locator('a:text-is("Your Vehicle")').first();
    this.EVCharging = this.page.locator('a:text-is("EV Charging")').first();
  }
}
