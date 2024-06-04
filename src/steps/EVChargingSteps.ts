import { Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage.ts";
import { EVChargingPage } from "../pages/EVChargingPage.ts";
import { FindChargingStationPage } from "../pages/FindChargingStationPage.ts";

export class EVChargingSteps {
  chargingOptions: string[] = [];
  nonChargingOptions: string[] = [];
  homePage: HomePage;
  EVChargingPage: EVChargingPage;
  findChargingStationPage: FindChargingStationPage;

  readonly page: Page;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.EVChargingPage = new EVChargingPage(page);
    this.findChargingStationPage = new FindChargingStationPage(page);
    this.page = page;
  }

  async gotoEVChargingPage() {
    await this.homePage.yourVehicle.hover();
    await this.homePage.EVCharging.waitFor();
    await this.homePage.EVCharging.click();
  }

  async getHeaderText() {
    return await this.EVChargingPage.pageHeader.textContent();
  }

  async gotoFindChargingLocation() {
    await this.EVChargingPage.findChargingLocation.click();
  }

  async searchChargingLocation(location: string) {
    await this.findChargingStationPage.addressSearch.click({ force: true });
    await this.page.waitForTimeout(1000);
    await this.findChargingStationPage.addressSearch.fill("", { force: true });
    await this.page.waitForTimeout(1000);
    await this.findChargingStationPage.addressSearch.fill(location, {
      force: true,
    });
    await this.page.waitForTimeout(1000);
    await this.page.keyboard.press("Enter");
    await this.page.waitForTimeout(1000);
  }

  async getFirstResultText() {
    return await this.findChargingStationPage.firstResultDetails.textContent();
  }

  async displayChargingOptions(data, city) {
    this.chargingOptions = [];
    this.nonChargingOptions = [];
    if (!(await this.getFirstResultText())?.includes("Charging Bay")) {
      await this.findChargingStationPage.EVChargeSection.click();
    }
    [this.chargingOptions, this.nonChargingOptions] =
      await this.resolveChargingOptions(data);
    console.log(`${city} has following chargers - ${this.chargingOptions}`);
    if (city == "Melbourne") {
      console.log(
        `${city} does not have following chargers - ${this.nonChargingOptions}`,
      );
    }
  }

  async resolveChargingOptions(data): Promise<any> {
    for (let i = 0; i < data.ScenarioA.chargingOptions.length; i++) {
      if (
        (await this.getFirstResultText())?.includes(
          data.ScenarioA.chargingOptions[i],
        )
      ) {
        this.chargingOptions.push(data.ScenarioA.chargingOptions[i]);
      } else {
        this.nonChargingOptions.push(data.ScenarioA.chargingOptions[i]);
      }
    }
    return [this.chargingOptions, this.nonChargingOptions];
  }

  async gotoAmpolEnergy() {
    await this.findChargingStationPage.ampolEnergyIcon.click();
  }
}
