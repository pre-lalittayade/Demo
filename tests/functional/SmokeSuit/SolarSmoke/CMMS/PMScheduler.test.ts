import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.DEMO.AQUI");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.DEMO.AQUI");
        // await CMMS.ShortNameMenu();
        // await CMMS.EnterNameFor_Filter("Aquila Power");
        // await CMMS.clickOnFirstElement("Aquila Power");
        await delay(3000);
    });

    await test.step('Enter PM Scheduler page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "PM Scheduler");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(8, "PM Scheduler");
            await delay(5000);
            await CMMS.Assertion();
            await CMMS.FiltreButton();
            await CMMS.CloseButton();
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await CMMS.LogoutOfApplication();
});
