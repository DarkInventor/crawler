// OGGG working but have to login again N again

// const puppeteer = require('puppeteer');

// (async () => {
//   try {
//     // Launch Puppeteer with your Chrome profile
//     const browser = await puppeteer.launch({
//       headless: false,
//       userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
//     });

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     // Navigate to the LinkedIn group search URL
//     const searchUrl = 'https://www.linkedin.com/search/results/groups/?keywords=AI&origin=SWITCH_SEARCH_VERTICAL&sid=NoF';
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     // Retrieve cookies from your active Chrome session
//     const cookies = await page.cookies();

//     // Set the cookies in Puppeteer's page to use your existing LinkedIn session
//     await page.setCookie(...cookies);

//     // Keep the page open
//     await new Promise(() => {});

//     // You can manually close the Puppeteer browser when you're done with the page
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// })();




// Working like a charm, didn't have to login 
// OGGGGG 
// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   try {
//     // Ask the user for search keywords
//     const keywords = await askQuestion('Enter search keywords: ');

//     // Launch Puppeteer with your Chrome profile
//     const browser = await puppeteer.launch({
//       headless: false,
//       userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
//     });

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     // Construct the LinkedIn group search URL based on the user's input
//     const searchUrl = `https://www.linkedin.com/search/results/groups/?keywords=${encodeURIComponent(keywords)}&origin=SWITCH_SEARCH_VERTICAL&sid=NoF`;
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     // Retrieve cookies from your active Chrome session
//     const cookies = await page.cookies();

//     // Set the cookies in Puppeteer's page to use your existing LinkedIn session
//     await page.setCookie(...cookies);

//     // Wait for the top 10 group name elements to load (replace with a suitable selector if needed)
//     const groupNames = await page.$$eval('a.app-aware-link', (elements) =>
//       elements.slice(0, 10).map((element) => element.textContent.trim())
//     );

//     // Print the top 10 group names
//     for (let i = 0; i < groupNames.length; i++) {
//       console.log(`Group Name ${i + 1}: ${groupNames[i]}`);
//     }

//     // Keep the page open
//     await new Promise(() => {});

//     // You can manually close the Puppeteer browser when you're done with the page
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


const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  try {
    // Ask the user for search keywords
    const keywords = await askQuestion('Enter search keywords: ');

    // Launch Puppeteer with your Chrome profile
    const browser = await puppeteer.launch({
      headless: false,
      userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
    });

    const pages = await browser.pages();
    const page = pages.length > 0 ? pages[0] : await browser.newPage();

    // Construct the LinkedIn group search URL based on the user's input
    const searchUrl = `https://www.linkedin.com/search/results/groups/?keywords=${encodeURIComponent(keywords)}&origin=SWITCH_SEARCH_VERTICAL&sid=NoF`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

    // Retrieve cookies from your active Chrome session
    const cookies = await page.cookies();

    // Set the cookies in Puppeteer's page to use your existing LinkedIn session
    await page.setCookie(...cookies);

    // Wait for the top 10 group name elements to load
    await page.waitForSelector('span.entity-result__title-text');

    // Extract and print only the top 10 group names
    const groupNames = await page.evaluate(() => {
      const elements = document.querySelectorAll('span.entity-result__title-text');
      const groupNamesArray = [];

      for (const element of elements) {
        const text = element.textContent.trim();
        if (text) {
          groupNamesArray.push(text);
        }
      }

      return groupNamesArray.slice(0, 10);
    });

    // Print the top 10 group names
    for (let i = 0; i < groupNames.length; i++) {
      console.log(`Group Name ${i + 1}: ${groupNames[i]}`);
    }

    // Keep the page open
    await new Promise(() => {});

    // You can manually close the Puppeteer browser when you're done with the page
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
