import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        // await SmokeCommonMethods.ClickOnEOSEButton();
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.PRES.DEMO");
        await delay(5000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.PRES.DEMO");
        // await Analytics.ShortNameMenu();
        // await Analytics.EnterNameFor_Filter("Aquila Power");
        // await Analytics.clickOnFirstElement();
        // await delay(3000);
    });

    await test.step('Enter MTTR page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "MTTR");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(5, "MTTR");
            await delay(7000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Analytics.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Analytics.GetColumnValues(columns, 3);
                // columnValues.forEach(value => {
                //     expect.soft(columnValues[1]).not.toBe("");
                //     console.log(columnValues[1]);
                // });
                expect.soft(columns).not.toBe("");
                    console.log(columns);
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await Analytics.LogoutOfApplication();
});
