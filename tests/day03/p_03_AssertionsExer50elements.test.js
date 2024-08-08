const { test, expect } = require('@playwright/test');

test.describe('Assertion in UI Testing', async () => {

    let elements;


    test.beforeEach(async (  {page}) => { 
   

      await page.goto('https://practice.cydeo.com/');
      elements = await page.locator("//ul[@class='list-group']/li/a");
      await page.waitForTimeout(2000);
    
})

  test('Verify that there are 50 elements under the url tag', async ({ page }) => {
   
    let count  = await elements.count();
    expect(count).toBe(50);


  });
  test('Verify all 50 elements under the url tag are visible', async ({ page }) => {
   //create a for loop that has 50 iterations    
    for(let i=0;i<50;i++){
       let element = await elements.nth(i);
       expect(await element.isVisible()).toBeTruthy();
       await expect(element).toBeVisible();
       console.log(await element.innerText());
      }


  });  
  test('Verify all 50 elements under the url tag are enabled', async ({ page }) => {
    for(let i=0;i<50;i++){
      let element = await elements.nth(i);
      expect(await element.isEnabled()).toBeTruthy();
      await expect(element).toBeEnabled();
     
     }

  });  
  test('Verify all 50 elements under url tag have href attribute', async ({ page }) => {
    //Verify all 50 elements under url tag have href attribute 
    for(let i=0;i<50;i++){
      let element = await elements.nth(i);
      let href = await element.getAttribute('href');
      expect(href).toBeTruthy();
      await expect(element).toHaveAttribute("href");
      console.log(await href);
     }
  });
 
 

});