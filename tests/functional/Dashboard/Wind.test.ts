import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test("Scenario 1 automation", async ({ loginPage, homePage, Wind }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await delay(5000);
    });
    await test.step('Entering On Dashboard', async () => {
        await Wind.Wind_Btn();
        await Wind.ActivePower();
        await Wind.ShortNameMenu();
        await Wind.EnterNameFor_Filter("jaora");
        await Wind.clickOnFirstElement();
        await Wind.TechnicalActivePower();
        // await Wind.ShortNameMenu();
        // await Wind.EnterNameFor_Filter("DJE01");
        await Wind.clickOnElement("DJE01");
        await Wind.TurbineActivePower();
        await Wind.Dropdown("DJE02");
        await Wind.TurbineActivePower();
    });
});