import { test, expect } from "@playwright/test";
import exp from "constants";
import path from 'path';


//create a test group with 3 tests in it
test.describe("File Upload", async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
     });
    
     test.afterEach(async ({ page }) => {
        
     });



     //****************** */
  test("File Upload Test", async ({ page }) => {
    await page.click("text='File Upload'");
    expect(page.url()).toBe("https://practice.cydeo.com/upload");

       //file path PLEASE import "path" above        
       const filePath = path.join(__dirname, "UploadedFiles", "thisFileToUpload.txt" );
       await page.setInputFiles("//input[@id='file-upload' and @type='file']",filePath);           
       await page.waitForTimeout(2000);
       
       //click to submit /upload
       await page.click("//input[@id='file-submit' and @type='submit']");
       
       //wait for 2 seconds for the file to upload and process
       
       await expect( page.locator("//h3[text()='File Uploaded!']")).toBeVisible();
  
  
      });
  

 
      test("2 File Download Test", async ({ page }) => {
         // setting listner for download event
         const downloadPromise = page.waitForEvent("download"); // promise is created: pending promise     
         await page.click("text='File Download'");      
         expect(page.url()).toBe("https://practice.cydeo.com/download");  //verify url
     
         page.click("//a[@href='download/Sesson3.txt']"); // click the file to download     
         const download = await downloadPromise; // promise is either full filled or rejeected     
         expect(download.suggestedFilename()).toBe("Sesson3.txt");
         await page.waitForTimeout(6000);
       });


       test("Save the file that's downloaded", async ({ page }) => {

         const downloadPromise = page.waitForEvent("download"); // promise is created: pending promise     
         await page.click("text='File Download'");
     
        
     
         page.click("//a[@href='download/Sesson3.txt']"); // click the file to download     
         const download = await downloadPromise; // promise is either full filled or rejeected     
         expect(download.suggestedFilename()).toBe("Sesson3.txt");
     
     
         //   save the  downloaded file: //DOWNLOAD FOLDER IS IN THIS PROJECT,
         const downloadPath= path.join(__dirname, "download", download.suggestedFilename() ); //download folder in this project
         await download.saveAs(downloadPath);
         await page.waitForTimeout(6000);
     
       });
});