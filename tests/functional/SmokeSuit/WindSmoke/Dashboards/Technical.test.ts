import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("@Smoke Technical Page Wind automation", async ({ loginPage, homePage, Dashboards, SmokeCommonMethods }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        // await delay(2000);
        await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
        //  await SmokeSolar.LogoutOfApplication();
        await delay(5000);
    });

    await test.step('Entering On Technical page from Dashboard ', async () => {
        await Dashboards.Wind_Btn();
        await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "BE.DEMO.SEQU");
        await delay(2000);
        await SmokeCommonMethods.ChecktheRowforAccount("BE.DEMO.SEQU");
        await delay(3000);
        console.log("*******Technical Page From Landing-Page*******");
        console.log("");
        await Dashboards.checkPageisCorrectorNot("Technical");
        await Dashboards.Assertion("Total Active Power");
        await Dashboards.Assertion("Total Reactive Power");
        await Dashboards.Assertion("Avg Wind Speed of the farm");
        await Dashboards.Assertion("Wind Direction");
        await Dashboards.Assertion("Total Generation");
        await Dashboards.WindTechnicalAssertion();

        await Dashboards.TechnicalShortNameMenu();
        await Dashboards.EnterNameFor_Filter("T-1");
        await Dashboards.TechnicalclickOnFirstElement();
        await delay(2000);

        await Dashboards.Assertion("Active power");
        await Dashboards.Assertion("Wind-Speed");
        await Dashboards.Assertion("Wind-Direction");
        await Dashboards.Assertion("PLF");
        // await Dashboards.Assertion("Warning");
    });
    await Dashboards.HomePageButton();
    await test.step('Enter Technical page', async () => {
        await homePage.NaviagetToMenu("Dashboards", "Technical");
        await delay(7000);
        console.log("");
        console.log("*******Technical Page From Menu*******");
        console.log("");
        await Dashboards.checkPageisCorrectorNot("Technical");
        await Dashboards.Assertion("Total Active Power");
        await Dashboards.Assertion("Total Reactive Power");
        await Dashboards.Assertion("Avg Wind Speed of the farm");
        await Dashboards.Assertion("Wind Direction");
        await Dashboards.Assertion("Total Generation");
        await Dashboards.WindTechnicalAssertion();

        await Dashboards.TechnicalShortNameMenu();
        await Dashboards.EnterNameFor_Filter("T-1");
        await Dashboards.TechnicalclickOnFirstElement();
        await delay(2000);

        await Dashboards.Assertion("Active power");
        await Dashboards.Assertion("Wind-Speed");
        await Dashboards.Assertion("Wind-Direction");
        await Dashboards.Assertion("PLF");
        // await Dashboards.Assertion("Warning");
    });
    await Dashboards.LogoutOfApplication();
});