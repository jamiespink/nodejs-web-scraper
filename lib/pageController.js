import { skySports } from "./skySports";
import { sportingBet } from "./sportingBet";
import { matcher } from "./helpers";

async function pageController(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
  const skySportsMatches = await skySports(browser);
  const sportingBetOdds = await sportingBet(browser);
  const matchedArray = matcher(skySportsMatches, [sportingBetOdds]);
  console.log(matchedArray);
}

export { pageController };
