// const puppeteer = require('puppeteer');
// // Rest of your code remains unchanged


// (async () => {
//   // Launch the browser and open a new blank page
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();

//   // Navigate the page to a URL
//   await page.goto('https://www.reddit.com/');

//   // Set screen size
//   await page.setViewport({width: 1080, height: 1024});

//   // Type into search box
//   await page.type('.input-container', 'AI');

//   // Wait and click on first result
//   const searchResultSelector = '.search-box__link';
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Locate the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     'text/Customize and automate'
//   );
//   const fullTitle = await textSelector?.evaluate(el => el.textContent);

//   // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close();
// })();

// const puppeteer = require('puppeteer');

// (async () => {
//   try {
//     // Launch the browser and open a new blank page
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     // Navigate the page to the Reddit search URL
//     await page.goto('https://www.reddit.com/search/?q=ai&type=sr');

//     // Wait for search results page to load
//     const searchResultSelector = '.search-result';
//     await page.waitForSelector(searchResultSelector);

//     // Click on the first search result link
//     const linkSelector = `${searchResultSelector} a.search-link`;
//     await page.click(linkSelector);

//     // Wait for the page content to load
//     const contentSelector = '.content'; // Replace with the appropriate selector for the content
//     await page.waitForSelector(contentSelector);

//     // Extract the full title
//     const fullTitle = await page.$eval(contentSelector, (el) => el.textContent);

//     // Print the full title
//     console.log('The title of this blog post is "%s".', fullTitle.trim());

//     await browser.close();
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// })();


// Reddit Version 



// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   try {
//     // Ask the user for the search query
//     const query = await askQuestion('Enter your search query: ');

//     // Launch the browser and open a new blank page
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     // Construct the search URL based on the user's input
//     const searchUrl = `https://www.reddit.com/search/?q=${encodeURIComponent(query)}&type=sr`;
//     await page.goto(searchUrl);

//     // Wait for search results page to load
//     const searchResultSelector = '.search-result';
//     await page.waitForSelector(searchResultSelector);

//     // Click on the first search result link
//     const linkSelector = `${searchResultSelector} a.search-link`;
//     await page.click(linkSelector);

//     // Wait for the page content to load
//     const contentSelector = '.content'; // Replace with the appropriate selector for the content
//     await page.waitForSelector(contentSelector);

//     // Extract the full title
//     const fullTitle = await page.$eval(contentSelector, (el) => el.textContent);

//     // Print the full title
//     console.log('The title of this blog post is "%s".', fullTitle.trim());

//     await browser.close();
//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     rl.close();
//   }
// })();

// function askQuestion(question) {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// }


// Updated version and working fuckinnn COde !!

// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   try {
//     // Ask the user for the search query
//     const query = await askQuestion('Enter your search query: ');

//     // Launch the browser and open a new blank page
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     // Construct the search URL based on the user's input
//     const searchUrl = `https://www.reddit.com/search/?q=${encodeURIComponent(query)}&type=sr`;
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' }); // Wait only for the DOM content to be loaded

//     // Extract and print the content of the element with ID search-community-title-t5_6xtffe
//     const communityName = await page.evaluate(() => {
//       const element = document.getElementById('search-community-title-t5_6xtffe');
//       return element ? element.textContent.trim() : 'Element not found';
//     });

//     console.log(`Community Name: ${communityName}`);

//     await browser.close();
//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     rl.close();
//   }
// })();

// function askQuestion(question) {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// }


//Final Codeeee OGGGG

const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  try {
    // Ask the user for the search query
    const query = await askQuestion('Enter your search query: ');

    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Construct the search URL based on the user's input
    const searchUrl = `https://www.reddit.com/search/?q=${encodeURIComponent(query)}&type=sr`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' }); // Wait only for the DOM content to be loaded

    // Extract and print the top 10 community names (subreddits) based on a specific element's class
    const communityNames = await page.$$eval('.block.font-semibold.text-neutral-content-strong.hover\\:text-neutral-content-strong.hover\\:no-underline.pb-2xs.text-16.xs\\:text-18.mb-2xs', (elements) =>
      elements.slice(0, 10).map((element) => element.textContent.trim())
    );

    for (let i = 0; i < communityNames.length; i++) {
      console.log(`Community Name ${i + 1}: ${communityNames[i]}`);
    }

    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
})();

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

