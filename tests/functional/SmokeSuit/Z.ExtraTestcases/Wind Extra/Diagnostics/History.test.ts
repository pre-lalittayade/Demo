import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, Diagnostics }) => {
    await test.step(`Login to application`, async () => {
        await Diagnostics.navigateToURL();
        await Diagnostics.loginToApplication("csm.copel@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter History page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu(8, "History");
        if (isPagePresent) {

            // await homePage.NaviagetToMenu(9, "History");
            // await delay(7000);
            await Diagnostics.selectValeFromDropDown("Project", "Brisa Potiguar Group 1");
            await Diagnostics.NavigateToMenuTree("Brisa Potiguar Group 1", "Wind KPIs:AB101");
            await Diagnostics.DragAndDropElements("Time-Based Availability");
            await Diagnostics.Refreshbtn();
            await delay(2000);
            await Diagnostics.Assertion();

        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Diagnostics.LogoutOfApplication();
});