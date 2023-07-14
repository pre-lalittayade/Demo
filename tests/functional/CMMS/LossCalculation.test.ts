import test from '@lib/BaseTest';
import { BildJMRObject } from '@objects/CMMS/BildJMRObject';
import { testConfig } from '../../../testConfig'
import { Data } from "../../resources/CMMS/LossCalculations_Data"
// import * as data1 from "../resources/Data.json"

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test("Scenario 1 automation", async ({ loginPage, homePage, LossCalculation }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
    });

    await test.step('Enter Costum Alerts page', async () => {
        await homePage.NaviagetToMenu(9, "Loss Calculation");
        await delay(5000);
        // await LossCalculation.CheckBox(Data.checkboxvalue);
        await LossCalculation.FilterButton(Data.project);
        await LossCalculation.FilterProjectCalculated(Data.project, Data.projectname);
        // await LossCalculation.BreakdownStartDate();
        // await LossCalculation.SelectDate(Data.BD_startdate);
        // await LossCalculation.BreakdownEndDate();
        // await LossCalculation.SelectDate(Data.BD_enddate);
        // await LossCalculation.FilterProjectCalculated(Data.calculated,Data.calculatedvalue);
        await LossCalculation.FilterSearch_RefreshButton(Data.search_refresh);
        await LossCalculation.CheckBox(Data.checkboxvalue);
        await LossCalculation.LossCalculations_Button();
        await LossCalculation.CheckBox(Data.checkboxvalue);
        await LossCalculation.ClickOnRow(Data.checkboxvalue);
        await LossCalculation.View_CancleButton(Data.viewbtn);
        await LossCalculation.View_CancleButton(Data.canclebtn);
        await LossCalculation.Yes_No_Button(Data.yesbtn);
    });
});

// remaining for calculiting loss by formula and checking by assertion 