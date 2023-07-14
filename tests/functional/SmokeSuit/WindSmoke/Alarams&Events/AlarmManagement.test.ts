import test from '@lib/BaseTest';
import { Analytics_Page } from '@pages/SmokeSuit/SolarSmoke/Analytics_Page';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, AlaramEvent, Analytics, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        await Analytics.Wind_Btn();
        // await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
        // await delay(2000);BE.DEMO.SEQU
        // await SmokeCommonMethods.ChecktheRowforAccount("US.EOSE.POC");

        // await Analytics.ShortNameMenu();
        // await Analytics.EnterNameFor_Filter("Sequence");
        // await Analytics.clickOnFirstElement();
        // await delay(2000);

        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "BE.DEMO.SEQU");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("BE.DEMO.SEQU");
    });

    await test.step('Enter Alarm Management page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Alarms & Events", "Alarm Management");
        if (isPagePresent) {
            // await homePage.NaviagetToMenu(7, "Alarm Management");
            await delay(7000);
            await test.step('test validation', async () => {
                // const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]';
                const columns: Array<string> = await AlaramEvent.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await AlaramEvent.GetColumnValuesWAM(columns, 1);
                for (let c = 0; c < columnValues.length-1; c++) {
                    // if (c == 0) {
                    //     c = c + 1;
                    // }
                    console.log(columns[c+1], " :- ",columnValues[c]);
                    // if(c!=columnValues.length){
                    //     console.log(columnValues[c]);
                    // }
                    expect.soft(columnValues[c]).not.toBeNull();
                }
                // console.log(columns);
                // console.log(columnValues);
                // // const validationvalue = columnValues[0];
                // // expect.soft(validationvalue).not.toBe("");
                // columnValues.forEach(value => {
                //     expect.soft(value).not.toBe("");
                // });
                console.log("");
                await AlaramEvent.ShortNameMenu();
                await AlaramEvent.EnterNameFor_Filter("Square wind");
                await AlaramEvent.clickOnFirstElement();
                const PopUpIsPresent: boolean = await AlaramEvent.PopUp1();
                if (PopUpIsPresent) {
                    await AlaramEvent.clickOnOkBtn();
                    await AlaramEvent.EventStatusButton("Day");
                    await AlaramEvent.EventStatusButton("Week");
                    await AlaramEvent.EventStatusButton("Month");
                    await AlaramEvent.EventStatusButton("Live");
                    console.log("");
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
                    console.log("");
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

















//     await test.step('Enter Alarm Management page', async () => {
//         const isPagePresent: boolean = await homePage.NaviagetToMenu(7, "Alarm Management");
//         if (isPagePresent) {
//             // await homePage.NaviagetToMenu(7, "Alarm Management");
//             await delay(12000);
//             await test.step('test validation', async () => {
//                 const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
//                 const columns: Array<string> = await AlaramEvent.GetColumns(locator);
//                 // search
//                 let i = 0;
//                 const columnValues: Array<string> = await AlaramEvent.GetColumnValues(columns, 1);
//                 console.log(columns[0]);
//                 console.log(columnValues[0]);
//                 const validationvalue = columnValues[0];
//                 expect.soft(validationvalue).not.toBe("")
//                 // columnValues.forEach(value => {
//                 //     expect.soft(value).not.toBe("");
//                 // });
//             });
//             await AlaramEvent.ShortNameMenu();
//             await AlaramEvent.EnterNameFor_Filter("Aquila Power");
//             await AlaramEvent.clickOnFirstElement();
            
//             await AlaramEvent.clickOnOkBtn();
//             // await test.step('test validation', async () => {
//             //     const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
//             //     const columns: Array<string> = await AlaramEvent.GetColumns(locator);
//             //     // search
//             //     let i = 0;
//             //     const columnValues: Array<string> = await AlaramEvent.GetColumnValues1(columns, 3);
//             //     console.log(columns[0]);
//             //     console.log(columnValues[0]);
//             //     const validationvalue = columnValues[0];
//             //     expect.soft(validationvalue).not.toBe("")
//             //     // columnValues.forEach(value => {
//             //     //     expect.soft(value).not.toBe("");
//             //     // });
//             // });
//             await AlaramEvent.Assertion();

//         } else {
//             const abc = console.log("Module not present for the user");
//             expect(abc).toBe(" ");
//         }
//     });

//     await AlaramEvent.LogoutOfApplication();

// });
