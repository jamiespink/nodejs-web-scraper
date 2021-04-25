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
      if (row.querySelectorAll(".option-value > *").length) {
        matchesArray.push({
          operator: "sportingbet",
          home: row.querySelectorAll(".participant")[0].textContent.trim(),
          away: row.querySelectorAll(".participant")[1].textContent.trim(),
          odds: {
            home: row.querySelectorAll(".option-value > *")[0].textContent,
            draw: row.querySelectorAll(".option-value > *")[1].textContent,
            away: row.querySelectorAll(".option-value > *")[2].textContent
          }
        });
      }
    });
    return matchesArray;
  });
  await page.close();
  return matches;
}

export { sportingBet };
