import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test("Scenario 1 automation", async ({ loginPage, homePage, Reporting }) => {
    await test.step(`Login to application`, async () => {
        await Reporting.navigateToURL();
             await Reporting.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
            //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    
    await test.step('Enter Investor Dashboard page', async () => {
        // if 
        await homePage.NaviagetToMenu(6, "Investor Dashboard");
        await delay(15000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Reporting.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Reporting.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });

    });
    await test.step('Enter Report Viewe page', async () => {
        await homePage.NaviagetToMenu(6, "Report Viewer");
        await delay(7000);
        await Reporting.Assertion();
    });
    await test.step('Enter Report Designer page', async () => {
        await homePage.NaviagetToMenu(6, "Report Designer");
        await delay(7000);
        await Reporting.Assertion();
    });
    await Reporting.LogoutOfApplication();

    
});