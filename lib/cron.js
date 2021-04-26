import cron from "node-cron";
import { startBrowser } from "./browser";
import { pageController } from "./pageController";

const browserInstance = startBrowser();

cron.schedule("* * * * *", () => {
  console.log("Running the cron");
  pageController(browserInstance);
});
