import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke  Scenario 1 automation", async ({ loginPage, homePage, Monitoring, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering to Site page', async () => {

        await Monitoring.ClickOnEOSEButton();
        // await Monitoring.filterfromcolumnEOSE("ProjectShortName", "US.EOSE.POC");
        // await delay(2000);
        await Monitoring.ChecktheRowforAccount("US.EOSE.POC");
        await delay(2000);
        await homePage.NaviagetToMenu("Monitoring", "Site");
        await delay(4000);

        await Monitoring.checkPageisCorrectorNot("Site");
        await Monitoring.FindtheSocTile();

        // await test.step('test validation', async () => {
        //     const locator = '//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
        //     const columns: Array<string> = await Monitoring.GetHiddenColumns(locator, 11);
        //     await Monitoring.ScrollToLeft();
        //     const columnValues: Array<string> = await Monitoring.GetHiddenColumnValuesEOSE(columns, 2);
        //     console.log("column Values", columnValues);
        //     columnValues.forEach(value => {
        //         expect.soft(value).not.toBe("");
        //     });
        // });
        await Monitoring.CheckNamecolumn();
        await delay(2000);
        await Monitoring.CheckStatuscolumn();
        await Monitoring.CheckEnabledcolumn();
        await Monitoring.CheckConnectedcolumn();
        const locator = '//div[@class="ag-header-row ag-header-row-column"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]'
        const columns: Array<string> = await Monitoring.GetHiddenColumns(locator, 13);
        await Monitoring.ScrollToLeft();
        const columnValues: Array<string> = await Monitoring.GetHiddenColumnValuesEOSE(columns, 2);
        console.log("column Values", columnValues);
        console.log("column Values", columns);
        for (let i = 3; i <= columns.length - 1; i++) {
            console.log(columns[i], ":", columnValues[i]);
            expect.soft(columnValues[i]).not.toBe(" ");
        }
        // columnValues.forEach(value => {
        //     expect.soft(value).not.toBeNull();
        // });
        // });

    });
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });



});