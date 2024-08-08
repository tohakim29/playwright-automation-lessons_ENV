// In your Playwright test file, you can create a group called "test" with 3 test cases as follows:

const { test, expect } = require('@playwright/test');

test.describe('Assertions Methods', () => {
  test('toBe method', async ({ page }) => {
        let elementValue = 5;
        expect(elementValue).toBe(5);
  });

  test('toBeTruthy or toBeFalsy', async ({ page }) => {
        let value1 = true;
        expect(value1).toBeTruthy();   //assertTrue
       // expect(value1).toBeFalsy();  //assertFalse
  });

  test('toContain', async ({ page }) => {
        let s = 'Cydeo School';
        expect(s).toContain('Cydeo');
  });

  test('toEqual', async ({ page }) => {
    let s = 'Cydeo';
    expect(s).toEqual('Cydeo');


    let obj1 = { name: 'John', age: 30 };
    let obj2 = { name: 'John', age: 30 };
    //expect(obj1).toBe(obj2);  //error because 2 different objects,
    expect(obj1).toEqual(obj2);  //same value
  

});




});