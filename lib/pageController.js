import { skySports } from "./skySports.js";

async function pageController(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    const skySportsArray = await skySports(browser);
    // console.log(skySportsArray);
    // get another operator
    // make function to traverse new operator array and match up with sky sports matches
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

export { pageController };
