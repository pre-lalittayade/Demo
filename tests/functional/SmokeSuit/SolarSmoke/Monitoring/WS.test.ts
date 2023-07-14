import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Monitoring, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await Monitoring.LogoutOfApplication();
        await delay(2000);
    });

    //WS//
    await test.step('Enter WS page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Monitoring", "WS");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(4, "WS");
            await delay(10000);
            await Monitoring.Assertion("POA Irradiance");
            await Monitoring.Assertion("GH Irradiance");
            await Monitoring.Assertion("Ambient Temperature");
            await Monitoring.Assertion("Module Temperature");
            await Monitoring.Assertion("Wind Speed");
            await Monitoring.AssertionWS("Daily POA Energy");
            await Monitoring.AssertionWS("Daily GHI Energy");
            //Not Working
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Monitoring.LogoutOfApplication();
});

//Need to rework for proper validation part (need to ask soumya which value we can take for validtion which should not be null or zero)
