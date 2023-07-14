import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, Dashboards, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        // await delay(2000);
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(5000);
    });

    await test.step('Enter Personalized page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Dashboards", "Personalize");
        if (isPagePresent) {
            await delay(3000);
            await Dashboards.Dashboard("Smoke-Solar_Automation");
            await Dashboards.SearchButton();

            // gride validation
            await test.step('Test validation', async () => {
                await Dashboards.Assertion("Active Power");
                // await Dashboards.AssertionDailyEnergy("Daily Energy");
                // await Dashboards.AssertionTotalEnergy("Total Energy");
                /*// await Dashboards.AssertionHeatMapGraph();


                // const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                // const columns: Array<string> = await Analytics.GetColumns(locator);
                // // search
                // let i = 0;
                // const columnValues: Array<string> = await Analytics.GetColumnValues(columns, 1);
                // console.log(columns[1]);
                // console.log(columnValues[1]);
                // const validationvalue = columnValues[1];
                // expect.soft(validationvalue).not.toBe("")
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });*/
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    // Rechecking above created dashboard is available
    await delay(7000);
    await test.step('Enter Smoke_Testing-Solar page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Dashboards", "Smoke-Solar_Automation");
        if (isPagePresent) {
            // await delay(3000);
            // await Dashboards.Dashboard("Smoke_Testing-Solar");
            // await Dashboards.SearchButton();

            await test.step('Test validation', async () => {
                await Dashboards.Assertion("Active Power");
                // await Dashboards.AssertionDailyEnergy("Daily Energy");
                // await Dashboards.AssertionTotalEnergy("Total Energy");
                /*// await Dashboards.AssertionHeatMapGraph();

                // const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                // const columns: Array<string> = await Analytics.GetColumns(locator);
                // // search
                // let i = 0;
                // const columnValues: Array<string> = await Analytics.GetColumnValues(columns, 1);
                // console.log(columns[1]);
                // console.log(columnValues[1]);
                // const validationvalue = columnValues[1];
                // expect.soft(validationvalue).not.toBe("")
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });*/
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Dashboards.LogoutOfApplication();
});