import { Given, Then, When } from "@wdio/cucumber-framework";
import checkBoxPage from "../pageobjects/checkBox.page.ts";


Given(/^the heroku page and i go to (.+) page$/, async (subClass) => {
    console.log('I am '+ subClass+ ' page!');
    await checkBoxPage.open();
})
When(/^After that i select the checkbox 1$/, async () => {
    let getBox = checkBoxPage.checkBox1
    await getBox.click();
    await browser.pause(5000)
})
Then(/^i verify that the checkbox is active$/, async () => {
    console.log('spet four');
    let getBox = checkBoxPage.checkBox1
    
})