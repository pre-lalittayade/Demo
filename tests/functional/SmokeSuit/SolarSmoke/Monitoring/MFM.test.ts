import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, Monitoring, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await Monitoring.LogoutOfApplication();
        await delay(2000);
    });

    // MFM //
    await test.step('Enter MFM page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Monitoring", "MFM");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(4, "MFM");
            await delay(10000);
            await Monitoring.Assertion("Active Power");
            await Monitoring.Assertion("Export Energy");
            await Monitoring.Assertion("Import Energy");
            await Monitoring.Assertion("Frequency");
            await Monitoring.Assertion("Power Factor Average");
            await Monitoring.AssertionMFM();
            await Monitoring.Assertiontiles("2");
            await Monitoring.Assertiontiles("3");
            // await Monitoring.Assertiontiles("4");
            // await Monitoring.Assertiontiles("5");
            // Not Working
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await Monitoring.LogoutOfApplication();
});

//Need to rework for proper validation part (need to ask soumya which value we can take for validtion which should not be null or zero)