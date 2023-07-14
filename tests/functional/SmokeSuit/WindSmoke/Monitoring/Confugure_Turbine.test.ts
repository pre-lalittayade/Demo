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
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await Monitoring.Wind_Btn();
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "BE.DEMO.SEQU");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("BE.DEMO.SEQU");
        await delay(3000);
    });
    await test.step('Enter WS page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Monitoring", "Square wind- Turbine 01");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(4, "WS");
            await delay(1000);
            await console.log(" ");
            await console.log("*** For PI-2_WTUR ***"),
            await console.log(" ");
            await Monitoring.Assertion("Active power");
            await Monitoring.Assertion("Wind-Speed");
            await Monitoring.Assertion("Wind-Direction");
            await Monitoring.Assertion("PLF");
            // await Monitoring.Assertion("Warning");
            await Monitoring.AssertionWS("Generation today");
            await Monitoring.AssertionWS("PLF");
            await Monitoring.TurbineNameAssertion("PI-2");
            await console.log(" ");
            await console.log("*** For PI-2_WTUR ***"),
            await console.log(" ");
            await Monitoring.Assertion("Active power");
            await Monitoring.Assertion("Wind-Speed");
            await Monitoring.Assertion("Wind-Direction");
            await Monitoring.Assertion("PLF");
            // await Monitoring.Assertion("Warning");
            await Monitoring.AssertionWS("Generation today");
            await Monitoring.AssertionWS("PLF");
            //Not Working
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Monitoring.LogoutOfApplication();
});

//Need to rework for proper validation part (need to ask soumya which value we can take for validtion which should not be null or zero)
