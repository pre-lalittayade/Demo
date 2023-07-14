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
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Menu page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Management", "Menu");
        if (isPagePresent) {
            await delay(15000);
            await test.step('test validation', async () => {
                // const locator = '//div[@role="presentation"]//div[@role="rowgroup"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
                // const columns: Array<string> = await Managemet.GetHiddenColumns(locator, 14);
                // const columnValues: Array<string> = await Managemet.GetHiddenColumnValues(columns, 2);
                // console.log(columns);
                // console.log(columnValues[1]);
                // const validationvalue = columnValues[1];
                // expect.soft(validationvalue).not.toBe("")
                // columns.forEach(value => {
                // expect.soft(columns).not.toBe("");
                await Managemet.Assertion();
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Managemet.LogoutOfApplication();
});

