import test from '@lib/BaseTest';
import { expect } from '@playwright/test';



function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, Managemet }) => {
    await test.step(`Login to application`, async () => {
        await Managemet.navigateToURL();
        await Managemet.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Projects page', async () => {
        // if 
        //Projects//
        await homePage.NaviagetToMenu(1, "Projects");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Managemet.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Managemet.GetColumnValues(columns, 3);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe(' ');
            });
        });
    });

    //Roles//
    await test.step('Enter Roles page', async () => {
        await homePage.NaviagetToMenu(1, "Roles");
        await delay(2000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Managemet.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Managemet.GetColumnValues(columns, 1);
            // expect (columns).toEqual(testData.env_module_page_columns);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe(' ');
            });
        });
    });

    //Users//
    await test.step('Enter Users page', async () => {
        await homePage.NaviagetToMenu(1, "Users");
        await delay(2000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Managemet.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Managemet.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await Managemet.LogoutOfApplication();
});