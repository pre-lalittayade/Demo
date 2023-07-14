import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Diagnostics, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Data Correction page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Diagnostics", "Data Correction");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(9, "Data Correction");
            await delay(7000);
            await Diagnostics.selectValeFromDropDown("Project", "Hiraco");
            await Diagnostics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
            await Diagnostics.DragAndDropElements("AC Frequency");
            await Diagnostics.RefreshbtnDC();
            await Diagnostics.Close();
            await delay(2000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Diagnostics.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Diagnostics.GetColumnValues(columns, 3);
                // const columnvalue1 = columns[0];
                // const columnvalue2 = columnValues[0];
                // console.log(columns[1]);
                const validationvalue = columnValues[1];
                expect.soft(validationvalue).not.toBe("");
                console.log(columns[1]," :- ",columnValues[1]);
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }


    });
    await Diagnostics.LogoutOfApplication();
});