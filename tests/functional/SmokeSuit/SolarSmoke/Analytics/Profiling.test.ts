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
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Profiling page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Profiling");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(5, "Profiling");
            // await delay(10000);

            await Analytics.selectValeFromDropDown("Project", "Hiraco");
            await Analytics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
            await Analytics.DragAndDropElements("PV Voltage");
            // await delay(5000);
            await Analytics.Refreshbtn();
            // await delay(2000);
            await Analytics.SettingButton1();
            await delay(1000);
            // await Analytics.DisplayChart("View data table");
            // await delay(1000);
            // await Analytics.Assertionprof();
            // await test.step('test validation', async () => {
            //     const locator = '//div[@class="grid-full ng-star-inserted"]//div[@class="highcharts-data-table"]//*[contains(text(),"Chart")]//parent::table//tr[1]/th[@class="text highcharts-table-topheading"]'
            //     const columns: Array<string> = await Analytics.GetHiddenColumns(locator, 25);
            //     const columnValuesprof: Array<string> = await Analytics.GetHiddenColumnValueProfiling(columns);
            //     columnValuesprof.forEach(value => {
            //         expect.soft(value).not.toBe("");
            //     });
            // });
            // // await test.step('test validation', async () => {
            // //     const locator = '//div[@id="chart-heatmap-Profiling_579434879"]//div[@class="highcharts-data-table"]//*[contains(text(),"Chart")]//parent::table//tr[1]/th[@class="text highcharts-table-topheading"]';
            // //     const columns: Array<string> = await Analytics.GetColumns1(locator);
            // //     // search
            // //     let i = 0;
            // //     const columnValues: Array<string> = await Analytics.GetColumnValues1(columns);
            // //     columnValues.forEach(value => {
            // //         expect.soft(value).not.toBe("");
            // //     });
            // // });
            await Analytics.GridViewprof();
            await delay(3000);

            await test.step('test validation', async () => {
                // const locator = '//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
                // const columns: Array<string> = await Analytics.GetHiddenColumns(locator, 23);
                // const columnValues: Array<string> = await Analytics.GetHiddenColumnValueProfiling(columns);
                // columns.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
                await Analytics.Assertion1();
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]


    await Analytics.LogoutOfApplication();
});

