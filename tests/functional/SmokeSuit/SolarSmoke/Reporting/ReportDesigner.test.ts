import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, Reporting, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Report Designer page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Reporting", "Report Designer");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(6, "Report Designer");
            await delay(7000);
            await Reporting.Assertion();
            await Reporting.AddButton();
            await Reporting.CancleButton();
            await Reporting.PopupButton();

        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await Reporting.LogoutOfApplication();
});