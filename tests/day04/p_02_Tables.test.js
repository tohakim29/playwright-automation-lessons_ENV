import { test, expect } from "@playwright/test";

//create a test group with 3 tests in it
test.describe("Web Tables", async () => {
  let table, rowsNum, columnsNum;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");
    table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    rowsNum = table.locator("//tr");
    columnsNum = table.locator("//th");
  });

  // after reach, pause the automation for 2 seconds
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(1000);
  });




  //******************1 test************************************* */
  test("Verify rows and columns in the web table", async ({ page }) => {
    expect(await rowsNum.count()).toEqual(9); //9 rows
    expect(await columnsNum.count()).toEqual(13);
  });

  //********************2 test*********************************** */
  test("Read all data from the web table", async ({ page }) => {
    // display data from each cell of the table
    let count;
    for (let i = 1; i < (await rowsNum.count()); i++) {    //0-8
       count=i;
       console.log("-------------------------------------"+i+"row data---------");

                for (let j = 1; j < (await columnsNum.count()) - 1; j++) { //0-12
                  const cell = table.locator(`//tr[${i + 1}]/td[${j + 1}]`);    //tr[2]/td[2]
                  console.log(await cell.innerText());
                }
    
      count++;
    }

  //*******************3 test************************************ */
  });

  test("Verify that check boxes of the web table can be checked", async ({ page }) => {
    const checkBoxes = table.locator("//input[@type='checkbox']"); //all checkboxes 8

    // verify that there are 8 check boxes
    expect(await checkBoxes.count()).toEqual(8);

    // use for of loop to access each checkbox
    for (const eachCheckbox of await checkBoxes.all()) {
        await page.waitForTimeout(2000);
        expect(await eachCheckbox.isChecked()).toBeFalsy();  // verify that checkbox is unchekced
        await eachCheckbox.check();
        expect(await eachCheckbox.isChecked()).toBeTruthy(); // verify that checkbox is checked
    }

  });

  //******************************************************* */
});