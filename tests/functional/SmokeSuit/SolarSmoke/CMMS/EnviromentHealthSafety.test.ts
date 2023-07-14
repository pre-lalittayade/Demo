import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.EART.EART");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.EART.EART");
        // await CMMS.ShortNameMenu();
        // await CMMS.EnterNameFor_Filter("Earth Solar");
        // // await CMMS.EnterNameFor_Filter("DMRC Dhaula Kuan Metro Station");
        // await CMMS.clickOnFirstElement("Earth Solar");
        await delay(5000);
    });

    await test.step('Enter Environment Health Safety page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "Environment Health Safety");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(8, "Environment Health Safety");
            await delay(3000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await CMMS.GetColumns(locator);
                console.log("Column Name :-  ",columns[1]);

                // search
                let i = 0;
                const columnValues: Array<string> = await CMMS.GetColumnValues(columns, 3);
                console.log("Colums Value :- ",columnValues[1]);
                const validationvalue = columnValues[1];
                expect.soft(validationvalue).not.toBe(" ");
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
