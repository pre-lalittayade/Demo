import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, AlaramEvent, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Custom Alert page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Alarms & Events", "Custom Alerts");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(7, "Custom Alerts");
            await delay(7000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await AlaramEvent.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 3);
                // console.log(columns[0]);
                // console.log(columnValues[0]);
                const validationvalue = columnValues[0];
                expect.soft(validationvalue).not.toBe("")
                console.log(columns[0]," :- ",columnValues[0]);
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });
    await AlaramEvent.LogoutOfApplication();

});

