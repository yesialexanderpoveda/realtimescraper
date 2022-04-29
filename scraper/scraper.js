import puppeteer from "puppeteer";

(async () => {

  const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto('https://www.sofascore.com/');
      await page.waitForTimeout(3000)
  await browser.close();
})();

