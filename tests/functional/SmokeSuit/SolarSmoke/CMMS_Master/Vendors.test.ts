import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS_Master, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    //Vendors//********************************Not Working / now working fine*******************************//
    await test.step('Enter Vendors page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS Master", "Vendors");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(2, "Vendors");
            await delay(5000);
            await CMMS_Master.Assertion();
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await CMMS_Master.LogoutOfApplication();
});
