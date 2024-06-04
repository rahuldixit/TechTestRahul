import { APPCONSTANTS } from "../app.constants";
import * as data from "../testdata/testData.json";
import { test, expect } from "@playwright/test";
import { EVChargingSteps } from "../steps/EVChargingSteps";
import { AmpolEnergySteps } from "../steps/AmpolEnergySteps";

test.describe("Scenario A @regression", async () => {
  test.setTimeout(10 * 60 * 1000);
  let navigateEVCharging: EVChargingSteps;
  let ampolEnergySteps: AmpolEnergySteps;

  test("Search for charging stations in Sydney and Melborne then goto AMPOL energy", async ({
    page,
  }) => {
    navigateEVCharging = new EVChargingSteps(page);
    ampolEnergySteps = new AmpolEnergySteps(page);
    await page.goto(APPCONSTANTS.AMPOL_URL);
    await navigateEVCharging.gotoEVChargingPage();
    expect((await navigateEVCharging.getHeaderText())?.trim()).toContain(
      data.ScenarioA.header,
    );
    await navigateEVCharging.gotoFindChargingLocation();
    await navigateEVCharging.searchChargingLocation("Sydney NSW");
    await navigateEVCharging.displayChargingOptions(data, "Sydney");
    await navigateEVCharging.searchChargingLocation("Melbourne VIC");
    await navigateEVCharging.displayChargingOptions(data, "Melbourne");
    await navigateEVCharging.gotoAmpolEnergy();
    expect(await ampolEnergySteps.switchNow()).toBe(
      "https://energy.ampol.com.au/sign-up/postcode",
    );
  });
});
