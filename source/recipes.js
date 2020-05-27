import chalk from "chalk";

const curl = async (page) => {
  const content = await page.content();
  console.log(content);
};

const links = async (page, params) => {
  const links = "a";

  const els = await page.evaluate((links) => {
    const anchors = Array.from(document.querySelectorAll(links));
    return anchors.map((anchor) => {
      const title = anchor.textContent.split("|")[0].trim();
      const link = anchor.href || anchor.parentElement.href ||
        anchor.parentElement.parentElement.href || "";
      return { title, link };
    });
  }, links);

  els.forEach(({ title, link }) => {
    console.log(title);
    console.log(chalk.blue(link));
    console.log();
  });
};

const recipes = {
  curl,
  links,
};

export default recipes;
