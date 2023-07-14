import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.DEMO.AQUI");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.DEMO.AQUI");
    });
    await test.step('Enter String Analysis page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "String Analysis");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(5, "Data Governance");
            await delay(3000);
            await Analytics.Project("Acme solar");
            await Analytics.Inverters("Select All");
            await Analytics.ModuleType("Risen Energy Co., Ltd._RSM60-6-260P");
            await Analytics.SelectDateRange_sa("1-Apr-2023", "7-Apr-2023");
            await Analytics.Search_sa();
            //gride validation
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]';
                const columns: Array<string> = await Analytics.GetColumns(locator);
                // console.log(columns);
                // search
                let i = 0;
                // const columnValues: Array<string> = await Analytics.GetColumnValues(columns, 2);
                // console.log(columnValues[1]);
                const validationvalue = columns[2];
                expect.soft(columns[2]).not.toBe("")
                console.log(columns[2]);
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
                await Analytics.AssertionSA();
                await Analytics.AssertionPieChart();
                await Analytics.AssertionXYChart();
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await Analytics.LogoutOfApplication();
});
