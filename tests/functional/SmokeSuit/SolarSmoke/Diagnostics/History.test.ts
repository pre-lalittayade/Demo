import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Diagnostics, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
             await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
            //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    
    await test.step('Enter History page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Diagnostics", "History");
        if(isPagePresent)
        {
        
        // await homePage.NaviagetToMenu(9, "History");
        // await delay(7000);
        await Diagnostics.selectValeFromDropDown("Project", "Hiraco");
        await Diagnostics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
        await Diagnostics.DragAndDropElements("AC Frequency");
        await Diagnostics.Refreshbtn();
        await delay(2000);
        await Diagnostics.AssertionHistory();

        } else{
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }

    });
    

    await Diagnostics.LogoutOfApplication();
});