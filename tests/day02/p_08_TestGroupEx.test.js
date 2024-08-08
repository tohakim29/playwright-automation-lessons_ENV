import { test } from '@playwright/test';


test.describe('Cydeo practice website tests', async () => {
 




  test.beforeEach( async ({page}) => { 
    await page.goto("https://practice.cydeo.com/");
});

test.afterEach( async ({page}) => { 
    await page.waitForTimeout(2000);
});


  test('A/B Testing is clickabel', async ({ page }) => {
      const abTestingElement = await page.locator("text='A/B Testing'");
      console.log(`A/B Testing is clickabel: ${await abTestingElement.isEnabled()}`);
      abTestingElement.click();
  });


  test('Add/Remove Elements is enabled', async ({ page }) => {
      const addRemoveElements = await page.locator("text='Add/Remove Elements'");
      console.log(`Add/Remove Elements is enabled :  ${await addRemoveElements.isEnabled()}`);
  });

  test("Autocomplete is displayed", async ({page}) => {
    const autocomplete = await page.locator("text='Autocomplete'");
    console.log(`Autocomplete is displayed: ${await autocomplete.isVisible()}`);
    await autocomplete.click();
  });







});