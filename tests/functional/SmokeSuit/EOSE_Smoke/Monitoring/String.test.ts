import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Monitoring,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("service@eose.com", "Prescinto@123");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Entering to String page', async () => {

        // await Monitoring.ClickOnEOSEButton();
        // await Monitoring.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
        // await delay(2000);
        // await Monitoring.ChecktheRowforAccount("US.EOSE.POC");

        await homePage.NaviagetToMenu("Monitoring", "String");
        await delay(2000);
        await Monitoring.checkPageisCorrectorNot("String");
        await Monitoring.FindtheSocTile();

        // await test.step('test validation', async () => {
        //     const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
        //     const columns: Array<string> = await Monitoring.GetColumns(locator);
        //     // search
        //     let i = 0;
        //     const columnValues: Array<string> = await Monitoring.GetColumnValues(columns, 2);
        //     // console.log(columnValues);
        //     // console.log(columnValues[0]);
        //     // const validationvalue = columnValues[0];
        //     // expect.soft(validationvalue).not.toBe(" ")

        //     console.log(columns);
        //     console.log(columnValues);
        //     columnValues.forEach(value => {
        //         expect.soft(value).not.toBe("");
        //     });
        // });
        await test.step('test validation', async () => {
            await Monitoring.CheckNamecolumn();
            await Monitoring.CheckWFAcolumn();
            const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
            // const columns: Array<string> = await Monitoring.GetColumns(locator);
            const columns: Array<string> = await Monitoring.GetHiddenColumns(locator, 11);
            // search
            //let i = 0;
            const columnValues: Array<string> = await Monitoring.GetColumnValues(columns, 2);

            for (let i = 1; i <= columns.length - 1; i++) {
                console.log(columns[i], " :- ", columnValues[i]);
                expect.soft(columnValues[i]).not.toBe(" ");
            }

        });


    });
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });


});