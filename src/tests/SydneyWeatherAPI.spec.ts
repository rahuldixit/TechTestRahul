// @ts-check
import { test, expect } from "@playwright/test";
import { getRequest } from "../../utils/apiUtils";
import { APPCONSTANTS } from "../app.constants";
import { writeFileSync } from "fs";
import { join } from "path";

test("Sydney Weather API, @api", async () => {
  const response = await getRequest({
    URL: `${APPCONSTANTS.WEATHER_URL}`,
    params: {
      Key: "6a26ae7f33ef4bf88bf45733240406",
      q: "Sydney",
      api: "no",
    },
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  const temperatureCelsius = responseBody.current.temp_c;
  console.log(temperatureCelsius);
  writeFileSync(
    join(__dirname, "../assets", "temparature.txt"),
    `The temperature in Sydney today is ${temperatureCelsius}`,
    {
      flag: "w",
    },
  );
});
