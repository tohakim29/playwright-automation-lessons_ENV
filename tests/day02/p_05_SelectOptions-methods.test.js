import { test} from '@playwright/test';


test('selectOptions method test: can be used for dropdowns', async ({ page }) => {
    
    // go to https://practice.cydeo.com/dropdown
        
    await page.goto('https://practice.cydeo.com/dropdown');

    const simpleDropDown = await page.locator("//select[@id='dropdown']");

    await page.waitForTimeout(3000);

    //*********** 3 WAYS TO SELECT OPTIONS */
    // select by value:
    // await simpleDropDown.selectOption("1");

    // select by index:
    //await simpleDropDown.selectOption({index:1});

    // select by visible text:
    await simpleDropDown.selectOption( {label: 'Option 1'} );


    // to get all options from drop down
    const options = await simpleDropDown.evaluate((select) => {
        return Array.from(select.options).map(option => ({
          textN: option.text,
          valueN: option.value
        }));
      });
      
      console.log(options);

  

});