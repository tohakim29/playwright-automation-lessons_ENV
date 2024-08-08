const { test, expect } = require('@playwright/test');



test.describe('My First Test', () => {



    test.beforeEach(async ({ page }) => {
       await page.goto('https://practice.cydeo.com/');
    });
   
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(2000);
    });

 


    /////////////////////left click///////////*****1****** */
  test('left Click Mouse', async ({ page }) => {
    //playwright has autoscrolling so, you dont need to scrool down

    await page.click("//a[@href='/inputs']");
    expect(await page.url()).toBe('https://practice.cydeo.com/inputs');
    expect(await page.title()).toBe('Inputs');

  });
  
    ///////////////////right click/////////////******2***** */
    test('Right click Mouse', async ({ page }) => {
        //playwright has autoscrolling so, you dont need to scrool down
    
        await page.click("//a[@href='/inputs']", {button: 'right'});
       
    
      });
    ///////////////////////double click/////////*****3****** */
  test('3 Double Click', async ({ page }) => {
    await page.dblclick('text="A/B Testing"');
    expect(await page.url()).toBe("https://practice.cydeo.com/abtest");

  });


      ///////////////////double click/////////////*****4****** */
      test('4 Double Click', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
        await page.locator('//button[text()="Add Element"]').dblclick();
        await expect(page.locator("//button[contains(text(),'Delete')]")).toHaveCount(2);
    
      });


         ///////////////hover/////////////////*****5****** */
         test('5 Hover over', async ({ page }) => {
           await page.click("text='Hovers'");
           await page.hover("//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']");  //one hover
            expect(await page.locator("text='name: user1'")).toBeVisible();
            expect(await page.locator("text='name: user1'").innerText()).toBe("name: user1");

         
        
          });
    
    ///////////////hover/////////////////*****5****** */
    test('6 Hover multiple over', async ({ page }) => {
        await page.click("text='Hovers'");
       


        const elements = await page.locator("//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']");

        let counter;
        for (const eachElement of await elements.all()) {
            counter = 1;

           //wait for 1 second before hovering to avoid element being hidden by another hover effect
          await eachElement.hover();
          expect(await page.locator("text='name: user1'").innerText()).toBe(`name: user${counter}`);
          counter++;
        }


        //or
    
        for(let i=0; i<elements.length; i++) {
            await elements.nth(i).hover();
            await expect(invisibleElements.nth(i)).toBeVisible();

        }
     
       });



         ///////////////drag and drop/////////////////*****5****** */
         test('7 Drag and drop', async ({ page }) => {
            await page.click('text="Drag and Drop"');
            const source_element = page.locator("//div[@id='column-a']");             
            const target_element = page.locator("//div[@id='column-b']");
            
            await page.waitForTimeout(500);
            await source_element.dragTo(target_element);

            const dragableElements = page.locator("//div[@class='column' and @draggable='true']");
            let texts =['B', 'A'];

            for(let i=0; i< await dragableElements.count();  i++){
                const text = await dragableElements.nth(i).innerText();
              console.log(text);
              expect(text).toBe(texts[i]); //expect(A).tobe(A)
            }

            //or
            //await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");


        });



         ///////////////drag and drop/////////////////*****5****** */
         test('8 scroll down or up', async ({ page }) => {
           
            await page.mouse.wheel(0,300);

        });

        ///////////////drag and drop/////////////////*****5****** */
        test('9 scroll down or up', async ({ page }) => {
           
            //await page.mouse.wheel(0,300);
            //or

            const inputLInk = page.locator("text='Inputs'");
            await inputLInk.scrollIntoViewIfNeeded();

        });



});