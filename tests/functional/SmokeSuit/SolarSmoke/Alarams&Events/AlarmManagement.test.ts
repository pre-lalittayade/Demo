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
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.DEMO.AQUI");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.DEMO.AQUI");
    });
    await test.step('Enter Alarm Management page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Alarms & Events", "Alarm Management");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(7, "Alarm Management");
            await delay(5000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await AlaramEvent.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 1);
                // console.log(columns);
                // console.log(columnValues);
                // const validationvalue = columnValues[0];
                // expect.soft(validationvalue).not.toBe("");
                
                    expect.soft(columns[1]).not.toBe("");
                    expect.soft(columnValues[0]).not.toBe("");
                    console.log(columns[1], ":-", columnValues[0]);
                // });
                await AlaramEvent.ShortNameMenu();
                await AlaramEvent.EnterNameFor_Filter("CLP Veltoor");
                await AlaramEvent.clickOnFirstElement();
                const PopUpIsPresent: boolean = await AlaramEvent.PopUp1();
                if (PopUpIsPresent) {
                    await AlaramEvent.clickOnOkBtn();
                    await AlaramEvent.EventStatusButton("Day");
                    await AlaramEvent.EventStatusButton("Week");
                    await AlaramEvent.EventStatusButton("Month");
                    await AlaramEvent.EventStatusButton("Live");
                    await AlaramEvent.ClickOnCostumAlertsButton();
                    await AlaramEvent.CustomAlertsStatusButton("Day");
                    await AlaramEvent.CustomAlertsStatusButton("Week");
                    await AlaramEvent.CustomAlertsStatusButton("Month");
                    await AlaramEvent.CustomAlertsStatusButton("Live");

                } else {
                    await AlaramEvent.EventStatusButton("Day");
                    await AlaramEvent.EventStatusButton("Week");
                    await AlaramEvent.EventStatusButton("Month");
                    await AlaramEvent.EventStatusButton("Live");
                    await AlaramEvent.ClickOnCostumAlertsButton();
                    await AlaramEvent.CustomAlertsStatusButton("Day");
                    await AlaramEvent.CustomAlertsStatusButton("Week");
                    await AlaramEvent.CustomAlertsStatusButton("Month");
                    await AlaramEvent.CustomAlertsStatusButton("Live");
                    // await AlaramEvent.Assertion();
                }
                await AlaramEvent.ClickOnCostumAlertsButton();
            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");        }
    });

    await AlaramEvent.LogoutOfApplication();

});
