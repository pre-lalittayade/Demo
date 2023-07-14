import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Configuration, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Hierarchical Structures page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Configuration", "Hierarchical Structure");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(5, "MTTR");
            await delay(7000);
            await test.step('test validation', async () => {
                await test.step('test validation', async () => {
                    const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                    const columns: Array<string> = await Configuration.GetColumns(locator);
                    // console.log(columns);
                    // search
                    let i = 0;
                    // const columnValues: Array<string> = await Configuration.GetColumnValues(columns, 3);
                    
                    // columnValues.forEach(value => {
                        expect.soft(columns[0]).not.toBe("");
                    // });
                    console.log(columns[0]);
                    await Configuration.Assertion_columnvalue();
                });;
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await Configuration.LogoutOfApplication();
});
