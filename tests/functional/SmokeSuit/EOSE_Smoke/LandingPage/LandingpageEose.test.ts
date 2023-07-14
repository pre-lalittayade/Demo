import test from '@lib/BaseTest';
import { testData } from '../../../../resources/Smoke/LandingPage/LandingpageData';
import { testConfig } from '../../../../../testConfig';
import { LandingPage } from '@pages/SmokeSuit/SolarSmoke/LandingPage_Page';
import { expect } from '@playwright/test';


//import * as data from "../testData/AvailabilityData";
//import * as data1 from "../test_data/jaora.json";
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
let lstdate1: string;
let powrrtng: string;
let rvalue: number;
test("@Smoke EOSE Landing Page automation", async ({ loginPage, homePage, landingpage, SmokeCommonMethods }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        await delay(5000);
    });

    console.log("");
    console.log("     *** LANDING PAGE VALIDATION'S ****");
    console.log("");
    await test.step('Validation of Tiles', async () => {
        await landingpage.ClickOnEOSEButton();
        // await delay(2000);
        await landingpage.projectTile();
        await landingpage.CapacityTile();
        await landingpage.SocTile();
        await landingpage.PowerratingTile();
        await landingpage.EnergyRatingTile();
        await landingpage.TotalPowerTile();
    });
    await test.step('Validation of Table', async () => {

        console.log("Devicestatustable");
        await landingpage.CheckDeviceStatusEOSE();
        const locator = `//div[@class="ag-header-viewport"]//div[@role="columnheader"]`;
        //'//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
        const columns: Array<string> = await landingpage.GetHiddenColumnsLandingEose(locator, 14, 2);
        await landingpage.ScrollToLeftLanding();
        // console.log("column",columns);
        const columnValues: Array<string> = await landingpage.GetHiddenColumnValuesLandingEose(columns, 2);
        // console.log("column", columns);
        // console.log("column values", columnValues);
        rvalue = await landingpage.CheckPlantIsCommunicating(columnValues[1]);
        let lstdate = (columnValues[1]).split(" ");
        lstdate1 = lstdate[1].substring(0, 5);
        // console.log(lstdate1);
        powrrtng = columnValues[7];
        // console.log("return value:", rvalue);
        for (let c = 0; c <(columnValues.length); c++) {
            if (c == 3 || c == 6) {
                c = c + 1;
            }
            if (c == 7) {
                c = c + 1;
            }
            console.log(columns[c], ":", columnValues[c]);
            expect.soft(columnValues[c]).not.toBe(" ");
            //    else{
            //    expect.soft(parseFloat(columnValues[c])).toBeGreaterThanOrEqual(0);
            //    }
        }
        await delay(3000);
        // await landingpage.ValueofEnabledBlocks();
        // await landingpage.ValueofConnectedBlocks();
        await landingpage.ValuesOfWarningAlarmFault();
    });
    await landingpage.ClickonFirstplant();
    console.log("");
    console.log("     *** HISTORY PAGE VALIDATION'S ****");
    console.log("");

    await test.step('Check data in History page', async () => {
        await delay(2000);
       
            await homePage.NaviagetToMenu("Diagnostics", "History");
            await landingpage.NavigateToMenuTree1();
            await landingpage.DragAndDropElements(testData.eose[0].HistoryDragandDrop);
            await landingpage.ClickonSearchButton();
            await landingpage.checkDatainHistoryPage(rvalue,lstdate1, powrrtng);
            await landingpage.GotoLandingPage();
        
        
    });





    // console.log("Devicestatus");
    /*     await landingpage.CheckDeviceStatusEOSE();
         const locator = `//div[@class="ag-header-viewport"]//div[@role="columnheader"]`;
         //'//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
         const columns: Array<string> = await landingpage.GetHiddenColumnsLandingEose(locator, 15, 3);
         await landingpage.ScrollToLeftLanding();
         // console.log("column", columns);
         const columnValues: Array<string> = await landingpage.GetHiddenColumnValuesLandingEose(columns, 3);
         console.log("column", columns);
         console.log("column values", columnValues);
         await landingpage.CheckPlantIsCommunicating(columnValues[0]);
         await delay(2000);
         let lstdate = (columnValues[0]).split(" ");
         lstdate1 = lstdate[1].substring(0, 5);
         // console.log(lstdate1);
         powrrtng = columnValues[8];
         console.log("Value to be check in History Page:", powrrtng);
 
         // for (let c = 0; c < (columnValues.length) - 3; c++) {
 
         //     // if (c <= 5) {
         //     expect.soft(columnValues[c]).not.toBeNull();
         //     // }
         //     // else {
         //     //     expect.soft(parseFloat(columnValues[c])).toBeGreaterThanOrEqual(0);
         //     // }
 
 
         for (let c = 0; c < (columnValues.length); c++) {
 
             if (!(c==2||c == 4 || c == 5 || c == 6 || c == 7 )) {
 
                 console.log(columns[c], ":", columnValues[c]);
                 expect.soft(columnValues[c]).not.toBe(" ");
             }
         }
         await delay(1000);
         await landingpage.ValueofEnabledBlocks();
         await landingpage.ValueofConnectedBlocks();
         await landingpage.ValuesOfWarningAlarmFault();
 
     });
 
     await landingpage.ClickonFirstplant();
     console.log("");
     console.log("     *** HISTORY PAGE VALIDATION'S ****");
     console.log("");
 
     await test.step('Check data in History page', async () => {
 
         await homePage.NaviagetToMenu("Diagnostics", "History");
         await landingpage.NavigateToMenuTree1();
         await landingpage.DragAndDropElements(testData.eose[0].HistoryDragandDrop);
         await landingpage.ClickonSearchButton();
         await landingpage.checkDatainHistoryPage(lstdate1, powrrtng);
         await landingpage.GotoLandingPage();
 
      });
 */
    await test.step('Go to map view', async () => {
        console.log("Map view Details");
        await landingpage.findGRPlant(testData.eose[0].Plantlocation);
        await landingpage.FindthelocationButton(testData.eose[0].PlantName);
        await landingpage.CheckEosefarmname(testData.eose[0].MapViewlabel);
        await landingpage.CheckMapviewValue();
        await delay(2000);
        await landingpage.ClickonMapReduceButton();
        // await delay(2000);
    });

    await test.step(`Logout of application`, async () => {
        await loginPage.LogoutOfApplication();
    });
});