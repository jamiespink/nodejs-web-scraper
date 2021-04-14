import express from "express";
import db from "./lib/db";
import "./lib/cron";

const app = express();

app.get("/data", async (req, res, next) => {
    const home = db.value();
    res.json(home);
});

app.listen(3000, () => console.log("App running on http://localhost:3000"));
