const url = 'https://www.skysports.com/premier-league-fixtures';

async function pageScraper(browser){
    let page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url);
    
    const frame = await page.mainFrame().childFrames().find(frame => frame.url().includes("mgmt"));
    await frame.click('.sp_message-accept-button');
}

export { pageScraper };