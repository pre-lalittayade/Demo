import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, MFM }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await delay(5000);
    });
   
    await test.step('Entering On Dashboard', async () => {
       
        await MFM.ShortNameMenu();
        await MFM.EnterNameFor_Filter("CLPX");
        await MFM.clickOnFirstElement();
        // await CB.TechnicalActivePower();
    });

    await test.step('Enter data in CMMS - MFM', async () => {
        await homePage.NaviagetToMenu(5, "MFM");
    });

    await test.step('Entering On Dashboard', async () => {
       
        await MFM.ActivePower();
        await MFM.DailyEnergy();
        await MFM.Dropdown("Feeder-2");
        await MFM.ActivePower();
        await MFM.DailyEnergy();

        
    });
});