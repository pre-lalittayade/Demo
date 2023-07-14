import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        await delay(2000);
    });
    await test.step('Entering On Inventory', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.DEMO.AQUI");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.DEMO.AQUI");
        // await CMMS.ShortNameMenu();
        // await CMMS.EnterNameFor_Filter("Aquila Power");
        // await CMMS.clickOnFirstElement("Aquila Power");
        await delay(3000);
    });
    await test.step('Enter Inventory page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "Inventory");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(8, "Inventory");
            await delay(3000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await CMMS.GetColumns(locator);
                console.log(columns);
                expect.soft(columns).not.toBe("");
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await CMMS.LogoutOfApplication();
});
