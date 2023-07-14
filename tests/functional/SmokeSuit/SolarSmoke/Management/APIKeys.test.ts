import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Managemet,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter API Keys page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Management", "API Keys");
        if (isPagePresent) {
            await delay(15000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Managemet.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Managemet.GetColumnValues(columns, 1);
                const columnvalue1 = columns[1];
                const columnvalue2 = columnValues[1];
                // console.log(columnvalue1);
                const validationvalue = columnValues[1];
                expect.soft(validationvalue).not.toBe("");
                console.log(columnvalue1," :- ",columnvalue2);
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Managemet.LogoutOfApplication();
});

