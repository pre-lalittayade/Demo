import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, WS }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await delay(5000);
    });
   
    await test.step('Entering On Dashboard', async () => {
       
        await WS.ShortNameMenu();
        await WS.EnterNameFor_Filter("CLPX");
        await WS.clickOnFirstElement();
        // await CB.TechnicalActivePower();
    });

    await test.step('Enter data in CMMS - WS', async () => {
        await homePage.NaviagetToMenu(5, "WS");
    });

    await test.step('Entering On Dashboard', async () => {
       
        await WS.BLK03DailyEnergy();
        await WS.BLK08DailyEnergy();
       

        
    });
});