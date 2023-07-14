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
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.RADI.DKMS");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.RADI.DKMS");
        // await CMMS_Master.ShortNameMenu();
        // await CMMS_Master.EnterNameFor_Filter("DMRC Dhaula Kuan Metro Station");
        // await CMMS_Master.clickOnFirstElement();
        await delay(3000);
    });

    //Plant Generation Forecast//
    await test.step('Enter Plant Generation Forecast page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS Master", "Plant Generation Forecast");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(2, "Plant Generation Forecast");
            // await CMMS_Master.Dashboard("Aquila Power");
            // await CMMS_Master.SearchButton();
            await CMMS_Master.AddProject("Aquila Power");
            await CMMS_Master.ClickOnSearchButton();

            await delay(3000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]'
                const columns: Array<string> = await CMMS_Master.GetHiddenColumns(locator, 53);
                const columnValues: Array<string> = await CMMS_Master.GetHiddenColumnValues(columns, 3);
                // console.log(columns[0]);
                // console.log(columnValues[0]);
                const validationvalue = columnValues[0];
                expect.soft(validationvalue).not.toBe(" ")
                console.log(columns[0]," :- ",columnValues[0]);

                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await CMMS_Master.LogoutOfApplication();
});


