import test from '@lib/BaseTest';
import { Analytics_Page } from '@pages/SmokeSuit/SolarSmoke/Analytics_Page';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await Analytics.Wind_Btn();
        // await Analytics.ShortNameMenu();
        // await Analytics.EnterNameFor_Filter("Sequence");
        // await Analytics.clickOnFirstElement();
        // await delay(2000);
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "BE.DEMO.SEQU");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("BE.DEMO.SEQU");
    });
    await test.step('Enter Profiling page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Availability Management");
        if (isPagePresent) {

            // await Analytics.SelectProject("Square wind");
            await Analytics.DropDown("Project","Sequence");
            await Analytics.DropDown("Customers","Green Co");
            await Analytics.DropDown("Turbines","T-1_WTUR");
            await Analytics.SelectAlarmButton("Custom");
            await Analytics.SelectDateRange("2-Mar-2023", "5-Mar-2023");
            await Analytics.ClickOnSearch();
            await delay(1000);
            await test.step('test validation', async () => {
            await Analytics.CheckWtg();
            await Analytics.AssertionGrid1();
            await Analytics.ScrollTOElement;
            await Analytics.AssertionGrid2();
            });

        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
});