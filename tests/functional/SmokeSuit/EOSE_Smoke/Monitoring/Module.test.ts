import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke  Scenario 1 automation", async ({ loginPage, homePage, Monitoring,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("service@eose.com", "Prescinto@123");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Entering to Module Page', async () => {
        // await Monitoring.ClickOnEOSEButton();
        // await Monitoring.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
        // await delay(2000);
        // await Monitoring.ChecktheRowforAccount("US.EOSE.POC");

        await homePage.NaviagetToMenu("Monitoring", "Module");
        await delay(2000);

        await Monitoring.checkPageisCorrectorNot("Module");
        await Monitoring.FindtheSocTile();

    });
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });
});