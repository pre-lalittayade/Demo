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
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        // await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.CLPX.VELT");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.CLPX.VELT");
    });

    await test.step('Enter Investor Dashboard page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Reporting", "Investor Dashboard");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(6, "Investor Dashboard");
            await delay(55000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Reporting.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Reporting.GetColumnValuesID(columns, 2);
                const columnvalue1 = columns[0];
                const columnvalue2 = columnValues[0];
                // console.log(columnvalue1);
                const validationvalue = columns[0];
                expect.soft(validationvalue).not.toBe("");
                const validationvalue1 = columnValues[0];
                expect.soft(validationvalue1).not.toBe("");
                console.log(columnvalue1, " :- ", columnvalue2);

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

