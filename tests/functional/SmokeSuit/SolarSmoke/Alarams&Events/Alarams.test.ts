import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
import { testConfig } from '../../../../../testConfig';
import { Data } from '../../../../resources/Smoke/Solar/Alarams&EventData';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, AlaramEvent,SmokeCommonMethods }) => {
    // let index = 0
    // if (testConfig.project !== '') {
    //     for (let i = 0; i < Data.envorments.length; i++) {
    //         if (Data.envorments[i].env[i] === testConfig.project) {
    //             index = i;
    //             break;
    //         }
    //     }
    // }
    // for (let i = 0; i < Data.envorments.length; i++) {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);     
    });

    await test.step('Enter Alarms page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Alarms & Events", "Alarms");
        if (isPagePresent) {
            const PopUpIsPresent: boolean = await AlaramEvent.PopUp1();
            if (PopUpIsPresent) {
                // await homePage.NaviagetToMenu(7, "Alarms");
                await delay(7000);
                await AlaramEvent.PopUp();
                await test.step('test validation', async () => {
                    await AlaramEvent.AlarmStatusButtonLive("Live");
                    await AlaramEvent.AlarmStatusButton("Day");
                    await AlaramEvent.AlarmStatusButton("Week");
                    await AlaramEvent.AlarmStatusButton("Month");
                    // const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                    // const columns: Array<string> = await AlaramEvent.GetColumns(locator);
                    // // search
                    // let i = 0;
                    // const columnValues: Array<string> = await AlaramEvent.GetColumnValues1(columns, 3);
                    // console.log(columns[0]);
                    // console.log(columnValues[0]);
                    // const validationcolumn = columns[0];
                    // expect.soft(validationcolumn).not.toBe("");
                    // const validationvalue = columnValues[0];
                    // expect.soft(validationvalue).not.toBe("");
                });
            } else {
                await delay(7000);
                // await AlaramEvent.PopUp();
                await test.step('test validation', async () => {
                    await AlaramEvent.AlarmStatusButtonLive("Live");
                    await AlaramEvent.AlarmStatusButton("Day");
                    await AlaramEvent.AlarmStatusButton("Week");
                    await AlaramEvent.AlarmStatusButton("Month");
                    // const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                    // const columns: Array<string> = await AlaramEvent.GetColumns(locator);
                    // // search
                    // let i = 0;
                    // const columnValues: Array<string> = await AlaramEvent.GetColumnValues1(columns, 3);
                    // console.log(columns[0]);
                    // console.log(columnValues[0]);
                    // const validationcolumn = columns[0];
                    // expect.soft(validationcolumn).not.toBe("");
                    // const validationvalue = columnValues[0];
                    // expect.soft(validationvalue).not.toBe("");
                    // // columnValues.forEach(value => {
                    // //     expect.soft(value).not.toBe("");
                    // // });
                });
            }

        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await AlaramEvent.LogoutOfApplication();
    // }
});
