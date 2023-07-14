import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, Dashboards }) => {
    await test.step(`Login to application`, async () => {
        await Dashboards.navigateToURL();
        // await delay(2000);
             await Dashboards.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
            //  await SmokeSolar.LogoutOfApplication();
        await delay(5000);
    });
    
    
    await test.step('Enter Technical page', async () => {
        await homePage.NaviagetToMenu(3, "Technical");
        await delay(7000);
        await Dashboards.Assertion("Active Power");
        await Dashboards.Assertion("POA Irradiance");
        await Dashboards.Assertion("Module Temperature");
        await Dashboards.Assertion("DC CUF");
        await Dashboards.Assertion("AC CUF");
        await Dashboards.TechnicalAssertion();

        // await test.step('test validation', async () => {
        //     const locator1 = '//div//*[@class="highcharts-level-group-1"]//*[@class="highcharts-point"]';
        //     const columns1: Array<string> = await Dashboards.GetColumns1(locator1);
        //     // search
        //     const columnValues1: Array<string> = await Dashboards.GetColumnValues1(columns1);
        //     columnValues1.forEach(value => {
        //         expect.soft(value).not.toBe("");
        //     });
        // });
    });
    await test.step('Enter Personalize page', async () => {
        await homePage.NaviagetToMenu(3, "Personalize");
        await delay(5000);
    });
    await test.step('Enter Dashboard page', async () => {
        await homePage.NaviagetToMenu(3, "ak");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]'
            const columns: Array<string> = await Dashboards.GetHiddenColumns(locator, 375);
            const columnValues: Array<string> = await Dashboards.GetHiddenColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    // await test.step('Enter CMMS Masters page', async () => {
    //     await homePage.NaviagetToMenu(3, "test");
    //     await delay(5000);
    // });
    await test.step('Enter landing page page', async () => {
        await homePage.NaviagetToMenu(3, "landing page");
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Dashboards.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Dashboards.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Stride_Landing Page page', async () => {
        await homePage.NaviagetToMenu(3, "Stride_Landing Page");
        await delay(5000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Dashboards.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Dashboards.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Test - Overview page', async () => {
        await homePage.NaviagetToMenu(3, "Test - Overview");
        await delay(10000);
        await Dashboards.Assertion("Active Power");
        await Dashboards.Assertion("POA Irradiance");
        await Dashboards.Assertion("Total Energy");
        await Dashboards.Assertion("Daily Energy");
        await Dashboards.Assertion("CUF");
        await Dashboards.TestOverviewAssertion();
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Dashboards.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Dashboards.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });
    await test.step('Enter Punjab Cluster page', async () => {
        await homePage.NaviagetToMenu(3, "Punjab Cluster");
        await delay(10000);
        await Dashboards.TestPanjabCluster();
        await Dashboards.Assertion("1A Specific Power");
        await Dashboards.Assertion("1B AC Power");
        await Dashboards.Assertion("2A AC Power");
        await Dashboards.Assertion("Active Power");
    });
    await test.step('Enter testing page', async () => {
        await homePage.NaviagetToMenu(3, "testing");
        await delay(7000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Dashboards.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Dashboards.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    // await test.step('Enter Dashboards page', async () => {
    //     await homePage.NaviagetToMenu(3, "Stride_Punjab_cluster");
    //     await delay(2000);
    // });
    // await test.step('Enter Dashboard page', async () => {
    //     // if 
    //     await homePage.NaviagetToMenu(3, "Stride_Telengana_Cluster");
    //     await delay(2000);
    // });
    // await test.step('Enter Dashboards page', async () => {
    //     await homePage.NaviagetToMenu(3, "Stride_Tamilnadu_cluster");
    //     await delay(2000);
    // });
    // await test.step('Enter Dashboards page', async () => {
    //     await homePage.NaviagetToMenu(3, "Stride_MP_Cluster");
    //     await delay(2000);
    // });
    // await test.step('Enter Dashboards page', async () => {
    //     await homePage.NaviagetToMenu(3, "Stride_WB_cluster");
    //     await delay(2000);
    // });
    // await test.step('Enter Dashboards page', async () => {
    //     await homePage.NaviagetToMenu(3, "Stride_Orrissa_cluster");
    //     await delay(2000);
    // });
    // await test.step('Enter Dashboards page', async () => {
    //     await homePage.NaviagetToMenu(3, "Stride_Gujarat_D_cluster");
    //     await delay(2000);
    // });
    // await test.step('Enter Dashboards page', async () => {
    //     await homePage.NaviagetToMenu(3, "Stride_Gujarat_S_Cluster");
    //     await delay(2000);
    // });
    // await test.step('Enter Dashboards page', async () => {
    //     await homePage.NaviagetToMenu(3, "Stride_Gujarat_K_Cluster");
    //     await delay(2000);
    // });
    await Dashboards.LogoutOfApplication();
    
});