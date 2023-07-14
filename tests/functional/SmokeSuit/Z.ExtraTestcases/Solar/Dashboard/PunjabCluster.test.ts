import test from '@lib/BaseTest';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, Dashboards }) => {
    await test.step(`Login to application`, async () => {
        await Dashboards.navigateToURL("https://cloud.prescinto.ai/v3/login");
        // await delay(2000);
             await Dashboards.loginToApplication("csm.stride@prescinto.ai", "GrowPrescinto@10x");
            //  await SmokeSolar.LogoutOfApplication();
        await delay(5000);
    });
    
    await test.step('Enter Punjab Cluster page', async () => {
        await homePage.NaviagetToMenu("Dashboards", "Punjab Cluster");
        await delay(10000);
        await Dashboards.TestPanjabCluster();
        await Dashboards.Assertion("1A Specific Power");
        await Dashboards.Assertion("1B AC Power");
        await Dashboards.Assertion("2A AC Power");
        await Dashboards.Assertion("Active Power");
    }); 
    
    await Dashboards.LogoutOfApplication(); 
});