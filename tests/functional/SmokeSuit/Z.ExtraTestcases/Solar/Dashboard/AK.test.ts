import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, Dashboards }) => {
    await test.step(`Login to application`, async () => {
        await Dashboards.navigateToURL("https://cloud.prescinto.ai/v3/login");
        // await delay(2000);
        await Dashboards.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(5000);
    });

    await test.step('Enter AK page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Dashboards", "ak");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(3, "ak");
            await delay(7000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]'
                const columns: Array<string> = await Dashboards.GetHiddenColumns(locator, 375);
                const columnValues: Array<string> = await Dashboards.GetHiddenColumnValues(columns, 2);
                columnValues.forEach(value => {
                    expect.soft(value).not.toBe("");
                });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await Dashboards.LogoutOfApplication();
});


