import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
import { testConfig } from '../../../../../testConfig';
import { Data } from '../../../../resources/Smoke/Solar/Alarams&EventData';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}


test(" Scenario 1 automation", async ({ loginPage, homePage, AlaramEvent }) => {
    let index = 0
if (testConfig.project !== '') {
    for (let i = 0; i < Data.envorments.length; i++) {
        if (Data.envorments[i].env[i] === testConfig.project) {
            index = i;
            break;
        }
    }
}
for (let i = 0; i < Data.envorments.length; i++) {
    await test.step(`Login to application`, async () => {
        await AlaramEvent.navigateToURL("https://staging.prescinto.ai/v3/login");
        await AlaramEvent.loginToApplication("csm.copel@prescinto.ai", Data.envorments[i].pass);
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Alarms page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu(6, "Alarms");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(7, "Alarms");
            await delay(7000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await AlaramEvent.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 3);
                console.log(columns[0]);
                console.log(columnValues[0]);
                const validationvalue = columnValues[0];
                expect.soft(validationvalue).not.toBe("")
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });
    await AlaramEvent.LogoutOfApplication();
}
});
