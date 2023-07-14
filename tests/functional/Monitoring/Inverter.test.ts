import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test("Scenario 1 automation", async ({ loginPage, homePage, Inverter }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await delay(5000);
    });
   
    await test.step('Entering On Dashboard', async () => {
       
        await Inverter.ShortNameMenu();
        await Inverter.EnterNameFor_Filter("CLPX");
        await Inverter.clickOnFirstElement();
        // await CB.TechnicalActivePower();
    });

    await test.step('Enter data in CMMS - Task page', async () => {
        await homePage.NaviagetToMenu(5, "Inverter");
    });

    await test.step('Entering On Dashboard', async () => {
       
        await Inverter.clickOnFirstElement();
        await Inverter.Power();
        await Inverter.DailyEnergy();
        await Inverter.Dropdown("BLK01-INV03");
        await Inverter.Power();
        await Inverter.DailyEnergy();
        
    });

});