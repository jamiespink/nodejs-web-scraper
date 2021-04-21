const url =
  "https://sports.sportingbet.co.za/en/sports/football-4/betting/england-14/premier-league-46";

async function sportingBet(browser) {
  let page = await browser.newPage();
  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: "domcontentloaded" });
  // page.waitForSelector(".grid-event-wrapper");
  await page.waitFor(
    () => document.querySelectorAll(".grid-event-wrapper").length
  );
  const matches = await page.$$eval(".grid-event-wrapper", (rows) => {
    let matchesArray = [];
    rows.forEach((row) => {
      matchesArray.push({
        home: row.querySelectorAll(".participant")[0].textContent.trim(),
        away: row.querySelectorAll(".participant")[1].textContent.trim(),
        markets: [
          {
            name: "result",
            outcomes: [
              {
                name: "home",
                odds: row.querySelectorAll(".option-value > *")[0].textContent,
              },
              {
                name: "draw",
                odds: row.querySelectorAll(".option-value > *")[1].textContent,
              },
              {
                name: "away",
                odds: row.querySelectorAll(".option-value > *")[2].textContent,
              },
            ],
          },
        ],
      });
    });
    return matchesArray;
  });
  return matches;
}

export { sportingBet };
