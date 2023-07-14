import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Reporting, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Daily Performance Report page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Reporting", "Daily Performance Report");
        if (isPagePresent) {
            await delay(15000);
            await test.step('test validation', async () => {

                await Reporting.PPAAssertion();
                await Reporting.DCAssertion();
                await Reporting.AssertionGrid1();
                await Reporting.AssertionGrid2();

                // const locator = '//ag-grid-angular[@id="daily-performance-grid1"]//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                // const columns: Array<string> = await Reporting.GetColumns(locator);
                // // search
                // let i = 0;
                // const columnValues: Array<string> = await Reporting.GetColumnValues(columns, 2);
                // const columnvalue1 = columns[0];
                // const columnvalue2 = columnValues[0];
                // console.log(columnvalue1);
                // console.log(columnvalue2);
                // const validationvalue = columnValues[0];
                // expect.soft(validationvalue).not.toBe("");
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user"); 
            expect(abc).toBe(" ");
        }
    });
    await Reporting.LogoutOfApplication();
});