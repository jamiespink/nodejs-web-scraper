import express from "express";
import "./lib/cron";

const app = express();

app.get("/scrape", async (req, res, next) => {
  
});

app.listen(3000, () => console.log("App running on port 3000"));
