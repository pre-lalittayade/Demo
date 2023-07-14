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
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.EART.EART");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.EART.EART");
        // await Analytics.ShortNameMenu();
        // await Analytics.EnterNameFor_Filter("Earth Solar");
        // await Analytics.clickOnFirstElement();
        await delay(3000);
    });
    await test.step('Enter Site Visit page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Check Lists", "Site Visit");
        if (isPagePresent) {

            // await delay(7000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Analytics.GetColumns(locator);
                // console.log(columns);
                // search
                let i = 0;
                const columnValues: Array<string> = await Analytics.GetColumnValues(columns, 1);
                // console.log(columns[1]);
                const validationvalue = columns[1];
                expect.soft(validationvalue).not.toBe(" ");
                const validationvalue1 = columnValues[1];
                expect.soft(validationvalue1).not.toBe(" ");
                console.log(columns[1]," :- ",columnValues[1]);

                // columnValues.forEach(value => {
                //     expect.soft(columns).not.toBe("");
                // });
            });

        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await Analytics.LogoutOfApplication();
});
