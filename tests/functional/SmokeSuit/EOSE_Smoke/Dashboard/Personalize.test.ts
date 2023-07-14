import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Dashboards,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        // await delay(2000);
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(5000);
    });

    await test.step('Enter Personalied page', async () => {
        console.log("*** Checking Personalized Dashboard by going through Personalize Page ***");
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Dashboards", "Personalize");
        if (isPagePresent) {

        await Dashboards.SelectDashboard();
        await Dashboards.SelectDropdownvalue("Smoke-EOSE_Automation");
        await Dashboards.ClickOnSearchButton();
        await delay(2000);
        await Dashboards.CumulativeEnergyTile();
        // await Dashboards.StoredEnergyTile();
        // await Dashboards.Guang("Max Energy Stack A Temperature");
        // await Dashboards.EnergyRatingGraph("Energy Rating");

    } else {
        const abc = console.log("Module not present for the user");
        expect(abc).toBe(" ");
    }
    });

    await test.step('Check Personalize dashboard in Dashboard directly from menu', async () => {
        console.log("");
        console.log("*** Checking Personalized Dashboard Directly from Menu ***");
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Dashboards", "Smoke-EOSE_Automation");
        if (isPagePresent) {
       
        await Dashboards.CumulativeEnergyTile();
        // await Dashboards.StoredEnergyTile();
        // await Dashboards.Guang("Max Energy Stack A Temperature");
        // await Dashboards.EnergyRatingGraph("Energy Rating");


        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Dashboards.LogoutOfApplication();
});