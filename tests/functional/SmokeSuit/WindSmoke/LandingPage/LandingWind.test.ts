import test from '@lib/BaseTest';
import { testData } from '../../../../resources/Smoke/LandingPage/LandingpageData';
import { testConfig } from '../../../../../testConfig';
import { LandingPage } from '@pages/SmokeSuit/SolarSmoke/LandingPage_Page';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
let lstdate1: string;
let powrrtng: string;
let rvalue: number;

test("@Smoke Wind Landing Page automation", async ({ loginPage, homePage, landingpage, SmokeCommonMethods }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        await delay(2000);
    });
    console.log("");
    console.log("     *** LANDING PAGE VALIDATION'S ****");
    console.log("");
    await test.step('Validation of tiles', async () => {
        await landingpage.ClickOnWindButton();

        // await delay(2000);

        await landingpage.projectTile();
        await landingpage.CapacityTile();
        await landingpage.TurbineStatusTile();
        await landingpage.ActivePowerTile();
        await landingpage.AvgWindTile();
        await landingpage.GenerationTile();

    });
    await test.step('Validation of table', async () => {
        console.log("Devicestatus From Grid");

        await landingpage.CheckDeviceStatus();
        const locator = `//div[@class="ag-header-viewport"]//div[@role="columnheader"]`;
        //'//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
        const columns: Array<string> = await landingpage.GetHiddenColumnsLanding(locator, 11, 3);
            await landingpage.ScrollToLeftLanding();
            const columnValues: Array<string> = await landingpage.GetHiddenColumnValuesWindLanding(columns,2);
            await landingpage.ScrollToLeftLanding();
            // console.log("column",columns);
            // console.log("column values",columnValues);
            rvalue=await landingpage.CheckPlantIsCommunicating(columnValues[1]);
            let lstdate=(columnValues[1]).split(" ");
            lstdate1=lstdate[1].substring(0,5);
            // console.log(lstdate1);
            powrrtng=columnValues[8];
            for(let c=0;c<columnValues.length;c++){
                if(c==4){
                    c=c+1;
                }
                console.log(columns[c],":",columnValues[c]);
                    expect.soft(columnValues[c]).not.toBeNull();
                // }
                // else{
                // expect.soft(parseFloat(columnValues[c])).toBeGreaterThanOrEqual(0);
                // }
            }
        //await delay(3000);
       
       
       /*
        await landingpage.CheckDeviceStatus();
        const locator = `//div[@class="ag-header-viewport"]//div[@role="columnheader"]`;
        //'//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
        const columns: Array<string> = (await landingpage.GetHiddenColumnsLanding(locator, 10, 3));
        await landingpage.ScrollToLeftLanding();
        const columnValues: Array<string> = await landingpage.GetHiddenColumnValuesLanding(columns, 2);
        // console.log("column", columns);
        // console.log("column values", columnValues);
        await landingpage.CheckPlantIsCommunicating(columnValues[1]);
        let lstdate = (columnValues[1]).split(" ");
        lstdate1 = lstdate[1].substring(0, 5);
        // console.log(lstdate1);
        powrrtng = columnValues[8];
        // for (let c = 0; c < columnValues.length; c++) {
        //     // if (c <= 5) {
        //     expect.soft(columnValues[c]).not.toBeNull();
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
            expect.soft(columnValues[c]).not.toBeNull();
        }
        //await delay(3000);

        */
    });

    console.log("");
    console.log("     *** HISTORY PAGE VALIDATION'S ****");
    console.log("");
    await test.step('Check data in History page', async () => {
        await landingpage.ClickonFirstplant();

        await homePage.NaviagetToMenu("Diagnostics", "History");

        await landingpage.NavigateToMenuTreeW();

        await landingpage.DragAndDropElements(testData.wind[0].HistoryDragandDrop);


        await landingpage.ClickonSearchButton();

        await landingpage.checkDatainHistoryPage(rvalue,lstdate1, powrrtng);

        await landingpage.GotoLandingPage();


    });

    await test.step('Map View', async () => {

        await landingpage.ClickOnWindButton();
        await landingpage.findGRPlant(testData.wind[0].Plantlocation);
        await landingpage.FindthelocationButton(testData.wind[0].PlantName);
        await delay(2000);
        await landingpage.solarPlantFarmView(testData.wind[0].MapViewlabel);

        await landingpage.ClickonWindJ2plant(testData.wind[0].Plant, testData.wind[0].Plantlabel);
        await landingpage.Checkwindplantdata();

        await delay(2000);
        await landingpage.ClickonMapReduceButton();


    });

    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });

});
