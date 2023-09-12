// const puppeteer = require('puppeteer');
// const readline = require('readline');
// const fs = require('fs/promises'); // For saving and loading cookies

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   let browser;
//   try {
//     // Initialize Puppeteer browser
//     browser = await puppeteer.launch({ headless: false });

//     // Create a new page or reuse an existing one if cookies are available
//     let page = await getSavedPage(browser);

//     if (!page) {
//       // If there are no saved cookies, perform the login
//       page = await loginToFacebook(browser);
//       // Save the cookies for future use
//       await saveCookies(page);
//     }

//     // Prompt the user for a search query
//     const query = await askQuestion('Enter your search query for Facebook groups: ');

//     // Perform the search
//     await performSearch(page, query);

//     // Print the search results
//     await printSearchResults(page);

//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
//     rl.close();
//   }
// })();

// async function getSavedPage(browser) {
//   try {
//     // Check if cookies file exists
//     await fs.access('cookies.json');

//     // If cookies file exists, load cookies
//     const page = await browser.newPage();
//     const cookies = JSON.parse(await fs.readFile('cookies.json'));
//     await page.setCookie(...cookies);
//     await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded' });

//     // Check if the login was successful
//     const loginButton = await page.$('a[data-testid="open-registration-form-button"]');
//     if (loginButton) {
//       // Login button found, indicating the login was not successful
//       return null;
//     }

//     console.log('Logged in using saved cookies.');
//     return page;

//   } catch (error) {
//     // Cookies file doesn't exist or loading cookies failed
//     return null;
//   }
// }

// async function loginToFacebook(browser) {
//   const page = await browser.newPage();
//   await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded' });

//   // Check if the login form is present
//   const loginForm = await page.$('form#login_form');
//   if (!loginForm) {
//     throw new Error('Facebook login page structure changed. Please update the code.');
//   }

//   // Ask the user for their Facebook username and password
//   const username = await askQuestion('Enter your Facebook username (email or phone number): ');
//   const password = await askQuestion('Enter your Facebook password: ');

//   // Fill in the login form and submit it
//   await page.type('input[name="email"]', username);
//   await page.type('input[name="pass"]', password);
//   await page.click('button[type="submit"]');

//   // Wait for the dashboard to load (you can customize this selector)
//   await page.waitForSelector('div#bluebarRoot', { timeout: 10000 });

//   console.log('Logged in successfully.');
//   return page;
// }

// async function saveCookies(page) {
//   const cookies = await page.cookies();
//   await fs.writeFile('cookies.json', JSON.stringify(cookies));
// }

// async function askQuestion(question) {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// }

// async function performSearch(page, query) {
//   const searchUrl = `https://www.facebook.com/search/groups?q=${encodeURIComponent(query)}`;
//   await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });
//   // Wait for the search results to load (customize this selector)
//   await page.waitForSelector('.some-selector-for-group-results', { timeout: 10000 });
// }

// async function printSearchResults(page) {
//   // Extract and print the names of the Facebook groups
//   const groupNames = await page.$$eval('.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.xt0b8zv.xzsf02u.x1s688f a', (elements) =>
//     elements.slice(0, 10).map((element) => element.textContent.trim())
//   );

//   for (let i = 0; i < groupNames.length; i++) {
//     console.log(`Facebook Group ${i + 1}: ${groupNames[i]}`);
//   }
// }

// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   let browser;
//   try {
//     // Launch the browser
//     browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     // Navigate to the Facebook login page
//     await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded' });

//     // Ask the user for their Facebook username (email or phone number) and password
//     const username = await askQuestion('Enter your Facebook username (email or phone number): ');
//     const password = await askQuestion('Enter your Facebook password: ');

//     // Fill in the username and password fields and click the login button
//     await page.type('#email', username); // Update with the actual selector for the username field
//     await page.type('#pass', password);  // Update with the actual selector for the password field
//     await page.click('button[name="login"]');    // Update with the actual selector for the login button

//     // Wait for the login to complete (customize this selector)
//     await page.waitForSelector('#some-element-on-the-dashboard', { timeout: 10000 });

//     console.log('Logged in successfully.');

//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     if (browser) {
//       await browser.close();
//     }
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


// OGGG code working 

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

//     // Navigate to the Facebook group search URL
//     const searchUrl = 'https://www.facebook.com/groups/search/groups_home?q=AI';
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     // Retrieve cookies from your active Chrome session
//     const cookies = await page.cookies();

//     // Set the cookies in Puppeteer's page to use your existing session
//     await page.setCookie(...cookies);

//     // Keep the page open
//     await new Promise(() => {});

//     // You can manually close the Puppeteer browser when you're done with the page
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// })();


// OGGG searches for Groups as well

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

//     // Launch Puppeteer with your Chrome profile
//     const browser = await puppeteer.launch({
//       headless: false,
//       userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
//     });

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     // Construct the Facebook group search URL based on the user's input
//     const searchUrl = `https://www.facebook.com/groups/search/groups_home?q=${encodeURIComponent(query)}`;
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     // Retrieve cookies from your active Chrome session
//     const cookies = await page.cookies();

//     // Set the cookies in Puppeteer's page to use your existing session
//     await page.setCookie(...cookies);

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
    // Ask the user for the search query
    const query = await askQuestion('Enter your search query: ');

    // Launch Puppeteer with your Chrome profile
    const browser = await puppeteer.launch({
      headless: false,
      userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
    });

    const pages = await browser.pages();
    const page = pages.length > 0 ? pages[0] : await browser.newPage();

    // Construct the Facebook group search URL based on the user's input
    const searchUrl = `https://www.facebook.com/groups/search/groups_home?q=${encodeURIComponent(query)}`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

    // Retrieve cookies from your active Chrome session
    const cookies = await page.cookies();

    // Set the cookies in Puppeteer's page to use your existing session
    await page.setCookie(...cookies);

    // Wait for the top 10 group name elements to load (replace with a suitable selector if needed)
    const groupNames = await page.$$eval('span.x193iq5w a.x1i10hfl', (elements) =>
      elements.slice(0, 10).map((element) => element.textContent.trim())
    );

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
