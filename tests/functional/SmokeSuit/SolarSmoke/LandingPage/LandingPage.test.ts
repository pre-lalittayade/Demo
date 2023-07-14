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


test("@Smoke Landing Page automation", async ({ loginPage, homePage, landingpage, SmokeCommonMethods }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("mapview_testing@prescinto.ai", "GrowPrescinto@10x");
        await delay(2000);
    });
    console.log("");
    console.log("     *** LANDING PAGE VALIDATION'S ****");
    console.log("");
    await test.step('Validation of tiles', async () => {
        await landingpage.projectTile();
        await landingpage.CapacityTile();
        await landingpage.DeviceStatusTile();

        await landingpage.PRTile();
        await landingpage.DailyEnergyTile();
        await landingpage.DailyPOATile();
        await landingpage.ActivePowerTileSolar();

    });

    await test.step('Validation of table', async () => {

        console.log("Device status From Grid :- ");

        await landingpage.CheckDeviceStatus();
        const locator = `//div[@class="ag-header-viewport"]//div[@role="columnheader"]`;
        //'//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
        const columns: Array<string> = await landingpage.GetHiddenColumnsLanding(locator, 13, 3);
        await landingpage.ScrollToLeftLanding();
        const columnValues: Array<string> = await landingpage.GetHiddenColumnValuesLanding(columns, 2);
        //    console.log("column",columns);
        //     console.log("column values",columnValues);
        await landingpage.ScrollToLeftLanding();
        rvalue = await landingpage.CheckPlantIsCommunicating(columnValues[1]);
        let lstdate = (columnValues[1]).split(" ");
        lstdate1 = lstdate[1].substring(0, 5);
        // console.log(lstdate1);
        powrrtng = columnValues[6];
        for (let c = 0; c < columnValues.length; c++) {
            if (c == 2 || c == 5) {
                c = c + 1;
            }
            console.log(columns[c], ":", columnValues[c]);
            expect.soft(columnValues[c]).not.toBe("");
            //  }
            //else{
            // expect.soft(parseFloat(columnValues[c])).not.toBeNull;
            // }
        }
        // await delay(3000);





        /*    await landingpage.CheckDeviceStatus();
            const locator = `//div[@class="ag-header-viewport"]//div[@role="columnheader"]`;
            //'//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
            const columns: Array<string> = await landingpage.GetHiddenColumnsLanding(locator, 14, 3);
            await landingpage.ScrollToLeftLanding();
            const columnValues: Array<string> = await landingpage.GetHiddenColumnValuesLanding(columns, 2);
            console.log("column", columns);
            console.log("column values", columnValues);
            await landingpage.CheckPlantIsCommunicating(columnValues[1]);
            let lstdate = (columnValues[1]).split(" ");
            lstdate1 = lstdate[1].substring(0, 5);
            // console.log(lstdate1);
            powrrtng = columnValues[5];
            // for (let c = 0; c < columnValues.length; c++) {
            //     // if (c <= 5) {
            //         expect.soft(columnValues[c]).not.toBeNull();
            //     // }
            //     // else {
            //     //     expect.soft(parseFloat(columnValues[c])).toBeGreaterThanOrEqual(0);
            //     // }
            // }
            for (let c = 0; c < columnValues.length; c++) {
                if (c == 4) {
                    c = c + 1;
                }
                console.log(columns[c], " :- ", columnValues[c]);
                expect.soft(columnValues[c]).not.toBe(" ");
                // await delay(3000);
            }
    */

    });
    console.log("");
    console.log("     *** HISTORY PAGE VALIDATION'S ****");
    console.log("");
    await test.step('Check data in History page', async () => {
        await landingpage.ClickonFirstplant();

        await homePage.NaviagetToMenu("Diagnostics", "History");

        await landingpage.NavigateToMenuTreeS();

        await landingpage.DragAndDropElements(testData.solar[0].HistoryDragandDrop);

        await landingpage.ClickonSearchButton();

        await landingpage.checkDatainHistoryPage(rvalue,lstdate1, powrrtng);

        await landingpage.GotoLandingPage();


    });
    /*   await test.step('MapView Solar', async () => {
   
   
           await landingpage.findGRPlant(testData.solar[0].Plantlocation);
           await landingpage.FindthelocationButton(testData.solar[0].PlantName);
           await landingpage.solarPlantFarmView(testData.solar[0].MapViewlabel);
       });
       await test.step('DroneView Solar', async () => {
           await landingpage.clickonInspectiondropdown(testData.solar[0].Inspectiondate);
           // await delay(2000);
           await landingpage.Checkinspection();
           await landingpage.FilterScope();
          
           await landingpage.FilterString();
   
           await landingpage.Checkdeffects(testData.solar[0].Defectname);
   
   
           await landingpage.ValidateDefectleaflethead(testData.solar[0].Defectname);
           await landingpage.ValidateDefectLeafletbody();
           await landingpage.ClickonBackButton();
   
           // await delay(2000);
   
   
       });
       */
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });


});