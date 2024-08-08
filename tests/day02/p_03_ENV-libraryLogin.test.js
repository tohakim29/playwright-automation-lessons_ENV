import { test} from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config('./.env');


/* 
to create env file and use your credentials like password
you need to create a .env file in main folder

And add .env file in .gitignore, so it will not appears in gitHub


******************************** AND import above your file
import dotenv from 'dotenv';
dotenv.config('./.env');
*/





test('library Login', async ({ page }) => {


//navigate to https://library.cyder.com/
    await page.goto(process.env.LIBRARY_URL); //THIS COMES FROM .ENV FILE
    const usernameInput = await page.locator("//input[@id='inputEmail']");

    // create locator variable named passwordInput and use this xpath //input[@id='inputPassword'] to locate
    const passwordInput = await page.locator("//input[@id='inputPassword']");  


    
  // create locator variable named signinButton and use this xpath //button[@type='submit'] to locate
  const signinButton = await page.locator("//button[@type='submit']");


  //wait for 2seconds
  await page.waitForTimeout(2000);

 //enter username and password
  await usernameInput.fill(process.env.LIBRARY_STUDENT_USERNAME);//THIS COMES FROM .ENV FILE
  await passwordInput.fill(process.env.LIBRARY_STUDENT_PASSWORD);//THIS COMES FROM .ENV FILE

  // click on sign in button
  await signinButton.click();
  await page.waitForTimeout(2000);










});