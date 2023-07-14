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

    await test.step('Checking Nevigations for EOSE Page', async () => {
        await SmokeCommonMethods.ClickOnEOSEButton();
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("US.EOSE.POC");

    });
    await test.step('Go to site,subgroup,block,string,module', async () => {

        await delay(2000);
        await Monitoring.checkPageisCorrectorNot("Site");
        await delay(2000);
        await Monitoring.FindtheSocTile();

        await Monitoring.ClickonHyperlinkRow("Subgroup");
        await delay(2000);
        await Monitoring.checkPageisCorrectorNot("Subgroup");
        // await sitepage.BackToSitSubgrpString();
        // await sitepage.ClickonHyperlinkRow("Subgroup");
        await Monitoring.FindtheSocTile();

        await Monitoring.ClickonHyperlinkRow("Prethos");
        await delay(2000);
         await Monitoring.checkPageisCorrectorNot("Block");
        // await sitepage.BackToSitSubgrpString();
        // await sitepage.ClickonHyperlinkRow("EB");
        await Monitoring.FindtheSocTile();

        await Monitoring.ClickonHyperlinkRow("ESA");
        await delay(2000);
         await Monitoring.checkPageisCorrectorNot("String");
        // await sitepage.BackToBlock();
        // await sitepage.ClickonHyperlinkRow("ESA");
        await Monitoring.FindtheSocTile();

        await Monitoring.ClickonHyperlinkRow("EM");
        await delay(2000);
        await Monitoring.checkPageisCorrectorNot("Module");
        await Monitoring.FindtheSocTile();
       
        await Monitoring.BackToSitSubgrpString();
        await Monitoring.checkPageisCorrectorNot("String");
        await delay(2000);
        await Monitoring.BackToBlock();
        await Monitoring.checkPageisCorrectorNot("Block");
        await delay(2000);
        await Monitoring.BackToSitSubgrpString();
        await Monitoring.checkPageisCorrectorNot("Subgroup");
        await delay(2000);
        await Monitoring.BackToSitSubgrpString();
        await Monitoring.checkPageisCorrectorNot("Site");
        await delay(2000);
    });

    await test.step(`Logout of application`, async () => {

        await loginPage.LogoutOfApplication();
        });
});



 // await Monitoring.ClickOnEOSEButton();
        // // await Monitoring.filterfromcolumn("ProjectShortName","US.EOSE.POC");
        // // await delay(2000);
        // await Monitoring.ChecktheRowforAccount("US.EOSE.POC");
       
        
        // // await Monitoring.NameMenu();
        // // await Monitoring.EnterNameFor_Filter("EOSE");
        // await Monitoring.clickOnFirstElementEOSE();