const url = "https://sports.sportingbet.co.za/en/sports/football-4/betting/england-14/premier-league-46";

async function sportingBet(browser) {
  let page = await browser.newPage();
  console.log(`Navigating to ${url}...`);
  await page.goto(url);
  page.waitForSelector(".grid-event-wrapper");
  console.log('test');
  const matches = await page.evaluate(() => {
    let rows = document.querySelectorAll(".grid-event-wrapper");
    let matchesArray = [];
    console.log(rows);
    rows.forEach((row) => {
        matchesArray.push({
            home: row.querySelector(".participant").textContent
            // away: row.querySelector(".participants-pair-game > div:nth-child(2) .participant").textContent
        })
    });
    return matchesArray;
  })
  console.log(matches);
}

export { sportingBet };
