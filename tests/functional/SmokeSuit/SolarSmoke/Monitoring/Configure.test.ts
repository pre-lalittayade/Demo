import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Monitoring,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    console.log(" ----- Validations Of Configure Page Which We Are Selecting After Clicking On Configure ----- ");
    console.log("");
    await test.step('Entering On Dashboard', async () => {
        // await Monitoring.Wind_Btn();
        // await Monitoring.ShortNameMenu();
        // await Monitoring.EnterNameFor_Filter("AIR Jodhpur");
        await Monitoring.filterfromcolumn("ProjectShortName", "IN.REFE.AIJO")
        await Monitoring.clickOnFirstElement();
        await delay(5000);
    });
    await test.step('Enter Configure page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Monitoring", "Configure");
        if (isPagePresent) {
            await Monitoring.Account("Refex");
            await Monitoring.Project("AIR Jodhpur");
            await Monitoring.Dashboard("Inverter Overview_AIJO");
            await Monitoring.SearchBtn();
            await delay(5000);
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Monitoring.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Monitoring.GetColumnValues(columns, 2);
                columns.forEach(value => {
                    expect.soft(value).not.toBe("");
                });
                console.log(columns);
                columnValues.forEach(value => {
                    expect.soft(value).not.toBe("");
                });
                console.log(columnValues);
            });
            await Monitoring.BackTOInverterBtn();
            await delay(10000);
            await test.step('test validation', async () => {
                await Monitoring.Assertion("Active Power");
                await Monitoring.Assertion("PV Power");
                await Monitoring.Assertion("Reactive Power");
                await Monitoring.Assertion("Daily Energy");
                await Monitoring.Assertion("AC Frequency");
                await Monitoring.Assertion("Power Factor");
                await Monitoring.AssertionWS("Daily Energy");
                //await Monitoring.AssertionWS("PLF");
            });


            //Configure page second time 
            console.log(" ----- Validations Of Manualy created Configure Page directly from Monitoring ----- ");
            console.log("");
            await test.step(`Login to application`, async () => {
                await loginPage.navigateToURL();
                await Monitoring.loginToApplication("csm.refex@prescinto.ai", "GrowPrescinto@10x");
            });

            await test.step('Selecting Project from Landing page', async () => {

                //await sitepage.ClickOnEOSEButton();
                await Monitoring.filterfromcolumn("ProjectShortName", "IN.REFE.AIJO");
                await delay(2000);
                await Monitoring.ChecktheRowforAccount("IN.REFE.AIJO");
            });
            await test.step('Go and check Configure Dashboard', async () => {
                await homePage.NaviagetToMenu("Monitoring", "Inverter Overview_AIJO");
                await delay(2000);


                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Monitoring.GetColumns(locator);
                // search
                let i = 0;
                const columnValues: Array<string> = await Monitoring.GetColumnValues(columns, 2);
                // columns.forEach(value => {
                    expect.soft(columns[2]).not.toBe("");
                // });
                // console.log(columns);
                //columnValues.forEach(value => {
                expect.soft(columnValues[2]).not.toBe("");
                // });
                console.log(columns[2],":- ", columnValues[2]);


                await Monitoring.BackToDashboard();

                await delay(2000);

                await Monitoring.ActivePower();
                await Monitoring.PVPower();
                await Monitoring.ReactivePower();
                await Monitoring.DailyEnergy();
                await Monitoring.ACFrequencyTile();
                await Monitoring.PowerfactorTile();
                await Monitoring.CheckGraphAndValue();
                // await configuresolar.GetBartooltip();
                await Monitoring.CheckGraphchart();
                await Monitoring.CheckTableisVisible();

            });
        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });
    await Monitoring.LogoutOfApplication();
});

//Need to rework for proper validation part (need to ask soumya Madam which value we can take for validtion which should not be null or zero)
