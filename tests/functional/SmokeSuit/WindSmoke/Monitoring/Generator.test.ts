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
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await Monitoring.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.Wind_Btn();
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "BE.DEMO.SEQU");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("BE.DEMO.SEQU");
        await delay(3000);
    });
    // MFM //
    await test.step('Enter MFM page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Monitoring", "Generator");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(4, "MFM");
            await delay(10000);
            await Monitoring.AssertionGenerator("Bearing Temperature DE");
            await Monitoring.AssertionGenerator("Bearing Temperature NDE");
            await Monitoring.AssertionGenerator("Generator speed");
            await Monitoring.AssertionGenerator("Generator Winding V Temp");
            await Monitoring.AssertionGenerator("Generator Winding U Temp");
            await Monitoring.AssertionGenerator("Generator Winding W Temp");

            
            // Not Working
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await Monitoring.LogoutOfApplication();
});

//Need to rework for proper validation part (need to ask soumya which value we can take for validtion which should not be null or zero)