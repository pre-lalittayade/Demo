import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, Solar }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await delay(5000);
    });
    await test.step('Entering On Dashboard', async () => {
       
        await Solar.SolarPR();
        await Solar.ShortNameMenu();
        await Solar.EnterNameFor_Filter("prec");
        // await Solar.ValidationOfValues("Kankrej","CapacityValue")
        await Solar.clickOnFirstElement();
        await Solar.TechnicalActivePower();
    });

});