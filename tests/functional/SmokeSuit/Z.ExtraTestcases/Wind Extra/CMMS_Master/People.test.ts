import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, CMMS_Master }) => {
    await test.step(`Login to application`, async () => {
        await CMMS_Master.navigateToURL();
        await CMMS_Master.loginToApplication("csm.copel@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    //People//
    await test.step('Enter People page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu(1, "People");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(2, "People");
            await delay(5000);
            await test.step('test validation', async () => {
                const locator = '//div[@class="search-sidebar"]//*//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]';
                const columns: Array<string> = await CMMS_Master.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 1);
                console.log(columns[0]);
                console.log(columnValues[1]);
                const validationvalue = columnValues[1];
                expect.soft(validationvalue).not.toBe("")
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