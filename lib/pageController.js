import { skySports } from "./skySports.js";
import { sportingBet } from "./sportingBet";

async function pageController(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    // const skySportsMatches = await skySports(browser);
    // console.log(skySportsMatches);
    // get another operator
    const sportingBetOdds = await sportingBet(browser);
    // make function to traverse new operator array and match up with sky sports matches
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

export { pageController };
