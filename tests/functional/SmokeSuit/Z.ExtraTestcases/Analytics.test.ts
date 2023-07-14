import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test("Scenario 1 automation", async ({ loginPage, homePage, Analytics }) => {
    await test.step(`Login to application`, async () => {
        await Analytics.navigateToURL();
             await Analytics.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
            //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    
    await test.step('Enter Analytics page', async () => {
        // if 
        await homePage.NaviagetToMenu(5, "Trends");
        await delay(5000);
        await Analytics.selectValeFromDropDown("Project", "Hiraco");
        // await Analytics.SelectAlarmButton("Custom");
        // await Analytics.SelectDateRange("7-Sep-2022", "7-Sep-2022");
        await Analytics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
        await Analytics.DragAndDropElements("AC Frequency");
        await Analytics.DragAndDropElements("PV Voltage");
        await Analytics.DragAndDropElements("AC Voltage V23");
        await Analytics.DragAndDropElements("AC Voltage V31");
        await Analytics.DragAndDropElements("Active Power");
        await Analytics.DragAndDropElements("Apparent Power");
        await Analytics.DisplayChart("View data table");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@class="highcharts-data-table"]//thead//tr//th[@class="text"]';
            const columns: Array<string> = await Analytics.GetColumns1(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Analytics.GetColumnValues1(columns);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });

    });
    // TimeLaps
    await test.step('Enter Analytics page', async () => {
        await homePage.NaviagetToMenu(5, "Time Lapse");
        await delay(7000);
        
        await Analytics.selectValeFromDropDown("Project", "Hiraco");
        await Analytics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
        await Analytics.DragAndDropElements("AC Frequency");
        await Analytics.SettingButton();
        await delay(5000);
        await Analytics.DisplayChart("View data table");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@class="highcharts-data-table"]//thead//tr//th[@class="text"]';
            const columns: Array<string> = await Analytics.GetColumns1(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Analytics.GetColumnValues1(columns);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
        await Analytics.GridView();
        await delay(1000);
        
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]'
            const columns: Array<string> = await Analytics.GetHiddenColumns(locator, 16);
            const columnValues: Array<string> = await Analytics.GetHiddenColumnValues(columns,3);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    // Profiling
    await test.step('Enter Analytics page', async () => {
        await homePage.NaviagetToMenu(5, "Profiling");
        await delay(10000);
        
        await Analytics.selectValeFromDropDown("Project", "Hiraco");
        await Analytics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
        await Analytics.DragAndDropElements("PV Voltage");
        await delay(5000);
        await Analytics.Refreshbtn();
        await delay(2000);
        await Analytics.SettingButton1();
        await delay(1000);
        await Analytics.DisplayChart("View data table");
        await delay(1000);
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
            const locator = '//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
            const columns: Array<string> = await Analytics.GetHiddenColumns(locator, 23);
            const columnValues: Array<string> = await Analytics.GetHiddenColumnValueProfiling(columns);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]

     // MTTR MTBF Summary
     await test.step('Enter Analytics page', async () => {
        await homePage.NaviagetToMenu(5, "MTTR MTBF Summary");
        await delay(2000);
        // await test.step('test validation', async () => {
        //     const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
        //     const columns: Array<string> = await Analytics.GetColumns(locator);
        //     // search
        //     let i = 0;
        //     const columnValues: Array<string> = await Analytics.GetColumnValues(columns, 1);
        //     columnValues.forEach(value => {
        //         expect.soft(value).not.toBe("");
        //     });
        // });
    });

    // Tahoe
    await test.step('Enter Analytics page', async () => {
        await homePage.NaviagetToMenu(5, "Tahoe");
        await delay(2000);
    });

    // Data Governance
    await test.step('Enter Analytics page', async () => {
        await homePage.NaviagetToMenu(5, "Data Governance");
        await delay(10000);
        await Analytics.Assertion("Plant");
        await Analytics.Assertion("Inverter");
        await Analytics.Assertion("WMS");
        //gride validation
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Analytics.GetColumns(locator);0
            // search
            let i = 0;
            const columnValues: Array<string> = await Analytics.GetColumnValues(columns, 1);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });

    });
    await Analytics.LogoutOfApplication();

    
});