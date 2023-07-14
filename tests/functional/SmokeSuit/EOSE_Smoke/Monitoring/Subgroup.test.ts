import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, Monitoring,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("service@eose.com", "Prescinto@123");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering to Subgroup page', async () => {

        // await Monitoring.ClickOnEOSEButton();
        // await Monitoring.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
        // await delay(2000);
        // await Monitoring.ChecktheRowforAccount("US.EOSE.POC");

        await homePage.NaviagetToMenu("Monitoring", "Subgroup");
        await delay(2000);

        await Monitoring.checkPageisCorrectorNot("Subgroup");
        await Monitoring.FindtheSocTile();


        // await test.step('test validation', async () => {

        await test.step('test validation', async () => {
            await Monitoring.CheckNamecolumn();
            await Monitoring.CheckEnabledcolumn();
            await Monitoring.CheckConnectedcolumn();
            await Monitoring.CheckWFAcolumn();
            await Monitoring.page.locator('//div[@id="title-Grid1"]').scrollIntoViewIfNeeded();
            const locator = '//div[@id="title-Grid1"]//div[contains(@class,"ag-header-cell ag-header-cell-sortable")]';
            const columns: Array<string> = await Monitoring.GetHiddenColumns(locator, 13);
            await Monitoring.ScrollToLeft();
            const columnValues: Array<string> = await Monitoring.GetHiddenColumnValuesSubgroup(columns, 2);
            // console.log(columns);
            //  console.log(columnValues);
            for (let i = 4; i <= columns.length - 1; i++) {
                console.log(columns[i], " :- ", columnValues[i - 1]);
                expect.soft(columnValues[i]).not.toBe(" ");
            }
            // columnValues.forEach(value => {
            //     expect.soft(value).not.toBe("");
            // });
        });

        // await Monitoring.page.locator('//div[@id="grid-table-Grid1"]').scrollIntoViewIfNeeded();
        // const locator = '//div[@id="grid-table-Grid1"]//div[contains(@class,"ag-header-cell ag-header-cell-sortable")]';
        // const columns: Array<string> = await Monitoring.GetHiddenColumnsEOSE(locator, 13);
        // await Monitoring.ScrollToLeft();
        // const columnValues: Array<string> = await Monitoring.GetHiddenColumnValuesSubgroup(columns, 2);
        // console.log(columns);
        // console.log(columnValues);
        // columnValues.forEach(value => {
        //     expect.soft(value).not.toBe("");
        // });
        // });
        //

    });
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });

});