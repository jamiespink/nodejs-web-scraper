const url =
  "https://sports.sportingbet.co.za/en/sports/football-4/betting/england-14/premier-league-46";

async function sportingBet(browser) {
  let page = await browser.newPage();
  console.log(`Navigating to ${url}...`);
  await page.goto(url);
  page.waitForSelector(".grid-event-wrapper");
  console.log("test");
  const matches = await page.evaluate(() => {
    let matchesArray = [];
    let events = document.getElementsByClassName("grid-event-wrapper");
    console.log(events);
    for (let i = 0; i < events.length; i++) {
      matchesArray.push({
        home: events[i].getElementsByClassName("participant")[0].textContent,
        // away: row.querySelector(".participants-pair-game > div:nth-child(2) .participant").textContent
      });
      console.log(events[i].getElementsByClassName("participant")[0]);
    }
    return matchesArray;
  });
  console.log(matches);
}

export { sportingBet };
