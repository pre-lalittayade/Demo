import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Reporting, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Report Viewe page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Reporting", "Report Viewer");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(6, "Report Viewer");
            await delay(7000);
            await Reporting.Assertion();
            await Reporting.FiltreButton();
            await Reporting.Template("Stride_Monthly_All plants");
            // await Reporting.CloseButton();
            await Reporting.FiltreButton();
            await Reporting.CloseButton();


        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Reporting.LogoutOfApplication();
});
