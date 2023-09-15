// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   try {
//     // Ask the user for search keywords
//     // const keywords = await askQuestion('Enter search keywords: ');

//     // Launch Puppeteer with your Chrome profile
//     const browser = await puppeteer.launch({
//       headless: false,
//       userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
//     });

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     // Construct the LinkedIn group search URL based on the user's input
//     const searchUrl = `https://www.linkedin.com/groups/56766/members/`;
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     // Retrieve cookies from your active Chrome session
//     const cookies = await page.cookies();

//     // Set the cookies in Puppeteer's page to use your existing LinkedIn session
//     await page.setCookie(...cookies);

//     // Wait for the top 10 group name elements to load
//     await page.waitForSelector('span.entity-result__title-text');

//     // Extract and print only the top 10 group names
//     const groupNames = await page.evaluate(() => {
//       const elements = document.querySelectorAll('span.entity-result__title-text');
//       const groupNamesArray = [];

//       for (const element of elements) {
//         const text = element.textContent.trim();
//         if (text) {
//           groupNamesArray.push(text);
//         }
//       }

//       return groupNamesArray.slice(0, 10);
//     });

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




// OGGG this opens message box!

// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false, // Set to true for headless mode
//       userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
//     });

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     const searchUrl = `https://www.linkedin.com/groups/56766/members/`; // Replace with your actual URL
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     const cookies = await page.cookies();
//     await page.setCookie(...cookies);

//     // Wait for the "Message" button to appear
//     await page.waitForSelector('button[aria-label^="Message "]');

//     // Click on the "Message" button of the first person
//     const messageButtons = await page.$$('button[aria-label^="Message "]');
//     if (messageButtons.length > 0) {
//       await messageButtons[0].click(); // Click the first button
//     } else {
//       console.error('Message buttons not found.');
//     }

//     // You can add additional code here to handle the messaging dialog that appears

//     // Keep the page open (or you can close the browser as needed)
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




// OGGGG This is sending the message 

// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false, // Set to true for headless mode
//       userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
//     });

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     const searchUrl = `https://www.linkedin.com/groups/122612/members/`; // Replace with your actual URL
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     const cookies = await page.cookies();
//     await page.setCookie(...cookies);

//     // Wait for the "Message" button to appear and click it
//     await page.waitForSelector('button[aria-label^="Message "]');
//     const messageButtons = await page.$$('button[aria-label^="Message "]');
//     if (messageButtons.length > 0) {
//       await messageButtons[0].click(); // Click the first "Message" button
//     } else {
//       console.error('Message buttons not found.');
//       return;
//     }

//     // Wait for the message input field to appear
//     await page.waitForSelector('div.msg-form__contenteditable[contenteditable="true"]');

//     // Type "hi" in the message input field
//     // await page.type('div.msg-form__contenteditable[contenteditable="true"]', `hey 👋🏻

//     // I provide a service of featuring SaaS with top 100+ Cherry Picked Directories - increasing the reach by 100+ unique users per day. You can check it out here: https://www.reachactory.online/.
    
//     // Even though you might not be in the market for it, I would love to get your feedback. Let me know what do you think. 
    
//     // Thanks :)`);


//     await page.click('div.msg-form__contenteditable[contenteditable="true"]'); // Focus the input field
//     await page.keyboard.type(`hey 👋🏻,`);
//     await page.keyboard.press('Enter');
//     await page.keyboard.press('Enter');
//     await page.keyboard.type(`i provide a service of featuring SaaS over top 100+ Directories - increasing reach by 100+ unique users per day.`);
//     await page.keyboard.press('Enter');
//     await page.keyboard.press('Enter');
//     await page.keyboard.type(`i would definitely recommend you to check it out : https://www.reachactory.online/.`);
//     await page.keyboard.press('Enter');
//     await page.keyboard.press('Enter');
//     await page.keyboard.type(`Even though you might not be in the market for it, I would love to get your feedback. Let me know what do you think.`);
//     await page.keyboard.press('Enter');
//     await page.keyboard.press('Enter');
//     await page.keyboard.type(`Thanks :)`);

    

//     // Click the "Send" button
//     await page.click('button.msg-form__send-button');

//     console.log('Message sent: "hi"');

//     // You can add additional code here to handle the messaging dialog that appears

//     // Keep the page open (or you can close the browser as needed)
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







//  const puppeteer = require('puppeteer');
//  const readline = require('readline');

//  const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout,
//  });

//  (async () => {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false, // Set to true for headless mode
//       userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default', // Replace with your profile path
//     });

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     const searchUrl = `https://www.linkedin.com/groups/122612/members/`; // Replace with your actual URL
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     const cookies = await page.cookies();
//     await page.setCookie(...cookies);

//     const messageButtons = await page.$$('button[aria-label^="Message "]');
//     if (messageButtons.length > 0) {
//       for (let i = 6; i < 10; i++) { // Loop through 10 people
//         await messageButtons[i].click(); // Click the "Message" button

//         // Wait for the message input field to appear
//         await page.waitForSelector('div.msg-form__contenteditable[contenteditable="true"]');

//         // Type your message
//         await page.waitForTimeout(2000); 
//         // await page.click('div.msg-form__contenteditable[contenteditable="true"]');
// //         await page.keyboard.type(`hey 👋🏻,
        
// // // I provide a service of featuring SaaS with top 100+ Cherry Picked Directories - increasing the reach by 100+ unique users per day. You can check it out here: https://www.reachactory.online/.
        
// // // Even though you might not be in the market for it, I would love to get your feedback. Let me know what do you think.
        
// // // Thanks :)`);

//         await page.click('div.msg-form__contenteditable[contenteditable="true"]'); // Focus the input field
//         await page.keyboard.type(`hey 👋🏻,`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`i provide a service of featuring SaaS over top 100+ Directories - increasing reach by 100+ unique users per day.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`i would definitely recommend you to check it out : https://www.reachactory.online/.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`Even though you might not be in the market for it, I would love to get your feedback. Let me know what do you think.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`Thanks :)`);

// //         // Click the "Send" button
//         // await page.click('button.msg-form__send-button');

//         console.log(`Message ${i + 1} sent.`);

//         await page.waitForTimeout(2000);
// //         // Close the message window
//         await page.click('li-icon[type="close"][size="small"]');
//       }
//     } else {
//       console.error('Message buttons not found.');
//       return;
//     }

//     // You can add additional code here to handle any further actions

//     // Keep the page open (or you can close the browser as needed)
//     await new Promise(() => {});
//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     rl.close();
//   }
// })();




// Updated code for login issue

// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   try {
//     // const browser = await puppeteer.launch({
//     //   headless: false,
//     //   userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default',
//     // });

//     const browser = await puppeteer.launch({
//         headless: false,
//         userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default',
//         args: ['--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36'],
//       });
      

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     const searchUrl = `https://www.linkedin.com/groups/122612/members/`;
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     // You may need to handle login here if cookies are not enough

//     const messageButtons = await page.$$('button[aria-label^="Message "]');
//     if (messageButtons.length > 0) {
//       for (let i = 0; i < 10; i++) {
//         await messageButtons[i].click();
        
//         // You may need to handle captchas here if they appear

//         // await page.waitForSelector('div.msg-form__contenteditable[contenteditable="true"]', { timeout: 30000 });
//         await messageButtons[i].click();
//         await page.waitForTimeout(5000); // Wait for 5 seconds
//         await page.waitForSelector('div.msg-form__contenteditable[contenteditable="true"]', { timeout: 30000 });

//         // Add appropriate delays between actions
//         await page.waitForTimeout(2000);
        
//         // Type and send your message

//         await page.click('div.msg-form__contenteditable[contenteditable="true"]'); // Focus the input field
//         await page.keyboard.type(`hey 👋🏻,`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`i provide a service of featuring SaaS over top 100+ Directories - increasing reach by 100+ unique users per day.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`i would definitely recommend you to check it out : https://www.reachactory.online/.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`Even though you might not be in the market for it, I would love to get your feedback. Let me know what do you think.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`Thanks :)`);

// // //         // Click the "Send" button
//         // await page.click('button.msg-form__send-button');
//         // Close the message window
//         await page.click('li-icon[type="close"][size="small"]');
//       }
//     } else {
//       console.error('Message buttons not found.');
//       return;
//     }

//     // You can add additional code here to handle any further actions

//     // Keep the page open (or you can close the browser as needed)
//     await new Promise(() => {});
//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     rl.close();
//   }
// })();








// // Updated half working code 
// const puppeteer = require('puppeteer');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false,
//       userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default',
//       args: ['--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36'],
//     });

//     const pages = await browser.pages();
//     const page = pages.length > 0 ? pages[0] : await browser.newPage();

//     const searchUrl = `https://www.linkedin.com/groups/122612/members/`;
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     // You may need to handle login here if cookies are not enough

//     const messageButtons = await page.$$('button[aria-label^="Message "]');
//     if (messageButtons.length > 0) {
//       for (let i = 17; i < 200; i++) {
//         // Wait for the button to become clickable
//         await messageButtons[i].click({ waitFor: 'domcontentloaded' });

//         // You may need to handle captchas here if they appear

//         // Wait for the message input field to appear
//         await page.waitForSelector('div.msg-form__contenteditable[contenteditable="true"]', { timeout: 30000 });

//         // Add appropriate delays between actions
//         await page.waitForTimeout(2000);

//         // Type and send your message
//         await page.click('div.msg-form__contenteditable[contenteditable="true"]'); // Focus the input field
//         // await page.keyboard.type(`hey 👋🏻,`);
//         await page.keyboard.type(`hey 👋🏻,`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`i provide a service of featuring SaaS over top 100+ Directories - increasing reach by 100+ unique users per day.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`i would definitely recommend you to check it out : https://www.reachactory.online/.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`Even though you might not be in the market for it, I would love to get your feedback. Let me know what do you think.`);
//         await page.keyboard.press('Enter');
//         await page.keyboard.press('Enter');
//         await page.keyboard.type(`Thanks :)`);
        
//         // ...send message
//         // await page.click('button.msg-form__send-button');

//         await page.waitForTimeout(1000);
//         // Close the message window
//         await page.click('li-icon[type="close"][size="small"]');
//         await page.waitForTimeout(1000);
//         i++;
//       }
//     } else {
//       console.error('Message buttons not found.');
//       return;
//     }

//     // You can add additional code here to handle any further actions

//     // Keep the page open (or you can close the browser as needed)
//     await new Promise(() => {});
//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     rl.close();
//   }
// })();







// fully functioning code BOOOOOOOMMMMMMMMMMM
// THIS IS A BLAST

const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      userDataDir: '/Users/kathan/Library/Application Support/Google/Chrome/Default',
      args: ['--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36'],
    });

    const pages = await browser.pages();
    const page = pages.length > 0 ? pages[0] : await browser.newPage();

    const searchUrl = `https://www.linkedin.com/groups/122612/members/`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

    // You may need to handle login here if cookies are not enough

    let maxIndex = 200; // Set your desired maximum index
    let currentIndex = 5;

    while (currentIndex < maxIndex) {
      // Scroll down to load more members
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
      });

      // Wait for a while to let more members load
      await page.waitForTimeout(3000);

      // You may need to handle captchas here if they appear

      // Find the message buttons on the page
      const messageButtons = await page.$$('button[aria-label^="Message "]');
      if (messageButtons.length > currentIndex) {
        // Wait for the button to become clickable
        await messageButtons[currentIndex].click({ waitFor: 'domcontentloaded' });

        // Wait for the message input field to appear
        await page.waitForSelector('div.msg-form__contenteditable[contenteditable="true"]', { timeout: 30000 });

        // Add appropriate delays between actions
        await page.waitForTimeout(1000);

        // Type and send your message
        await page.click('div.msg-form__contenteditable[contenteditable="true"]'); // Focus the input field
        await page.keyboard.type(`hey 👋🏻,`);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await page.keyboard.type(`i provide a service of featuring SaaS over top 100+ Directories - increasing reach by 100+ unique users per day.`);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await page.keyboard.type(`i would definitely recommend you to check it out : https://www.reachactory.online/.`);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await page.keyboard.type(`Even though you might not be in the market for it, I would love to get your feedback. Let me know what do you think.`);
        await page.keyboard.press('Enter');
        await page.keyboard.press('Enter');
        await page.keyboard.type(`Thanks :)`);

        // Sending click
        // await page.waitForSelector('button.msg-form__send-button', { timeout: 30000 });
        await page.waitForTimeout(3000);
        
        // Enable while sending only
        // await page.click('button.msg-form__send-button');
        
        await page.waitForTimeout(3000);

        // Close the message window
        await page.click('li-icon[type="close"][size="small"]');

        await page.waitForTimeout(3000);
        // Increment the current index
        currentIndex++;
      } else {
        // No more message buttons found, exit the loop
        break;
      }
    }

    console.log(`Sent messages to ${currentIndex} members.`);

    // You can add additional code here to handle any further actions

    // Keep the page open (or you can close the browser as needed)
    await new Promise(() => {});
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
})();
