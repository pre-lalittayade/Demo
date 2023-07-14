import test from '@lib/BaseTest';
import { testConfig } from '../../../../testConfig';
import { LandingPage } from '@pages/SmokeSuit/SolarSmoke/LandingPage_Page';
// import { testData } from '../../../../tests/testData/EoseLandingData';
import { expect } from '@playwright/test';


//import * as data from "../testData/AvailabilityData";
//import * as data1 from "../test_data/jaora.json";
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, landingpage,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Check LandingPage is loading', async () => {


        await delay(2000);
        await landingpage.projectTile();
        await delay(2000);

    });

    await test.step('Wind Landing Page', async () => {
        await landingpage.ClickOnWindButton();

        await delay(2000);

        await landingpage.projectTile();
        await delay(2000);

    });
    await test.step('Eose Landing Page', async () => {
        await landingpage.ClickOnEOSEButton();

        await delay(2000);
        await landingpage.projectTile();
        await delay(2000);
    });

    await test.step('Eose Landing Page', async () => {
        await landingpage.ClickOnSolarButton();

        await delay(2000);
        await landingpage.projectTile();
        await delay(2000);

    });
});