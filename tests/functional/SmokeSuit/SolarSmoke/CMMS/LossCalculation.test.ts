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
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.DEMO.AQUI");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.DEMO.AQUI");
        // await CMMS.ShortNameMenu();
        // await CMMS.EnterNameFor_Filter("Aquila Power");
        // await CMMS.clickOnFirstElement("Aquila Power");
        await delay(3000);
    });

    await test.step('Enter Loss Calculation page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "Loss Calculation");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(8, "Loss Calculation");
            await delay(7000);
            await test.step('test validation', async () => {
                const locator = '//div[@role="presentation"]//div[@role="rowgroup"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
                const columns: Array<string> = await CMMS.GetHiddenColumns(locator, 17);
                const columnValues: Array<string> = await CMMS.GetHiddenColumnValuesLossCalculation(columns, 2);
                // console.log(columns[0]," :- ",columnValues[1]);
                // console.log(columnValues[1]);
                const validationvalue = columnValues[1];
                expect.soft(validationvalue).not.toBe("");
                const validationvalue1 = columns[1];
                expect.soft(validationvalue1).not.toBe("");
                console.log(columns[0]," :- ",columnValues[1]);

                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await CMMS.LogoutOfApplication();
});