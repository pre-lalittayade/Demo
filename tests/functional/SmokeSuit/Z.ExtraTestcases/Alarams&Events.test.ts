import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time);
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, AlaramEvent }) => {
    await test.step(`Login to application`, async () => {
        await AlaramEvent.navigateToURL();
             await AlaramEvent.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
            //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    
    await test.step('Enter Managements page', async () => {
        // if 
        await homePage.NaviagetToMenu(7, "Custom Alerts");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await AlaramEvent.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 3);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Managements page', async () => {
        await homePage.NaviagetToMenu(7, "Alarms");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await AlaramEvent.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 3);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Managements page', async () => {
        await homePage.NaviagetToMenu(7, "Events");
        await delay(12000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await AlaramEvent.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Managements page', async () => {
        await homePage.NaviagetToMenu(7, "Alarm Management");
        await delay(12000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await AlaramEvent.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await AlaramEvent.LogoutOfApplication();
    
});