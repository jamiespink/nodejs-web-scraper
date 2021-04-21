const url = "https://sports.sportingbet.co.za/en/sports/football-4/betting/england-14/premier-league-46";

async function sportingBet(browser) {
  let page = await browser.newPage();
  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  // page.waitForSelector(".grid-event-wrapper");
  await page.waitFor(() => document.querySelectorAll(".grid-event-wrapper").length);
  console.log("test");
  const matches = await page.$$eval(".grid-event-wrapper", (rows) => {
    let matchesArray = [];
    // let events = document.getElementsByClassName("grid-event-wrapper");
    // console.log(events);
    rows.forEach(row => {
      matchesArray.push({
        home: row.querySelectorAll(".participant")[0].textContent.trim(),
        away: row.querySelectorAll(".participant")[1].textContent.trim()
      });
    });
    // for (let i = 0; i < events.length; i++) {
    //   matchesArray.push({
    //     home: events[i].getElementsByClassName("participant")[0].textContent,
    //     // away: row.querySelector(".participants-pair-game > div:nth-child(2) .participant").textContent
    //   });
    // }
    // console.log(events[0].getElementsByClassName("participant")[0]).textContent;
    return matchesArray;
  });
  console.log(matches);
}

export { sportingBet };
