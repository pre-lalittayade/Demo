import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
// import * as data from "../"
function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, EnergyStorage }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await delay(5000);
    });

    await test.step('Entering On Dashboard', async () => {
        // await homePage.NaviagetToMenu(3, "");
        await EnergyStorage.EnergyStorage_Btn();
        await EnergyStorage.CheckPowerRating();
        await EnergyStorage.ShortNameMenu();
        await EnergyStorage.EnterNameFor_Filter("POC");
        await EnergyStorage.clickOnFirstElement();
        await EnergyStorage.CheckEnergyRating();
        await EnergyStorage.ShortNameMenu();
        await EnergyStorage.EnterNameFor_Filter("Sub");
        await EnergyStorage.clickOnFirstElement();
        await EnergyStorage.CheckSubgroupVoltage();
      //  // await EnergyStorage.ShortNameMenu();
      //  // await EnergyStorage.EnterNameFor_Filter("EB-01");
        await EnergyStorage.clickOnElement("Prethos ");
        await EnergyStorage.BlockDropdown("Clipper");
        await EnergyStorage.CheckBlockVtg();
        // await EnergyStorage.ShortNameMenu();
        await EnergyStorage.BlockDropdown("Prethos");
        await EnergyStorage.CheckBlockVtg();
        await EnergyStorage.ShortNameMenu();
        await EnergyStorage.EnterNameFor_Filter("Prethos");
        await EnergyStorage.clickOnFirstElement();
        
        await EnergyStorage.BlockDropdown("Prethos|ESA2");
        await EnergyStorage.clickOnFirstElement();
       
    });

});