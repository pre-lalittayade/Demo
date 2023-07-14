import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
// Validation is not working
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Plant Power Forecast page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Plant Power Forecast");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(5, "Data Governance");
            await delay(3000);
            await Analytics.Project_PPF("ABC RENEWABLE (RJ01) PRIVATE LIMITED");
            // await Analytics.Inverters("Select All");
            // await Analytics.ModuleType("Risen Energy Co., Ltd._RSM60-6-260P");
            await Analytics.SelectDateRange("1-Mar-2023", "19-Mar-2023");
            await Analytics.Search_ppf();
            await delay(7000);
            //gride validation
            await test.step('test validation', async () => {
                console.log("Potential Penaity");
                await Analytics.Assertion_ppf();
            //     const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]';
            //     const columns: Array<string> = await Analytics.GetColumns(locator);
            //     console.log(columns);
            //     // search
            //     let i = 0;
            //     // const columnValues: Array<string> = await Analytics.GetColumnValues(columns, 2);
            //     console.log(columns[2]);
            //     // console.log(columnValues[1]);
            //     const validationvalue = columns[2];
            //     expect.soft(columns[2]).not.toBe("")
            //     // columnValues.forEach(value => {
            //     //     expect.soft(value).not.toBe("");
            //     // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await Analytics.LogoutOfApplication();
});
