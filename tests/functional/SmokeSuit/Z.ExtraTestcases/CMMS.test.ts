import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, CMMS }) => {
    await test.step(`Login to application`, async () => {
        await CMMS.navigateToURL();
        await CMMS.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {

        await CMMS.ShortNameMenu();
        await CMMS.EnterNameFor_Filter("Aquila Power");
        await CMMS.clickOnFirstElement();
        await delay(5000);
    });

    await test.step('Enter Work Order page', async () => {
        await homePage.NaviagetToMenu(8, "Work Order");
        await delay(7000);
        await CMMS.Listviewbtn();
        await CMMS.WOclickOnFirstElement();
        await CMMS.WOclickOnFirstElement1();
        await CMMS.WOAssertion();
    });
    await test.step('Enter Inventory page', async () => {
        await homePage.NaviagetToMenu(8, "Inventory");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS.GetColumns(locator);
            expect.soft(columns).not.toBe("");
        });
    });
    await test.step('Enter PM Scheduler page', async () => {
        await homePage.NaviagetToMenu(8, "PM Scheduler");
        await delay(7000);
        await CMMS.Assertion();
    });
    await test.step('Enter Project Resources page', async () => {
        await homePage.NaviagetToMenu(8, "Project Resources");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    // await test.step('Enter CMMS page', async () => {
    //     await homePage.NaviagetToMenu(8, "User Tracking");
    //     await delay(7000);
    // });
    await test.step('Enter Environment Health Safety page', async () => {
        await homePage.NaviagetToMenu(8, "Environment Health Safety");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS.GetColumnValues(columns, 3);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter EHS Manual Data page', async () => {
        await homePage.NaviagetToMenu(8, "EHS Manual Data");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Module Cleaning Cycle page', async () => {
        await homePage.NaviagetToMenu(8, "Module Cleaning Cycle");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Grass Cutting Cycle page', async () => {
        await homePage.NaviagetToMenu(8, "Grass Cutting Cycle");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Loss Calculation page', async () => {
        await homePage.NaviagetToMenu(8, "Loss Calculation");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@role="presentation"]//div[@role="rowgroup"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
            const columns: Array<string> = await CMMS.GetHiddenColumns(locator, 16);
            const columnValues: Array<string> = await CMMS.GetHiddenColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await CMMS.LogoutOfApplication();

});