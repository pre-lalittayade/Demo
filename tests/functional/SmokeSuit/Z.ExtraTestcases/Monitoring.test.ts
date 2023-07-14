import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, Monitoring }) => {
    await test.step(`Login to application`, async () => {
        await Monitoring.navigateToURL();
             await Monitoring.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
            //  await Monitoring.LogoutOfApplication();
        await delay(2000);
    });
    
    //CB//
    await test.step('Enter CB page', async () => {
        // if 
        await homePage.NaviagetToMenu(4, "CB");
        await delay(2000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Monitoring.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Monitoring.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });

    });

    //Inverter//
    await test.step('Enter Inverter page', async () => {
        await homePage.NaviagetToMenu(4, "Inverter");
        await delay(2000);
        await test.step('test validation', async () => {
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            const columns: Array<string> = await Monitoring.GetColumns(locator);
            // search
            let i = 0;
            const columnValues: Array<string> = await Monitoring.GetColumnValues(columns, 2);
            columnValues.forEach(value => {
                expect.soft(value).not.toBe("");
            });
        });
    });

    // MFM //
    await test.step('Enter MFM page', async () => {
        await homePage.NaviagetToMenu(4, "MFM");
        await delay(10000);
        await Monitoring.Assertion("Active Power");
        await Monitoring.Assertion("Export Energy");
        await Monitoring.Assertion("Import Energy");
        await Monitoring.Assertion("Frequency");
        await Monitoring.Assertion("Power Factor Average");
        await Monitoring.AssertionMFM();
        await Monitoring.Assertiontiles("2");
        await Monitoring.Assertiontiles("3");
        await Monitoring.Assertiontiles("4");
        await Monitoring.Assertiontiles("5");
        //Not Working
    });

    //WS//
    await test.step('Enter WS page', async () => {
        await homePage.NaviagetToMenu(4, "WS");
        await delay(10000);
        await Monitoring.Assertion("POA Irradiance");
        await Monitoring.Assertion("GH Irradiance");
        await Monitoring.Assertion("Ambient Temperature");
        await Monitoring.Assertion("Module Temperature");
        await Monitoring.Assertion("Wind Speed");
        await Monitoring.AssertionWS("Daily POA Energy");
        await Monitoring.AssertionWS("Daily GHI Energy");
       //Not Working
        
    });
    await Monitoring.LogoutOfApplication();

    

    
});