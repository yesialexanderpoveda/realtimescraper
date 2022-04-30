import puppeteer from "puppeteer";

(async () => {

  const browser = await puppeteer.launch({ headless: false });
 
    
    const page = await browser.newPage();
    await page.setViewport( {width: 1000, height: 1080});

      await page.setDefaultNavigationTimeout(0);
      await page.goto('https://www.sofascore.com/', {

      waitUntil: "load",
      timeout: 0
      });

      

      await page.waitForTimeout(3000)
  await browser.close();
})();

