import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';
import {createObjectCsvWriter} from "csv-writer"

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// const csvWriter = createObjectCsvWriter({
//     path: 'output.csv',
//     header: [
//         {id: 'name', title: 'Product Name'},
//         {id: 'price', title: 'Price'},
//         {id: 'rating', title: 'Rating'}
//     ]
// });
// const products = [
//     {
//         name:"mugunthan",
//         price:"23.33",
//         rating:"4"
//     }
// ]
// await csvWriter.writeRecords(products);



// Navigate the page to a URL.
await page.goto('https://www.mscdirect.com/product/details/59144907');

// Set screen size.
await page.setViewport({width: 1080, height: 1024});

const htmlContent = await page.content();

console.log(htmlContent);

await page.waitForSelector('#root');

const element = await page.$('#root');

if (element) {
    // Interact with the element, for example, extract its text content
    const textContent = await element.evaluate(el => el.textContent);
    console.log('Text Content:', textContent);
} else {
    console.log('Element not found');
}

// console.log(element);

// Type into search box.
// await page.locator('.devsite-search-field').fill('automate beyond recorder');

// Wait and click on first result.
// await page.locator('.devsite-result-item-link').click();

// Locate the full title with a unique string.
// const textSelector = await page
//   .locator('text/Customize and automate')
//   .waitHandle();
// const fullTitle = await textSelector?.evaluate(el => el.textContent);

// Print the full title.
// console.log('The title of this blog post is "%s".', fullTitle);

await browser.close();