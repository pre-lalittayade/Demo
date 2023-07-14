import test from '@lib/BaseTest';
import { Analytics_Page } from '@pages/SmokeSuit/SolarSmoke/Analytics_Page';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.Wind_Btn();
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "BE.DEMO.SEQU");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("BE.DEMO.SEQU");
        await delay(3000);
    });
    await test.step('Enter Analytics page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Plant Performance");
        if (isPagePresent) {

            // await Analytics.SelectProject("Square wind");
            await Analytics.SelectProject("Square wind");
            await Analytics.SelectAnalysis("Plant Analysis");
            await Analytics.SelectCustomer("Square wind");
            await Analytics.SelectMakeModel("GE_Alstom-ECO122");
            await Analytics.SelectDateRange("2-Mar-2023", "5-Mar-2023");
            await Analytics.SearchButton();
            await Analytics.AssertionPlantPerformance();
            //validation is not working
            
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
});