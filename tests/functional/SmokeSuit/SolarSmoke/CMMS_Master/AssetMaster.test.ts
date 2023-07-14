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
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    //Asset Master//
    await test.step('Enter Asset Master page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS Master", "Asset Master");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(2, "Asset Master");
            // const responseTime = await CMMS_Master.GetPageResponseTime();
            await delay(10000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await CMMS_Master.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 4);
              
                const validationvalue = columnValues[0];
                expect.soft(validationvalue).not.toBe("")
                console.log(columns[0]," :- ",columnValues[0]);
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await CMMS_Master.LogoutOfApplication();
});

