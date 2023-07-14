import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
// VALIDATION IS PENDING
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        await delay(2000);
    });
    // await test.step('Entering On Dashboard', async () => {

    //     await CMMS.ShortNameMenu();
    //     await CMMS.EnterNameFor_Filter("Aquila Power");
    //     await CMMS.clickOnFirstElement();
    //     await delay(5000);
    // });

    await test.step('Enter Work Order page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "Work Order");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(8, "Work Order");
            await delay(3000);
            // await CMMS.Granularity("Month");
            await CMMS.Listviewbtn();
            await CMMS.WOclickOnFirstElement();
            await CMMS.WOclickOnFirstElement1();
            await CMMS.WOAssertion();
            await CMMS.ClickEditAndCancleButton();
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await CMMS.LogoutOfApplication();
});

