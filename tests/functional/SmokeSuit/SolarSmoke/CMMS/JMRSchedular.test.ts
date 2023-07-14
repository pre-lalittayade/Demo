import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
// VALIDAION IS PENDING 
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, CMMS, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(2000);
    });
    
    await test.step('Entering On Dashboard', async () => {
        
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "IN.PRES.DEMO");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("IN.PRES.DEMO");
    });

    await test.step('Enter Scheduler page', async () => {
        const isPagePresent: boolean = await homePage.NaviagetToMenu("CMMS", "JMR Scheduler");
        if (isPagePresent) {
            await delay(5000);
            const PopUpIsPresent: boolean = await CMMS.PopUp1();
            if (PopUpIsPresent) {
                console.log("No scheduler template found");
                await CMMS.PopUp();

            } else {
                await CMMS.Template("IRS RT");
                await CMMS.SearchBtn();
                await CMMS.EditBtn();
                await test.step('test validation', async () => {
                    await CMMS.AssertionJMRSchedilarProject();
                    await CMMS.AssertionJMRSchedilarStartDate();
                    await CMMS.AssertionJMRSchedilarEndDate();
                });

            }

        } else {
            const abc = console.log("Module not present for the user");
            expect(abc).toBe(" ");
        }
    });

    await CMMS.LogoutOfApplication();
});

