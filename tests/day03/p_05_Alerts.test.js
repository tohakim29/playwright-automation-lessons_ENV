const { test, expect } = require('@playwright/test');

test.describe('Assertion in UI Testing', async () => {

 
    test.beforeEach(async (  {page}) => { 
   

      await page.goto('https://practice.cydeo.com/javascript_alerts');
     
      
})

 
// Dialog is to handle javascript alerts and on() method
//****************1*********************** */
  test('1 Alerts with Alert', async ({ page }) => { 
    page.on('dialog' , async(dialog)=> {
        console.log(`Dialog message:  ${dialog.message()}`);
        dialog.accept();

    });

    const firstButtonJsAlert = await  page.locator("//button[@onclick='jsAlert()']");
    await firstButtonJsAlert.click();
    expect(page.locator("text='You successfully clicked an alert'")).toBeVisible();

    //wait 3 seconds
    await page.waitForTimeout(3000);

  });


  //*****************2********************** */
  test('2 Alerts with confirm', async ({ page }) => { 
      let confirmMessage;

      page.on('dialog' , async(dialog)=> {
        confirmMessage = dialog.message();
        await page.waitForTimeout(3000);
        dialog.dismiss();
      });

      const  secondButtonJsAlert = await page.locator("//button[@onclick='jsConfirm()']");
      await secondButtonJsAlert.click();
      expect(page.locator("text='You clicked: Cancel'")).toBeVisible();
      expect(confirmMessage).toBe("I am a JS Confirm");

      //wait 3 seconds
      await page.waitForTimeout(3000);
  });

  
//***************3************************ */

test("Handling JS Promopt", async ({ page }) => {

  let promptMessage;

  page.on('dialog', async (dialog) => {
      promptMessage =dialog.message();
      dialog.accept("CYDEO");
  });

  const clickForJsPrompt = page.locator("//button[@onclick='jsPrompt()']");
  await clickForJsPrompt.click();

  await expect(page.locator("text='You entered: CYDEO'")).toBeVisible();

});


  

});