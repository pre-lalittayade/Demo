import test from '@lib/BaseTest';
import { testConfig } from '../../../testConfig'
// import { Data } from "../resources/AvailsbilityData"
// import * as data1 from "../resources/Data.json"

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("Scenario 1 automation", async ({ loginPage, homePage, CostumAlerts }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
    });
   
    await test.step('Enter Costum Alerts page', async () => {
        await homePage.NaviagetToMenu(8, "Custom Alerts");

        await CostumAlerts.CreateNewAlert("Ok");
        await CostumAlerts.CreateNewAlert("Create New Alert");
        await CostumAlerts.ProjectAndDevice("Project and Device");
        await CostumAlerts.CondltlonName("Condition Name","Test");
        await CostumAlerts.CondltlonName("Message","DemoTest");
        await CostumAlerts.Feature("Feature","Monitoring");
        await CostumAlerts.Project("Project","Demo Project");
        await CostumAlerts.TargetDeviceCategory("Target Device Category","Inverter");
        await CostumAlerts.AlertSetting("Alert Settings");
        await CostumAlerts.StartTime("01:45");
        await CostumAlerts.EndTime("01:45");

    });

});