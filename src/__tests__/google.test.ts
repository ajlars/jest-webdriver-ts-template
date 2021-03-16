import { Builder, Capabilities } from "selenium-webdriver";
const chromedriver = require("chromedriver");

test("can load google", async () => {
  const driver = await new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  await driver.get("https://www.google.com");
  expect(await driver.getTitle()).toBe("Gosogle");
  await driver.quit();
});
