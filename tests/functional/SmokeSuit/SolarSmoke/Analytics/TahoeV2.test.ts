import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

//if there is total loss then only click in that plant and nevigate or else if it is null then logout .


test("@ Scenario 1 automation", async ({ loginPage, homePage, Analytics,SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    await test.step('Entering On Dashboard', async () => {
        
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.EART.EART");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.EART.EART");

        // await Analytics.ShortNameMenu();
        // await Analytics.EnterNameFor_Filter("Earth Solar");
        // await Analytics.clickOnFirstElement();
        // await delay(3000);
    });

    await test.step('Enter Tahoe V2 page', async () => {
        await homePage.NaviagetToMenu("Analytics", "Tahoe V2");
        await delay(2000);
        await Analytics.TahoeAssertion("Actual Generation");
        await Analytics.TahoeAssertion("Achievable Generation");
        await Analytics.TahoeAssertion("Estimated Generation");
        await Analytics.TahoeAssertion("Target Generation");
        await Analytics.TahoeAssertion("Controllable Losses");
        await Analytics.TahoeAssertion("Partially Controllable Losses");
        await Analytics.TahoeAssertion("Uncontrollable Losses");
        await Analytics.TahoeAssertion("Unidentified Losses");
        await Analytics.OLDAssertion("Controllable");
        await Analytics.OLDAssertion("Partially Controllable");
        await Analytics.OLDAssertion("Uncontrollable");
        await Analytics.ClickOnLDBPSPlant();
        await Analytics.TahoeGraphAssertion();
        await Analytics.TahoePageAssertion();
        

    
    });
    
    await Analytics.LogoutOfApplication();
});

// const isPagePresent: boolean = await homePage.NaviagetToMenu(6, "Investor Dashboard");
//         if (isPagePresent) {


//         } else {
//             console.log("Module not present for the user");
//         }