const { test, expect } = require('@playwright/test');

test.describe('Assertion in UI Testing', async () => {

    test.beforeEach(async (  {page}) => { 
   

      await page.goto('https://practice.cydeo.com/');

      await page.waitForTimeout(2000);
    
})

  test('Verify the page tigle is "Practice"', async ({ page }) => {
    const pageTitle = await page.title();
    await expect(pageTitle).toBe('Practice');
  });

  test('Verify the test "Automation" in included the header element', async ({ page }) => {
      const headerOfPage =  page.locator('h1');
      const headerText = await headerOfPage.textContent();
      expect(headerText).toContain('Automation');
      
  });

  test('Verify the element "A/B Testing" is clickable', async ({ page }) => {
      const abTestingElement =  page.locator("//a[@href='/abtest']");
      expect(await abTestingElement.isEnabled()).toBeTruthy();
      //or
      await expect(abTestingElement).toBeEnabled();
  });

  test('Verify the element "Autocomplete" href is "/autocomplete"', async ({ page }) => {
   const autocompleteLink = page.locator("//a[@href='/autocomplete']");
   const href = await autocompleteLink.getAttribute('href');
   expect(href).toBe('/autocomplete');
   await expect(autocompleteLink).toHaveAttribute("href", "/autocomplete");
  });


});