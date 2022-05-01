import puppeteer from "puppeteer";

let browser, page;

const scraper = {

  async open() {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 4080 });
    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://www.sofascore.com/", {
      waitUntil: "load",
      timeout: 0,
    });
  },

  async giveDta(socket) {

    await page.waitForTimeout(3000)
      
      
   /*    const divCount = await page.$$eval('.ReactVirtualized__Grid__innerScrollContainer > div', (divs) => { 
        const data = [];
        divs.map(ele => data.push(ele.textContent));
        return data;
      }); */

      await page.exposeFunction('emmitterForBets', (...data)=>{

         socket.emit(...data)

      })

      await page.evaluate(function observeDom() {
      
        var target = document.querySelector(".ReactVirtualized__Grid__innerScrollContainer");
     
        var observer = new MutationObserver(function(mutations) {
          
          return emmitterForBets("refreshAsap", target.innerText); 
        });

        var config = {
          attributes: true,
          childList: true,
          characterData: true, 
          subtree: true
        };
     
        observer.observe(target, config);
      })
     

  },
};

export default scraper;