const url = 'https://www.skysports.com/premier-league-fixtures';

async function pageScraper(browser){
    let page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
}

export { pageScraper };