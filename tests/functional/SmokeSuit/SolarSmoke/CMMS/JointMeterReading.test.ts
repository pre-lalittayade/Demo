import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
            // VALIDATION IS PENDING 
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS, SmokeCommonMethods}) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.PRES.DEMO");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.PRES.DEMO");
    });

    await test.step('Enter Scheduler page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "Joint Meter Reading");
        if (isPagePresent) {
            await delay(15000);
            await test.step('test validation', async () => {
                // const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]'
                // const columns: Array<string> = await CMMS.GetHiddenColumnsJMR(locator, 20);
                // // const columnValues: Array<string> = await CMMS.GetHiddenColumnValues(columns,1);
                // console.log(columns);
                // // console.log(columnValues);
                // columns.forEach(value => {
                //     expect.soft(columns).not.toBe("");
                // });
                await CMMS.Assertion1();
            });
            // await test.step('test validation', async () => {
            //     const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            //     const columns: Array<string> = await Reporting.GetColumns(locator);
            //     // search
            //     let i = 0;
            //     const columnValues: Array<string> = await Reporting.GetColumnValues(columns, 2);
            //     const columnvalue1 = columns[0];
            //     const columnvalue2 = columnValues[0];
            //     console.log(columnvalue1);
            //     console.log(columnvalue2);
            //     const validationvalue = columnValues[0];
            //     expect.soft(validationvalue).not.toBe("");
            //     // columnValues.forEach(value => {
            //     //     expect.soft(value).not.toBe("");
            //     // });
            // });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });
    await CMMS.LogoutOfApplication();
});

