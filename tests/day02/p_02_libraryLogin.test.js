import { test} from '@playwright/test';

test('library Login', async ({ page }) => {


//navigate to https://library.cyder.com/
    await page.goto('https://library2.cydeo.com/');
    const usernameInput = await page.locator("//input[@id='inputEmail']");

    // create locator variable named passwordInput and use this xpath //input[@id='inputPassword'] to locate
    const passwordInput = await page.locator("//input[@id='inputPassword']");  


    
  // create locator variable named signinButton and use this xpath //button[@type='submit'] to locate
  const signinButton = await page.locator("//button[@type='submit']");


  //wait for 2seconds
  await page.waitForTimeout(2000);

 //enter username and password
  await usernameInput.fill('librarian10@library');
  await passwordInput.fill('libraryUser');

  // click on sign in button
  await signinButton.click();
  await page.waitForTimeout(2000);










});