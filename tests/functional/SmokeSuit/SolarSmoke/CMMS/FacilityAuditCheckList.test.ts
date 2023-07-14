import test from '@lib/BaseTest';
import { expect } from '@playwright/test';


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS_Master,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    //Activities//
    await test.step('Enter Facility Audit Check List page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "Facility Audit Checklist");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(2, "Activities");
            const responseTime = await CMMS_Master.GetPageResponseTime();
            await delay(5000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await CMMS_Master.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await CMMS_Master.GetColumnValues(columns, 1);
                // console.log(columns[2]);
                console.log(columns[2]," :- ",columnValues[2]);
                const validationvalue = columnValues[2];
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

