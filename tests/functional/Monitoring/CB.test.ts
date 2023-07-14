import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, CB }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await delay(5000);
    });
   
    await test.step('Entering On Dashboard', async () => {
       
        await CB.ShortNameMenu();
        await CB.EnterNameFor_Filter("CLPX");
        await CB.clickOnFirstElement();
        // await CB.TechnicalActivePower();
    });

    await test.step('Enter data in CMMS - Task page', async () => {
        await homePage.NaviagetToMenu(5, "CB");
    });

    await test.step('Entering On Dashboard', async () => {
       
        await CB.clickOnFirstElement();
        await CB.Power();
        await CB.TotalCurrentMax();
        await CB.Dropdown("BLK01-INV01|SMB03");
        await CB.Power();
        await CB.TotalCurrentMax();
        
    });

});