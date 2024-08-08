import { test } from '@playwright/test';


test.describe('New test group', async () => {
 

  test.beforeAll(async () => {
    console.log("before all execution");


  });

  test.afterAll(async () => {
    console.log("after all execution");
  
  });


  test.beforeEach(async () => {
    console.log("before each execution");

  });
  test.afterEach(async () => {
    console.log("after each execution");
  });





  test('New test case', async ({ page }) => {

  });


  test('New test case2', async ({ page }) => {

  });

  test('New test case3', async ({ page }) => {

  });





});