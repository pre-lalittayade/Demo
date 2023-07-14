import test from '@lib/BaseTest';
import { JMRObject } from '@objects/Regration/JMRObject';
import { testConfig } from '../../../testConfig'
import { JMRData } from "../../resources/Regration/JMRData"
// import * as data1 from "../resources/Data.json"

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, JMRRegration }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
    });

    await test.step('Enter JMR', async () => {
        await homePage.NaviagetToMenu(9, "Joint Meter Reading");

        for (let i = 0; i < 50; i++) {

            await JMRRegration.AddButton(JMRData.AddButton);
            await JMRRegration.AddProject(JMRData.AddProject);
            await JMRRegration.DateButton(JMRData.BillingDateButton);
            await JMRRegration.SelectDate(JMRData.BillingDate);
            await JMRRegration.ScheduleStartDateButton();
            await JMRRegration.SelectDate(JMRData.ScheduledStartDate);
            await JMRRegration.ScheduleEndDateButton();
            await JMRRegration.SelectDate(JMRData.ScheduledEndDate);
            await JMRRegration.JMRStartDateButton();
            await JMRRegration.SelectDate(JMRData.JMRStartDate);
            await JMRRegration.JMREndDateButton();
            await JMRRegration.SelectDate(JMRData.JMREndDate);
            await JMRRegration.SearchButton(JMRData.AssignedToSearchButton);
            await JMRRegration.AddUser(JMRData.AddAssignedToUser1);
            await JMRRegration.SearchButton(JMRData.ApproverSearchButton);
            await JMRRegration.AddUser(JMRData.AddApproverUser1);
            // facing issue in scroll down the page for selecting user from Assigned to And Approver

            // Adding Assets
            await JMRRegration.AddAssetButton();
            await JMRRegration.AssetsName(JMRData.AssetsName, JMRData['AssetsName_Value-1']);
            await JMRRegration.AssetsCode(JMRData.AssetsCode, JMRData['AssetsCode_Value-1']);
            await JMRRegration.AssetSearchAndReset(JMRData.AssetSearch);
            await JMRRegration.SelectingAssets(JMRData['AssetsName_Value-1']);
            await JMRRegration.AssetSearchAndReset(JMRData.AssetReset);
            //
            await JMRRegration.AssetsName(JMRData.AssetsName, JMRData['AssetsName_Value-2']);
            // await BildJMR.AssetsCode(JMRData.AssetsCode,JMRData['AssetsCode_Value-2']);
            await JMRRegration.AssetSearchAndReset(JMRData.AssetSearch);
            await JMRRegration.SelectingAssets(JMRData['AssetsName_Value-2']);
            await JMRRegration.AssetSearchAndReset(JMRData.AssetReset);
            //
            await JMRRegration.AssetsName(JMRData.AssetsName, JMRData['AssetsName_Value-3']);
            // await BildJMR.AssetsCode(JMRData.AssetsCode,JMRData['AssetsCode_Value-3']);
            await JMRRegration.AssetSearchAndReset(JMRData.AssetSearch);
            await JMRRegration.SelectingAssets(JMRData['AssetsName_Value-3']);
            await JMRRegration.AssetSearchAndReset(JMRData.AssetReset);
            //
            await JMRRegration.AssetsName(JMRData.AssetsName, JMRData['AssetsName_Value-4']);
            // await BildJMR.AssetsCode(JMRData.AssetsCode,JMRData['AssetsCode_Value-4']);
            await JMRRegration.AssetSearchAndReset(JMRData.AssetSearch);
            await JMRRegration.SelectingAssets(JMRData['AssetsName_Value-4']);
            await JMRRegration.AssetSearchAndReset(JMRData.AssetReset);
            // For clicking on Apply button
            await JMRRegration.AssetApplyButton();
            // For Adding values in bildunit and deemed generation
            await JMRRegration.AddBilldUnitAndDeemedGeneration(JMRData['AssetsName_Value-1'], JMRData['BilldUnit-1'], JMRData['DeemedGeneration-1']);
            await JMRRegration.AddBilldUnitAndDeemedGeneration(JMRData['AssetsName_Value-2'], JMRData['BilldUnit-2'], JMRData['DeemedGeneration-2']);
            await JMRRegration.AddBilldUnitAndDeemedGeneration(JMRData['AssetsName_Value-3'], JMRData['BilldUnit-3'], JMRData['DeemedGeneration-3']);
            await JMRRegration.AddBilldUnitAndDeemedGeneration(JMRData['AssetsName_Value-4'], JMRData['BilldUnit-4'], JMRData['DeemedGeneration-4']);
            // For deleting any of added assets
            await JMRRegration.AssetDeletBtn(JMRData['AssetsName_Value-4']);
            // Uplode files
            await JMRRegration.FileButton();
            // await JMRRegration.UplodeButton();
            await JMRRegration.Uploadfile();
            //For saving assets
            await JMRRegration.MenuButtons(JMRData.SaveButton);
            await JMRRegration.SavePopUp(JMRData.PopUpYes);
            await JMRRegration.SavePopUp(JMRData.PopUpOk);
            

        }
        await loginPage.LogoutOfApplication();




        /* 
        // For clicking on filter button
        //spv
        await JMRRegration.FilterBtn();
        // await BildJMR.FilterDropdownLables(JMRData.FilterSPVName, JMRData['SPVName-1']);
        //location
        // await BildJMR.FilterDropdownLables(JMRData.FilterLocation,JMRData['Location-1']);
        // project
        await JMRRegration.FilterDropdownProject(JMRData.FilterProject, JMRData['Project-1']);
        // Assigned To
        await JMRRegration.FilterDropdownLables(JMRData.AssignedToSearchButton, JMRData.AddAssignedToUser2);
        // Approver
        await JMRRegration.FilterDropdownApprover(JMRData.ApproverSearchButton, JMRData.AddApproverUser2);
        // Billing Month
        // await BildJMR.FilterDropdownBilingMonth(JMRData.FilterBillingMonthBtn,JMRData.BillingMonthBtn1,JMRData.BillingDate);
        // Status
        // await BildJMR.FilterDropdownStatus(JMRData.FilterStatus,JMRData.FilterStatusValue1);
        // Refresh and Save Button
        await JMRRegration.MenuButtons(JMRData.Autorenew);
        // await BildJMR.MenuButtons(JMRData.FilterRefresh)

        // For View and Edit JMR
        // await BildJMR.SelectJMRForEdit(JMRData['SelectJMRForEdit-1']);  // For clicking if we need to select morethan 1 project.
        // For view And Edit Button
        await JMRRegration.MenuButtons(JMRData.ViewButton);
        await JMRRegration.MenuButtons(JMRData.EditButton);
        await JMRRegration.SearchButton(JMRData.ApproverSearchButton);
        await JMRRegration.AddUser(JMRData.EditApproverUser1);
        await JMRRegration.MenuButtons(JMRData.SaveButton);
        await JMRRegration.SavePopUp(JMRData.PopUpYes);
        await JMRRegration.SavePopUp(JMRData.PopUpOk);
        // Again For filtering 
        await JMRRegration.FilterBtn();
        await JMRRegration.MenuButtons(JMRData.Refresh);
        // Assigned To
        // await BildJMR.FilterDropdownLables(JMRData.AssignedToSearchButton,JMRData.AddAssignedToUser1);
        // Approver
        await JMRRegration.FilterDropdownApprover(JMRData.ApproverSearchButton, JMRData.EditApproverUser1);
        // Refresh and Save Button
        await JMRRegration.MenuButtons(JMRData.Autorenew);
        // Downlode JMR Excle Sheet
        await JMRRegration.MenuButtons(JMRData.DownloadButton);
        // Delete Button
        await JMRRegration.MenuButtons(JMRData.DeleteButton);
        await JMRRegration.SavePopUp(JMRData.PopUpYes);
        await JMRRegration.SavePopUp(JMRData.PopUpOk);
        // again filter reset and search
        await JMRRegration.FilterBtn();
        await JMRRegration.MenuButtons(JMRData.Refresh);
        await JMRRegration.SearchBtn();

        // For Bulk Update
        // await BildJMR.SelectJMRForBulkUpdate("JMRB.AA0011S");
        await JMRRegration.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-1']);
        await JMRRegration.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-2']);
        await JMRRegration.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-3']);
        await JMRRegration.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-4']);
        await JMRRegration.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-5']);
        // clicking on Bulk update btn
        await JMRRegration.BulkUpdateBtn(JMRData.BulkUpdateButton);
        // editing the parameters which we want to update in bulk
        // Billing Month
        await JMRRegration.FilterDropdownBilingMonth(JMRData.BulkUpdateBillingMonthBtn,JMRData.BillingMonthBtn1,JMRData.BillingDate);
        await JMRRegration.UpdateDropdownLables(JMRData.Status, JMRData.StatusValue1);
        await JMRRegration.UpdateDropdownLables(JMRData.ReadingType, JMRData['ReadingTypeValue-1'])
        await JMRRegration.SearchButton(JMRData.AssignedToSearchButton);
        await JMRRegration.AddUser(JMRData.BulkUpdateAssignedToUser1);
        await JMRRegration.SearchButton(JMRData.ApproverSearchButton);
        await JMRRegration.AddUser(JMRData.BulkUpdateAssignedToUser2);
        await JMRRegration.BulkUpdateScheduleStartEndDate(JMRData.ScheduleStartButton);
        await JMRRegration.SelectDate(JMRData.ScheduledStartDate);
        await JMRRegration.BulkUpdateScheduleStartEndDate(JMRData.ScheduleEndButton);
        await JMRRegration.SelectDate(JMRData.ScheduledEndDate);
        await JMRRegration.BulkUpateRemark(JMRData.Remark);
        await JMRRegration.MenuButtons(JMRData.SaveButton);
        await JMRRegration.SavePopUp(JMRData.PopUpYes);
        */
    });
});