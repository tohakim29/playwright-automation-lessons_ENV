import { test } from '@playwright/test';

//*******textContent() and innerText() methods ********************************
test('textContent() method', async ({ page }) => {

//go to url https://practice.cydeo.com/
    await page.goto('https://practice.cydeo.com/');

  const abTesting = await page.locator("text='A/B Testing'");
  //or  //but with locator better relyable
 // const abTesting = await page.getByText("text='A/B Testing'");
         
  

  await abTesting.click();
  await page.waitForTimeout(3000);

  const paragraph = await page.locator("//p[contains(text(), 'Also known as split testing')]");
  const innerText = await paragraph.innerText();


  console.log(innerText);
});
//********************************inputValue() methods ********************************

test('input value method', async ({ page }) => {


  await page.goto('https://practice.cydeo.com/inputs');
    // create locator variable named inputBox with the xpath //input[@type='number']
     
    const inputBox = await page.locator("//input[@type='number']");


   await inputBox.fill('1200');
   
   await page.waitForTimeout(1000);

   const inputValue = await inputBox.inputValue(); //1200 get value of input
   console.log(inputValue);


});


//*********************************getAttribute(); methods end ****************************************

test('getAttribute()method', async ({ page }) => {
  
  await page.goto('https://practice.cydeo.com/inputs');

  const cydeo = await page.locator("text='CYDEO'");

  const linkOfCydeo = await cydeo.getAttribute("href");
  console.log(linkOfCydeo); 

   



});