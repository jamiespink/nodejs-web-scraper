import { pageScraper } from './pageScraper.js';

async function pageController(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        await pageScraper(browser);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

export { pageController };