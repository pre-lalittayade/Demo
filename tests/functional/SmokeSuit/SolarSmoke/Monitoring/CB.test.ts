import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Monitoring, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await Monitoring.LogoutOfApplication();
        await delay(2000);
    });

    //CB//
    await test.step('Enter CB page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Monitoring", "CB");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(4, "CB");
            await delay(3000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Monitoring.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Monitoring.GetColumnValues(columns, 2);
                // console.log(columns[0]);
                console.log(columns[0]," :- ",columnValues[0]);
                const validationvalue = columnValues[0];
                expect.soft(validationvalue).not.toBe("");
                console.log(columns[0]," :- ",columnValues[0]);
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });
    await Monitoring.LogoutOfApplication();
});

