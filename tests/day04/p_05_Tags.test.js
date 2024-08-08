import { test, expect } from "@playwright/test";




/*

 in command promt terminal
 npx playwright test --grep @smoke
 it will execute only test with @smoke tags 


 or

 writh in the package.json file
 a line
    --
    "test:tag" :"playwright test --grep @smoke"
    --

*/











//create a test group with 3 tests in it
test.describe("Test Group 1", async () => {
  test("Test 1", async ({ page }) => {
    console.log("Test 1 is completed successfully in Group 1");
  });

  test("@smoke Test 2", async ({ page }) => {
    console.log("Test 2 is completed successfully in Group 1");
  });

  test("Test 3", async ({ page }) => {
    console.log("Test 3 is completed successfully in Test Group 1");
  });
});



test.describe("Test Group 2", async () => {
  test("Test 1", async ({ page }) => {
    console.log("Test 1 is completed successfully in Group 2");
  });

  test("Test 2", async ({ page }) => {
    console.log("Test 2 is completed successfully in Group 2");
  });

  test("Test 3", async ({ page }) => {
    console.log("Test 3 is completed successfully in Test Group 2");
  });

  test("Test 4", async ({ page }) => {
    console.log("Test 4 is completed successfully in Test Group 2");
  });

  test("@smoke Test 5", async ({ page }) => {
    console.log("Test 5 is completed successfully in Test Group 2");
  });
});