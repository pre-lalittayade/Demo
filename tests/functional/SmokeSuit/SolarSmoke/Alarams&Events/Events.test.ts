import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, AlaramEvent, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Events page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Alarms & Events", "Events");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(7, "Events");
            await delay(15000);
            await test.step('test validation', async () => {
                await AlaramEvent.EventStatusButtonLive("Live");
                await AlaramEvent.EventStatusButtonLive("Day");
                await AlaramEvent.EventStatusButtonLive("Week");
                await AlaramEvent.EventStatusButtonLive("Month");
                // const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                // const columns: Array<string> = await AlaramEvent.GetColumns(locator);
                // // search
                // let i = 0;
                // const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 1);
                // console.log(columns[1]);
                // console.log(columnValues[1]);
                // const validationvalue = columnValues[1];
                // expect.soft(validationvalue).not.toBe("")
                //// columnValues.forEach(value => {
                ////     expect.soft(value).not.toBe("");
                //// });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await AlaramEvent.LogoutOfApplication();

});
// const isPagePresent: boolean = await homePage.NaviagetToMenu(6, "Investor Dashboard");
//         if (isPagePresent) {


//         } else {
//             console.log("Module not present for the user");
//         }