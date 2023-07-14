import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, CMMS }) => {
    await test.step(`Login to application`, async () => {
        await CMMS.navigateToURL();
        await CMMS.loginToApplication("csm.copel@prescinto.ai", "GrowPrescinto@10x");
        await delay(2000);
    });

    // await test.step('Entering On Dashboard', async () => {
    //     await CMMS.ShortNameMenu();
    //     await CMMS.EnterNameFor_Filter("Aquila Power");
    //     await CMMS.clickOnFirstElement();
    //     await delay(5000);
    // });

    await test.step('Enter PM Scheduler page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu(7, "PM Scheduler");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(8, "PM Scheduler");
            await delay(7000);
            await CMMS.Assertion();
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await CMMS.LogoutOfApplication();
});
