import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Managemet, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    //Users//
    await test.step('Enter Users page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Management", "Users");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(1, "Users");
            await delay(2000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Managemet.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Managemet.GetColumnValues(columns, 1);
                // console.log(columns[1]);
                // console.log(columnValues[1]);
                const validationvalue = columnValues[1];
                expect.soft(validationvalue).not.toBe("");
                console.log(columns[1]," :- ",columnValues[1]);
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await Managemet.LogoutOfApplication();
});
