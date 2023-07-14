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
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Time Lapse page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Time Lapse");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(5, "Time Lapse");
            await delay(7000);

            await Analytics.selectValeFromDropDown("Project", "Hiraco");
            await Analytics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
            await Analytics.DragAndDropElements("AC Frequency");
            await Analytics.SettingButton();
            await delay(5000);
            await Analytics.DisplayChart("View data table");
            await delay(7000);
            // await test.step('test validation', async () => {
            //     const locator = '//div[@class="highcharts-data-table"]//thead//tr//th[@class="text"]';
            //     const columns: Array<string> = await Analytics.GetColumns1(locator);
            //     // search
            //     let i = 0;
            //     const columnValues: Array<string> = await Analytics.GetColumnValues(columns,3);
            //     // columnValues.forEach(value => {
            //     //     expect.soft(value).not.toBe("");
            //     // });
            // });
            await Analytics.GridView();
            await delay(1000);

            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]'
                const columns: Array<string> = await Analytics.GetHiddenColumns(locator, 16);
                const columnValues: Array<string> = await Analytics.GetHiddenColumnValues(columns, 3);
                // columns.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
                // console.log(columns);

                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
                // console.log(columnValues);
                console.log("Below values are captured with respective timestamp for the selected parameter i.e AC Frequency");
                console.log(" Time ", " | ", " Value ");
                console.log("--------+--------");
                for (let c = 0; c < (columnValues.length); c++) {
                    expect.soft(columns[c]).not.toBeNull();
                    expect.soft(columnValues[c]).not.toBeNull();
                    console.log(columns[c], "  | ", columnValues[c]);
                }


                await Analytics.Assertiontimelaps();
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await Analytics.LogoutOfApplication();
});

// const isPagePresent: boolean = await homePage.NaviagetToMenu(6, "Investor Dashboard");
//         if (isPagePresent) {


//         } else {
//             console.log("Module not present for the user");
//         }