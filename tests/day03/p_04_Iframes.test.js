const { test, expect } = require('@playwright/test');

test.describe('Assertion in UI Testing', async () => {

 
    test.beforeEach(async (  {page}) => { 
   

      await page.goto('https://practice.cydeo.com/iframe');
     
    
})

 
  test('Locate the iframe by id', async ({ page }) => { 
    const myFrame = await page.frameLocator("#mce_0_ifr");
    const eleInsideTheIframe = myFrame.locator("//body[@id='tinymce']");

    //await eleInsideTheIframe.clear(); //it clears inside input all textarea
    //await eleInsideTheIframe.press("Control+A");
    //await eleInsideTheIframe.press("Backspace"); //it clears inside input one by one
    //await eleInsideTheIframe.type("hi takhir"); //it types inside input text by text


    await eleInsideTheIframe.fill("hi takhir");
    await expect(eleInsideTheIframe).toHaveText("hi takhir");
   
    console.log("hi "+ await eleInsideTheIframe.innerText());
    
    //wait for 3 seconds
    await page.waitForTimeout(3000);

  });


 
  test(' .. by CSS', async ({ page }) => { 
    const myFrame = await page.frameLocator("iframe[id='mce_0_ifr'][title='Rich Text Area']");
    const eleInsideTheIframe = myFrame.locator("//body[@id='tinymce']");
    await expect(eleInsideTheIframe).toBeEnabled();

  });


  test(' .. by Xpath', async ({ page }) => { 
    const myFrame = await page.frameLocator("iframe[title='Rich Text Area']");
    const eleInsideTheIframe = myFrame.locator("//body[@id='tinymce']");
    await expect(eleInsideTheIframe).not.toBeDisabled();
    await expect(eleInsideTheIframe).toBeVisible();
    await expect(eleInsideTheIframe).not.toBeHidden();

  });
  

});