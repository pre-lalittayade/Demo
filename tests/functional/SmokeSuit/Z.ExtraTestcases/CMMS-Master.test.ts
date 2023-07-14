import test from '@lib/BaseTest';
import { expect } from '@playwright/test';


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, CMMS_Master }) => {
    await test.step(`Login to application`, async () => {
        await CMMS_Master.navigateToURL();
        await CMMS_Master.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    //Activities//
    await test.step('Enter Activities page', async () => {
        await homePage.NaviagetToMenu(2, "Activities");
        const responseTime = await CMMS_Master.GetPageResponseTime();
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS_Master.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    //Asset Master//
    await test.step('Enter Asset Master page', async () => {
        await homePage.NaviagetToMenu(2, "Asset Master");
        // const responseTime = await CMMS_Master.GetPageResponseTime();
        await delay(10000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS_Master.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 4);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    //Anomaly//
    await test.step('Enter Anomaly page', async () => {
        await homePage.NaviagetToMenu(2, "Anomaly");
        const responseTime = await CMMS_Master.GetPageResponseTime();
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS_Master.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    //Resources//
    await test.step('Enter Resources page', async () => {
        await homePage.NaviagetToMenu(2, "Resources");
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS_Master.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    //Vendors//********************************Not Working / now working fine*******************************//
    await test.step('Enter Vendors page', async () => {
        await homePage.NaviagetToMenu(2, "Vendors");
        await delay(5000);
        await CMMS_Master.Assertion();
    });

    //Task//
    await test.step('Enter Task page', async () => {
        await homePage.NaviagetToMenu(2, "Task");
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS_Master.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    //Warehouses//
    await test.step('Enter Warehouses page', async () => {
        await homePage.NaviagetToMenu(2, "Warehouses");
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS_Master.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    //Plant Generation Forecast//
    await test.step('Enter Plant Generation Forecast page', async () => {
        await homePage.NaviagetToMenu(2, "Plant Generation Forecast");
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]'
            const columns: Array<string> = await CMMS_Master.GetHiddenColumns(locator, 53);
            const columnValues: Array<string> = await CMMS_Master.GetHiddenColumnValues(columns, 3);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    //People//
    await test.step('Enter People page', async () => {
        await homePage.NaviagetToMenu(2, "People");
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@class="search-sidebar"]//*//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]';
            const columns: Array<string> = await CMMS_Master.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    //Crew//
    await test.step('Enter Crew page', async () => {
        await homePage.NaviagetToMenu(2, "Crew");
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await CMMS_Master.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await CMMS_Master.LogoutOfApplication();


});