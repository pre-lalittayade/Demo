import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("  Scenario 1 automation", async ({ loginPage, homePage, CMMS }) => {
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

    await test.step('Enter Project Resources page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu(7, "Project Resources");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(8, "Project Resources");
            await delay(7000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await CMMS.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await CMMS.GetColumnValues1(columns, 2);
                console.log(columns[0]);
                console.log(columnValues[0]);
                const validationvalue = columnValues[0];
                expect.soft(validationvalue).not.toBe("");
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
                //div[@ref="gridHeader"]//div[@aria-rowindex="1"]
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await CMMS.LogoutOfApplication();
});
