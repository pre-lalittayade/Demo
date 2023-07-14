import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
// NOT WORKING DUE TO SOME PROBLEM IN REC> ENGINE PAGE IN WIND IT IS CONTINUOUSLY LOADING FOR TURBINE.
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.Wind_Btn();
        await Analytics.ShortNameMenu();
        await Analytics.EnterNameFor_Filter("Sequence");
        await Analytics.clickOnFirstElement();
        await delay(1000);
    });

    await test.step('Enter Recommendation Engine Page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Recommendation Engine");
        if (isPagePresent) {
            await delay(1000);
            await test.step('Recommendation Engine Test validation for Plant', async () => {
                console.log("-------------PLANT-------------");
                console.log("");
                await Analytics.AssertionLossCalculation("Loss Distribution");
                await Analytics.AssertionLossCalculation("Controllable");
                await Analytics.AssertionLossCalculation("Partially Controllable");
                await Analytics.AssertionDA("Data Availability");
                await Analytics.AssertionDQ("Data Quality");

                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Analytics.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Analytics.GetColumnValuesRE(columns, 1);
                // console.log(columns[1]);
                expect.soft(columns[1]).not.toBe("");
                expect.soft(columnValues[1]).not.toBe("");
                console.log(columns[1]," :- ",columnValues[1]);
                console.log("");
            });
            await Analytics.PlantInverterWMSButton("Turbine");
            await test.step('Recommendation Engine Test validation for Turbine', async () => {
                console.log("-------------TURBINE-------------");
                console.log("");
                await Analytics.AssertionLossCalculation("Loss Distribution");
                await Analytics.AssertionLossCalculation("Controllable");
                await Analytics.AssertionLossCalculation("Partially Controllable");
                await Analytics.AssertionDA("Data Availability");
                await Analytics.AssertionDQ("Data Quality");

                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Analytics.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Analytics.GetColumnValuesRE(columns, 1);
                // console.log(columns[1]);
                expect.soft(columns[1]).not.toBe("");
                // console.log(columnValues[1]);
                expect.soft(columnValues[1]).not.toBe("");
                console.log(columns[1]," :- ",columnValues[1]);
                console.log("");
            });
            // await Analytics.PlantInverterWMSButton("WMS");
            // await test.step('Recommendation Engine Test validation for WMS', async () => {
            //     console.log("-------------WMS-------------");
            //     console.log("");
            //     await Analytics.AssertionLossCalculation("Loss Distribution");
            //     await Analytics.AssertionLossCalculation("Controllable");
            //     await Analytics.AssertionLossCalculation("Partially Controllable");
            //     await Analytics.AssertionDA("Data Availability");
            //     await Analytics.AssertionDQ("Data Quality");

            //     const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            //     const columns: Array<string> = await Analytics.GetColumns(locator);
            //     // search
            //     let i = 0;
            //     const columnValues: Array<string> = await Analytics.GetColumnValuesRE(columns, 1);
            //     // console.log(columns[1]);
            //     expect.soft(columns[1]).not.toBe("");
            //     // console.log(columnValues[1]);
            //     expect.soft(columnValues[1]).not.toBe("");
            //     console.log(columns[1]," :- ",columnValues[1]);
            //     console.log("");
            // });
            await Analytics.PlantInverterWMSButton("Plant");
            await Analytics.TahoeV2Button("Plant Performance");
            await homePage.NaviagetToMenu("Analytics", "Recommendation Engine");
            await Analytics.DataGovernanceButton(" Baikal Wind");


        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await Analytics.LogoutOfApplication();
});
