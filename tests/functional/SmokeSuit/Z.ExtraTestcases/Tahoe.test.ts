import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("  Scenario 1 automation", async ({ loginPage, homePage, Analytics }) => {
    await test.step(`Login to application`, async () => {
        await Analytics.navigateToURL("https://cloud.prescinto.ai/v3/login");
        await Analytics.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Tahoe page', async () => {
        await homePage.NaviagetToMenu(5, "Tahoe");
        await delay(2000);
    });
    
    await Analytics.LogoutOfApplication();
});

// const isPagePresent: boolean = await homePage.NaviagetToMenu(6, "Investor Dashboard");
//         if (isPagePresent) {


//         } else {
//             console.log("Module not present for the user");
//         }