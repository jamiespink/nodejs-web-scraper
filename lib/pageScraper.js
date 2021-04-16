const url = "https://www.skysports.com/premier-league-fixtures";

async function pageScraper(browser) {
  let page = await browser.newPage();
  console.log(`Navigating to ${url}...`);
  await page.goto(url);
  const frame = page
    .mainFrame()
    .childFrames()
    .find((frame) => frame.url().includes("cdn.privacy-mgmt.com"));
  await frame.click(".sp_message-accept-button");
  const matches = await page.$$eval(".fixres__body > *", (rows) => {
    let date;
    let matches = [];
    rows.forEach((row) => {
      const rowClass = row.getAttribute("class");
      if (rowClass === "fixres__header2") {
        date = row.textContent;
      } else if (rowClass === "fixres__item") {
        matches.push({
          date: date,
          home: row
            .querySelector(".matches__participant--side1 .swap-text__target")
            .textContent.trim(),
        });
      }
    });
    return matches;
    // return rows[2].querySelector(".matches__date").textContent.trim();
    // return rows[2].querySelector(".matches__date").getAttribute("class");
  });
  console.log(matches);
}

export { pageScraper };
