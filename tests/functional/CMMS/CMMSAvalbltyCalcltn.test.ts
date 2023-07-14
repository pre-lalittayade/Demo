import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import { AvalbltyCalcPage } from '@pages/CMMS/AvalbltyCaltnPage';
import { testConfig } from '../../../testConfig';
// import { testData } from '../../../tests/testData/EHSData';



function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }
  
 test(" Scenario 21 automation", async ({ loginPage, homePage,avalbltycalcltnpage,cmmspage }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
       await loginPage.loginToApplication();
    });

    await test.step('Filter ERP API  Under CMMS ', async () => {
        await delay(2000);

        await homePage.NaviagetToMenu(9, "Availability Calculation");
        await delay(5000);

        await avalbltycalcltnpage.ClickOnFilter();

        await avalbltycalcltnpage.AddProject();

        await avalbltycalcltnpage.SelectFromdropdown("Capsol Energy");
        await avalbltycalcltnpage.Filterfromdate("4-Feb-2023");
        await avalbltycalcltnpage.FilterTodate("20-Feb-2023");
        await avalbltycalcltnpage.FilterSearch();
        
    //     await avalbltycalcltnpage.SelectCheckBox("10-Feb-2023");
    //     await avalbltycalcltnpage.ClickonCalculateBtn();
    //      await delay(3000);

     });
    // await test.step('View the Availability Calculation', async () => { 

        await avalbltycalcltnpage.viewTheAvailabilityCalculation("10-Feb-2023");
        await cmmspage.View();
        await delay(3000);
    //    await cmmspage.ClickCancelButton();

        await avalbltycalcltnpage.viewTheAvailabilityCalculation("10-Feb-2023");
        await avalbltycalcltnpage.View();
    //     await delay(5000);

    //  });

    await test.step('Sorting and columnlevel oprtns', async () => {
        
        await delay(3000);
        await avalbltycalcltnpage.sortandColumnlvloprtns("FromDate","Grid Loss");
        await cmmspage.sortColumn("FromDate");
        await avalbltycalcltnpage.filterfromcolumn("FromDate","2023-02-12");
    
       
        await delay(2000);

    });

    await test.step('Check the calculation', async () => {
    await avalbltycalcltnpage.CheckCalculatedValues("Plant Availability");
    await avalbltycalcltnpage.CheckCalculatedValues("Grid Availability");
    await avalbltycalcltnpage.CheckCalculatedValues("Breakdown Loss");
    await avalbltycalcltnpage.CheckCalculatedValues("Grid Loss");
    await avalbltycalcltnpage.CheckCalculatedValues("Generation Time");

    });


});