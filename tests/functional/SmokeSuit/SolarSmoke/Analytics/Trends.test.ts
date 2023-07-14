import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Trends page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Trends");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(5, "Trends");
            await delay(5000);
            await Analytics.selectValeFromDropDown("Project", "Hiraco");
            // await Analytics.SelectAlarmButton("Custom");
            // await Analytics.SelectDateRange("7-Sep-2022", "7-Sep-2022");
            await Analytics.NavigateToMenuTree("Hiraco", "Inverter (22):1B");
            await Analytics.DragAndDropElements("AC Frequency");
            // await Analytics.DragAndDropElements("PV Voltage");
            // await Analytics.DragAndDropElements("AC Voltage V23");s
            // await Analytics.DragAndDropElements("AC Voltage V31");
            // await Analytics.DragAndDropElements("Active Power");
            // await Analytics.DragAndDropElements("Apparent Power");
            await Analytics.DisplayChart("View data table");
            await delay(7000);
            await test.step('test validation', async () => {
                // const locator = '//div[@class="highcharts-data-table"]//thead//tr//th[@class="text"]';
                // const columns: Array<string> = await Analytics.GetColumns1(locator);
                // // search
                // let i = 0;
                // const columnValues: Array<string> = await Analytics.GetColumnValues1(columns);
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
                await Analytics.AssertionTrends();
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });
    await Analytics.LogoutOfApplication();
});
