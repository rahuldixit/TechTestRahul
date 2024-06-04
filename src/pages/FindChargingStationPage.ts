import { Locator, Page } from "@playwright/test";
import { SuperPage } from "./SuperPage";

export class FindChargingStationPage extends SuperPage {
  //Common locators used while submitting quote attributes
  readonly addressSearch: Locator;
  readonly firstResultDetails: Locator;
  readonly ampolEnergyIcon: Locator;
  readonly EVChargeSection: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addressSearch = this.page.locator(
      ".ant-select-selection-search-input",
    );
    this.firstResultDetails = this.page
      .locator('[data-testid="Accordion"]')
      .nth(2);
    this.EVChargeSection = this.page.getByRole("button", {
      name: "EV Charging (AmpCharge)",
    });
    this.ampolEnergyIcon = this.page.getByRole("link", {
      name: "Retail Energy",
    });
  }
}
