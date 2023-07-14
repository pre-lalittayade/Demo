import test from '@lib/BaseTest';
import { testConfig } from '../../../../../testConfig';
import { testData } from '../../../../resources/Smoke/LandingPage/LandingpageData';
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
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, landingpage, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
    });
    await test.step('MapView Solar', async () => {
        console.log("Map View and Drone View");
        await landingpage.findGRPlant(testData.solar[0].Plantlocation);
        await delay(2000);
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
    await test.step(`Logout of application`, async () => {
        await loginPage.LogoutOfApplication();
    });
});