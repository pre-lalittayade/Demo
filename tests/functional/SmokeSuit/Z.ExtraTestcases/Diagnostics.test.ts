import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, Diagnostics }) => {
    await test.step(`Login to application`, async () => {
        await Diagnostics.navigateToURL();
             await Diagnostics.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
            //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    
    await test.step('Enter History page', async () => {
        // if 
        await homePage.NaviagetToMenu(9, "History");
        await delay(7000);
        await Diagnostics.selectValeFromDropDown("Project", "Hiraco");
        await Diagnostics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
        await Diagnostics.DragAndDropElements("AC Frequency");
        await Diagnostics.Refreshbtn();
        await delay(2000);
        await Diagnostics.Assertion();

    });
    await test.step('Enter Data Correction page', async () => {
        await homePage.NaviagetToMenu(9, "Data Correction");
        await delay(7000);
        await Diagnostics.selectValeFromDropDown("Project", "Hiraco");
        await Diagnostics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
        await Diagnostics.DragAndDropElements("AC Frequency");
        await Diagnostics.RefreshbtnDC();
        await Diagnostics.Close();
        await delay(2000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Diagnostics.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Diagnostics.GetColumnValues(columns, 3);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });

    });
    await Diagnostics.LogoutOfApplication();
});