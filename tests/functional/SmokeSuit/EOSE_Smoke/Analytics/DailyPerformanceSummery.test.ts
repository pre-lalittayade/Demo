import test from '@lib/BaseTest';
import { testConfig } from '../../../../../testConfig';
import { testData } from '../../../../resources/Smoke/EOSE/Analytics/AnalyticsData';
import { expect } from '@playwright/test';

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}
test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, Analytics,SmokeCommonMethods }) => {
  await test.step(`Login to application`, async () => {
    await loginPage.navigateToURL();
    await SmokeCommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
    //  await SmokeSolar.LogoutOfApplication();
    await delay(2000);
  });

  await test.step('Selecting Project from Landing page', async () => {
    await Analytics.ClickOnEOSEButton();
    // await Analytics.NameMenu();
    // await Analytics.EnterNameFor_Filter("EOSE");
    // await Analytics.clickOnFirstElement();
    // await delay(2000);
    await SmokeCommonMethods.filterfromcolumn("ProjectShortName", "US.EOSE.POC");
    await delay(2000);
    await SmokeCommonMethods.ChecktheRowforAccount("US.EOSE.POC");
  });
  await test.step('Daily Performance Summary Page In Analytics', async () => {

    const isPagePresent: boolean = await homePage.NaviagetToMenu("Analytics", "Daily Performance Summary");
    if (isPagePresent) {

      // await homePage.NaviagetToMenu("Analytics", "Daily Performance Summary");
      // await delay(2000);
      await Analytics.AddProject();
      await Analytics.SelectDropdownvalue(testData.Dailyperformancesummary[0].Project);
      await Analytics.AddEnergyGroupName();
      await Analytics.SelectDropdownvalue(testData.Dailyperformancesummary[0].Subgroup);
      await Analytics.AddDate(testData.Dailyperformancesummary[0].Date);
      await Analytics.ClickOnSearchButton();
      await delay(2000);
      await Analytics.StringCurrentgraphVisibility();
      await Analytics.DailyperformanceGraphValues("plotly-graph-1");
      ////await Analytics.DailyperformanceSummaryValues1();
      await Analytics.page.keyboard.press('ArrowDown');
      await Analytics.StringVoltagegraphVisibility();
      //await Analytics.DailyperformanceGraphValues("plotly-graph-2");
      //// await Analytics.DailyperformanceSummaryValues2();
      await Analytics.page.keyboard.press('ArrowDown');
      await Analytics.ModuleVoltagegraphVisibility();
      //await Analytics.DailyperformanceGraphValues("plotly-graph-3");
      //// await Analytics.DailyperformanceSummaryValues3();
      await Analytics.page.keyboard.press('ArrowDown');
      await Analytics.ModuleTemperaturegraphVisibility();
      //  await Analytics.DailyperformanceGraphValues("plotly-graph-4");
      await Analytics.StringSocgraphVisibility();
      // await Analytics.DailyperformanceGraphValues("plotly-graph-5");
      //// await Analytics.DailyperformanceSummaryValues5();
      await Analytics.ModuleSocgraphVisibility();
      // await Analytics.DailyperformanceGraphValues("plotly-graph-6");
      await Analytics.ModuleVStringIA1graphVisibility();
      //  await Analytics.DailyperformanceGraphValues("plotly-graph-7");
      //// await Analytics.DailyperformanceSummaryValues7();
      await Analytics.ModuleVStringIA2graphVisibility();

      // await Analytics.DailyperformanceGraphValues("plotly-graph-8");
      // //await Analytics.DailyperformanceSummaryValues8();

      await Analytics.ModuleVStringIA3graphVisibility();
      //  await Analytics.DailyperformanceGraphValues("plotly-graph-9");
      ///  await Analytics.DailyperformanceSummaryValues9();
      await Analytics.ModuleVStringIA4graphVisibility();
      // await Analytics.DailyperformanceGraphValues("plotly-graph-10");
      //  //await Analytics.DailyperformanceSummaryValues10();
      await Analytics.ModuleVStringIA5graphVisibility();
      // await Analytics.DailyperformanceGraphValues("plotly-graph-11");
      //  //await Analytics.DailyperformanceSummaryValues11();
      await Analytics.ModuleVStringIA6graphVisibility();
      //  await Analytics.DailyperformanceGraphValues("plotly-graph-12");
      //// await Analytics.DailyperformanceSummaryValues12();
      await Analytics.ModuleVStringIB1graphVisibility();
      //await Analytics.DailyperformanceGraphValues("plotly-graph-13");
      //  // await Analytics.DailyperformanceSummaryValues13();
      await Analytics.ModuleVStringIB2graphVisibility();
      //  await Analytics.DailyperformanceGraphValues("plotly-graph-14");
      // // await Analytics.DailyperformanceSummaryValues14();
      await Analytics.ModuleVStringIB3graphVisibility();
      // await Analytics.DailyperformanceGraphValues("plotly-graph-15");
      // // await Analytics.DailyperformanceSummaryValues15();
      await Analytics.ModuleVStringIB4graphVisibility();
      // await Analytics.DailyperformanceGraphValues("plotly-graph-16");
      // // await Analytics.DailyperformanceSummaryValues16();
      await Analytics.ModuleVStringIB5graphVisibility();
      //  await Analytics.DailyperformanceGraphValues("plotly-graph-17");
      //  //await Analytics.DailyperformanceSummaryValues17();
      await Analytics.ModuleVStringIB6graphVisibility();
      // await Analytics.DailyperformanceGraphValues("plotly-graph-18");
      // //  await Analytics.DailyperformanceSummaryValues18();

      await Analytics.TablegraphVisibility();
      await Analytics.HeatMapVisibility();
      await Analytics.TotalEnergyDischargevalueVisibility();
      await Analytics.TotalEnergyDischargevalue();
      // });
    } else {
      const abc = console.log("Module not present for the user");
      expect(abc).toBe(" ");
    }
    await test.step(`Logout of application`, async () => {
      await loginPage.LogoutOfApplication();
    });


  });
});
