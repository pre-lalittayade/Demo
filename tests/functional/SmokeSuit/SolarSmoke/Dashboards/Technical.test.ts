import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, Dashboards, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        // await delay(2000);
             await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
            //  await SmokeSolar.LogoutOfApplication();
        await delay(3000);
    });
    
    await test.step('Entering On Dashboard', async () => {

        await Dashboards.ShortNameMenu();
        await Dashboards.EnterNameFor_Filter("Precious");
        await Dashboards.clickOnFirstElement();
        await delay(3000);
    });
    
    await test.step('Enter Technical page', async () => {
        await homePage.NaviagetToMenu("Dashboards", "Technical");
        await delay(2000);
        await Dashboards.Assertion("Active Power");
        await Dashboards.Assertion("POA Irradiance");
        await Dashboards.Assertion("Module Temperature");
        await delay(3000);
        await Dashboards.Assertion("DC CUF");
        await Dashboards.Assertion("AC CUF");
        await Dashboards.TechnicalAssertion();

        // await test.step('test validation', async () => {
        //     const locator1 = '//div//*[@class="highcharts-level-group-1"]//*[@class="highcharts-point"]';
        //     const columns1: Array<string> = await Dashboards.GetColumns1(locator1);
        //     // search
        //     const columnValues1: Array<string> = await Dashboards.GetColumnValues1(columns1);
        //     columnValues1.forEach(value => {
        //         expect.soft(value).not.toBe("");
        //     });
        // });
    });
    await Dashboards.LogoutOfApplication(); 
});