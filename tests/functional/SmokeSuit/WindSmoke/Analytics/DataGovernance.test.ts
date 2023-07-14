import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await SmokeCommonMethods.Wind_Btn();
        // await Analytics.ShortNameMenu();
        // await Analytics.EnterNameFor_Filter("Sequence");
        // await Analytics.clickOnFirstElement();
        // await delay(5000);
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "BE.DEMO.SEQU");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("BE.DEMO.SEQU");
    });

    await test.step('Enter Data Governance page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Data Governance");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(5, "Data Governance");
            await delay(10000);
            await Analytics.Assertion("Plant");
            await Analytics.Assertion("Inverter");
            await Analytics.Assertion("WMS");
            //gride validation
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Analytics.GetColumnsDG(locator);
                // console.log(columns);
                // search
                let i = 0;
                const columnValues: Array<string> = await Analytics.GetColumnValuesDG(columns, 1);
                // console.log(columnValues);

                console.log(" ");
                await expect.soft(columns[0]).not.toBe(" ");
                await console.log(columns[0], " :- ");
                await expect.soft(await Analytics.colunmName()).not.toBe(" ");
                console.log(" ");
                await expect.soft(columns[1]).not.toBe(" ");
                await console.log(columns[1], " :- ");
                await expect.soft(await Analytics.colunmLocation()).not.toBe(" ");
                console.log(" ");
                await expect.soft(columns[2]).not.toBe(" ");
                await console.log(columns[2], " :- ");
                await expect.soft(await Analytics.colunmDA()).not.toBe(" ");
              
            });
            await Analytics.Click_DataAvability();
            await Analytics.Assertion_DM();
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await Analytics.LogoutOfApplication();
});
