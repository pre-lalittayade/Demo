import test from '@lib/BaseTest';
import { testData } from '../../../../resources/Smoke/EOSE/Analytics/AnalyticsData';
import { testConfig } from '../../../../../testConfig';
import { expect } from '@playwright/test';


//import * as data from "../testData/AvailabilityData";
//import * as data1 from "../test_data/jaora.json";
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("service@eose.com", "Prescinto@123");
        //  await SmokeSolar.LogoutOfApplication();
        // await delay(2000);
    });

  /*  await test.step('Selecting Project from Landing page', async () => {


        await Analytics.ClickOnEOSEButton();
        await Analytics.NameMenu();
        await Analytics.EnterNameFor_Filter("EOSE");
        await Analytics.clickOnFirstElement();
        await delay(2000);

    });
    */
    await test.step('Daily Cycle Status In Analytics', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Daily Cycle Stats");
        if (isPagePresent) {
       
        // await homePage.NaviagetToMenu("Analytics", "Daily Cycle Stats");
        // await delay(2000);

        await Analytics.AddProject();
        await Analytics.SelectDropdownvalue(testData.dailycyclestatus[0].Project);
        await Analytics.AddEnergyGroupName();
        await Analytics.SelectDropdownvalue(testData.dailycyclestatus[0].Subgroup);
        await Analytics.AddDate(testData.dailycyclestatus[0].Date);
        await Analytics.ClickOnSearchButton();
        await delay(2000);
        await Analytics.CheckforPrethos();
        await Analytics.SelectDropdownvalue(testData.dailycyclestatus[0].EnergyBlock);

        await Analytics.CheckdailyCyclegraphVisibility(testData.dailycyclestatus[0].Graphheading);
        await Analytics.CheckTable1IsPrescent(testData.dailycyclestatus[0].EnergyBlock);
        await Analytics.CheckTable2IsPrescent(testData.dailycyclestatus[0].EnergyBlock);
    } else {
        const abc = console.log("Module not present for the user");
        expect(abc).toBe(" ");
    }
    });
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });


});