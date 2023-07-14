import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, Reporting }) => {
    await test.step(`Login to application`, async () => {
        await Reporting.navigateToURL();
        await Reporting.loginToApplication("csm.copel@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Report Viewe page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu(5, "Report Viewer");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(6, "Report Viewer");
            await delay(7000);
            await Reporting.Assertion();
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });
    await Reporting.LogoutOfApplication();
});
