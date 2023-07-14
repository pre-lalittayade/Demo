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
        await delay(1000);
    });

    await test.step('Enter Analytics page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Turbine Performance");
        if (isPagePresent) {

            await Analytics.SelectFromdropdown("Square wind");
            await Analytics.Selectdate("2-Feb-2023","Start Date");
            await Analytics.Selectdate("25-Feb-2023","End Date");
            await Analytics.SearchBtn();
            // await Analytics.Popupdatanotavailable();
        
            // var Datanotavailableispresent =await Analytics.page.locator(`//div[@class="cdk-overlay-pane"]//button`).isVisible

            // if (Datanotavailableispresent !==)

            await Analytics.IfDataIsVisible();

        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Analytics.LogoutOfApplication();
});

