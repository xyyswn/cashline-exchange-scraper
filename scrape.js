const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://cashlinemoneytransfer.com', { waitUntil: 'networkidle2' });
  await page.waitForSelector('.exchange-rates-table');

  const html = await page.$eval('.exchange-rates-table', el => el.outerHTML);
  fs.writeFileSync('public/exchange-rates.html', html);

  await browser.close();
})();
