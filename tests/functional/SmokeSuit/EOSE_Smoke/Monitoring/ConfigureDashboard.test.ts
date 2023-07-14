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
        await SmokeCommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Selecting Project from Landing page', async () => {
    await SmokeCommonMethods.ClickOnEOSEButton();
    await delay(2000);
    await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
    await delay(3000);
    await SmokeCommonMethods.ChecktheRowforAccount("US.EOSE.POC");
    await delay(3000);
    });
    await test.step('Entering Configure Page', async () => {
    //     await Monitoring.ClickOnEOSEButton();
    // //    await Monitoring.filterfromcolumnEOSE("ProjectShortName", "US.EOSE.POC");
    //     await Monitoring.NameMenu();
    //     await Monitoring.EnterNameFor_Filter("EOSE");
    //     // await Monitoring.ChecktheRowforAccount("US.EOSE.POC");
    //     await Monitoring.clickOnFirstElement();
    //     // await delay(2000);
       

        const isPagePresent: boolean = await homePage.NaviagetToMenu("Monitoring", "Configure");
        if (isPagePresent) {
        // await homePage.NaviagetToMenu("Monitoring", "Configure");
        // await delay(2000);

        await Monitoring.AddAccount();

        await Monitoring.SelectDropdownvalue("EOSE");
        await Monitoring.AddProject();
        await Monitoring.SelectDropdownvalue("EOSE Pilot");
        await Monitoring.AddDashboard();
        await Monitoring.SelectDropdownvalue("Test Alarm");
        await Monitoring.ClickOnSearchButton();
        await Monitoring.Checkthetable();
        await delay(2000);
    } else {
        const abc = console.log("Module not present for the user");
        expect(abc).toBe(" ");
    }
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });

    });
// });
// test("  Scenario 1 automation", async ({ loginPage, homePage, Monitoring }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await Monitoring.loginToApplication("service@eose.com", "Prescinto@123");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Selecting Configured Page directly from menu', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("Monitoring", "Test Alarm");
        if (isPagePresent) {
        // await homePage.NaviagetToMenu("Monitoring", "Test Alarm");
        // await delay(2000);

        await Monitoring.Checkthetable();
        await delay(2000);

    } else {
        const abc = console.log("Module not present for the user");
        expect(abc).toBe(" ");
    }
    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
    });

    });

});
