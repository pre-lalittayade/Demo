import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
test(" @Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });

    await test.step('Enter Contract Page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "Contract");
        if (isPagePresent) {
            await delay(3000);
            const popupbox: boolean = await CMMS.PopUp11();
            if (popupbox) {
                await CMMS.PopUp();
                await CMMS.SelectProject("Aquila Power");
                // await CMMS.SelectProject("AIG1");
                await CMMS.SearchBtn();
            }else{
                await CMMS.SelectProject("Aquila Power");
                // await CMMS.SelectProject("AIG1");
                await CMMS.SearchBtn();
            }
            // const popupbox: boolean = await CMMS.PopUp11();
            if (popupbox) {
                await CMMS.PopUp();
                // await CMMS.Tab("Handover Documents");
                await CMMS.Tab("Site Visits");
                await CMMS.ClickAddAndCloseButton();
                await delay(2000);
                await CMMS.Tab("Contract Details");
                await CMMS.ClickEditAndCloseButton();
                await delay(2000);
                await CMMS.Tab("Handover Documents");
                await delay(2000);

                await test.step('test validation', async () => {
                    const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                    const columns: Array<string> = await CMMS.GetColumns(locator);
                    // search
                    let i = 0;
                    columns.forEach(value => {
                        expect.soft(columns).not.toBe("");
                    });
                    console.log(columns);

                });
            } else {
                await CMMS.Tab("Site Visits");
                await CMMS.ClickAddAndCloseButton();
                await delay(2000);
                await CMMS.Tab("Contract Details");
                await CMMS.ClickEditAndCloseButton();
                await delay(2000);
                await CMMS.Tab("Handover Documents");
                await delay(2000);

                await test.step('test validation', async () => {
                    const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                    const columns: Array<string> = await CMMS.GetColumns(locator);
                    // search
                    let i = 0;
                    columns.forEach(value => {
                        expect.soft(columns).not.toBe("");
                    });
                    console.log(columns);

                });
            }


        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await CMMS.LogoutOfApplication();
});
