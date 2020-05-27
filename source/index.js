import puppeteer from "puppeteer";
import commander from "commander";
import recipes from "./recipes.js";

commander
  .option("-u, --url [url]", "URL to access")
  .option("-r, --recipe [recipe]", "Recipe to use")
  .parse(process.argv);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(commander.url);

  const recipe = commander.recipe || "curl";
  try {
    await recipes[recipe](page, commander);
  } catch (err) {
    console.error(err);
  }

  await browser.close();
})();
