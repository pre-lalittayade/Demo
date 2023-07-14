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
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        await delay(2000);
    });
    
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.PRES.DEMO");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.PRES.DEMO");
        // await CMMS.ShortNameMenu();
        // await CMMS.EnterNameFor_Filter("Demo Project");
        // await CMMS.clickOnFirstElement("Demo Project");
        await delay(3000);
    });

    await test.step('Enter Availability Calculation page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "Availability Calculation");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(8, "Module Cleaning Cycle");
            await delay(7000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await CMMS.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await CMMS.GetColumnValues(columns, 1);
                console.log(columns[2]);
                console.log(columnValues[2]);
                const validationvalue = columns[2];
                const validationvalue1 = columnValues[2];
                expect.soft(validationvalue).not.toBe("");
                expect.soft(validationvalue1).not.toBe("");
                // console.log();
                // expect.soft(validationvalue1).not.toBe("");
                // columnValues.forEach(value => {
                //     expect.soft(columns).not.toBe("");
                // });
                // console.log(columns);
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await CMMS.LogoutOfApplication();
});
