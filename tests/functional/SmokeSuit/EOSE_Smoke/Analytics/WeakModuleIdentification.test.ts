import test from '@lib/BaseTest';
import { testConfig } from '../../../../../testConfig';
import { testData } from '../../../../resources/Smoke/EOSE/Analytics/AnalyticsData';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Selecting Project from Landing page', async () => {
        await SmokeCommonMethods.ClickOnEOSEButton();
        // await Analytics.NameMenu();
        // await Analytics.EnterNameFor_Filter("EOSE");
        // await Analytics.clickOnFirstElement();
        // await delay(2000);
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("US.EOSE.POC");
    });
    await test.step('Weak Module Identification In Analytics', async () => {

        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Weak Module Identification");
        if (isPagePresent) {

            // await delay(2000);
            await Analytics.AddProject();
            await Analytics.SelectDropdownvalue(testData.WeakmoduleIdentification[0].Project);
            await Analytics.AddEnergyGroupName();
            await Analytics.SelectDropdownvalue(testData.WeakmoduleIdentification[0].Subgroup);
            await Analytics.AddQFFilter();
            await Analytics.SelectDropdownvalue(testData.WeakmoduleIdentification[0].QFfilter);
            await Analytics.AddDate(testData.WeakmoduleIdentification[0].Date);
            await Analytics.ClickOnSearchButton();
            // await delay(2000);
            await Analytics.Cycletrend();
            await Analytics.CycleperformanceStatistics();
            await Analytics.energyModuleMatrix1();
            await Analytics.energyModuleMatrix2();
            await Analytics.CumulativeChargeandDischarge();
            await Analytics.CumulativeCycleCount();
            await Analytics.ChargeEnergyDischargeEnergy();
            await Analytics.RoundTripEfficiencyoverTemperature();

        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
});