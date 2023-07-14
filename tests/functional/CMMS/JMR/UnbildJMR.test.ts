import test from '@lib/BaseTest';
import { BildJMRObject } from '@objects/CMMS/BildJMRObject';
import { testConfig } from '../../../../testConfig'
import { JMRData } from "../../../resources/CMMS/JMR_Data"
// import * as data1 from "../resources/Data.json"

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
//Staging
test("Scenario 1 automation", async ({ loginPage, homePage, BildJMR }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
    });

    await test.step('Enter Costum Alerts page', async () => {
        await homePage.NaviagetToMenu(9, "Joint Meter Reading");

        await BildJMR.AddButton(JMRData.AddButton);
        await BildJMR.AddProject(JMRData.AddProject);
        await BildJMR.BildUnbildUnitCheckbox();
        await BildJMR.DateButton(JMRData.BillingDateButton);
        await BildJMR.SelectDate(JMRData.BillingDate);
        await BildJMR.ScheduleStartDateButton();
        await BildJMR.SelectDate(JMRData.ScheduledStartDate);
        await BildJMR.ScheduleEndDateButton();
        await BildJMR.SelectDate(JMRData.ScheduledEndDate);
        await BildJMR.SearchButton(JMRData.AssignedToSearchButton);
        await BildJMR.AddUser(JMRData.AddAssignedToUser1);
        await BildJMR.SearchButton(JMRData.ApproverSearchButton);
        await BildJMR.AddUser(JMRData.AddApproverUser1);
        // facing issue in scroll down the page for selecting user from Assigned to And Approver

        // Adding Assets
        await BildJMR.AddAssetButton();
        await BildJMR.AssetsName(JMRData.AssetsName, JMRData['AssetsName_Value-1']);
        await BildJMR.AssetsCode(JMRData.AssetsCode, JMRData['AssetsCode_Value-1']);
        await BildJMR.AssetSearchAndReset(JMRData.AssetSearch);
        await BildJMR.SelectingAssets(JMRData['AssetsName_Value-1']);
        await BildJMR.AssetSearchAndReset(JMRData.AssetReset);
        //
        await BildJMR.AssetsName(JMRData.AssetsName, JMRData['AssetsName_Value-2']);
        // await BildJMR.AssetsCode(JMRData.AssetsCode,JMRData['AssetsCode_Value-2']);
        await BildJMR.AssetSearchAndReset(JMRData.AssetSearch);
        await BildJMR.SelectingAssets(JMRData['AssetsName_Value-2']);
        await BildJMR.AssetSearchAndReset(JMRData.AssetReset);
        //
        await BildJMR.AssetsName(JMRData.AssetsName, JMRData['AssetsName_Value-3']);
        // await BildJMR.AssetsCode(JMRData.AssetsCode,JMRData['AssetsCode_Value-3']);
        await BildJMR.AssetSearchAndReset(JMRData.AssetSearch);
        await BildJMR.SelectingAssets(JMRData['AssetsName_Value-3']);
        await BildJMR.AssetSearchAndReset(JMRData.AssetReset);
        //
        await BildJMR.AssetsName(JMRData.AssetsName, JMRData['AssetsName_Value-4']);
        // await BildJMR.AssetsCode(JMRData.AssetsCode,JMRData['AssetsCode_Value-4']);
        await BildJMR.AssetSearchAndReset(JMRData.AssetSearch);
        await BildJMR.SelectingAssets(JMRData['AssetsName_Value-4']);
        await BildJMR.AssetSearchAndReset(JMRData.AssetReset);
        // For clicking on Apply button
        await BildJMR.AssetApplyButton();
        // For Adding values in bildunit and deemed generation
        await BildJMR.AddBilldUnitAndDeemedGeneration(JMRData['AssetsName_Value-1'], JMRData['BilldUnit-1'], JMRData['DeemedGeneration-1']);
        await BildJMR.AddBilldUnitAndDeemedGeneration(JMRData['AssetsName_Value-2'], JMRData['BilldUnit-2'], JMRData['DeemedGeneration-2']);
        await BildJMR.AddBilldUnitAndDeemedGeneration(JMRData['AssetsName_Value-3'], JMRData['BilldUnit-3'], JMRData['DeemedGeneration-3']);
        await BildJMR.AddBilldUnitAndDeemedGeneration(JMRData['AssetsName_Value-4'], JMRData['BilldUnit-4'], JMRData['DeemedGeneration-4']);
        // For deleting any of added assets
        await BildJMR.AssetDeletBtn(JMRData['AssetsName_Value-4']);
        //For saving assets
        await BildJMR.MenuButtons(JMRData.SaveButton);
        await BildJMR.SavePopUp(JMRData.PopUpYes);
        await BildJMR.SavePopUp(JMRData.PopUpOk);
        // For clicking on filter button
        //spv
        await BildJMR.FilterBtn();
        // await BildJMR.FilterDropdownLables(JMRData.FilterSPVName, JMRData['SPVName-1']);
        //location
        // await BildJMR.FilterDropdownLables(JMRData.FilterLocation,JMRData['Location-1']);
        // project
        await BildJMR.FilterDropdownProject(JMRData.FilterProject, JMRData['Project-1']);
        // Assigned To
        await BildJMR.FilterDropdownLables(JMRData.AssignedToSearchButton, JMRData.AddAssignedToUser2);
        // Approver
        await BildJMR.FilterDropdownApprover(JMRData.ApproverSearchButton, JMRData.AddApproverUser2); //Not working
        // Billing Month
        // await BildJMR.FilterDropdownBilingMonth(JMRData.FilterBillingMonthBtn,JMRData.BillingMonthBtn1,JMRData.BillingDate);
        // Status
        // await BildJMR.FilterDropdownStatus(JMRData.FilterStatus,JMRData.FilterStatusValue1);
        // Refresh and Save Button
        await BildJMR.MenuButtons(JMRData.Autorenew);
        // await BildJMR.MenuButtons(JMRData.FilterRefresh)

        // For View and Edit JMR
        // await BildJMR.SelectJMRForEdit(JMRData['SelectJMRForEdit-1']);  // For clicking if we need to select morethan 1 project.
        // For view And Edit Button
        await BildJMR.MenuButtons(JMRData.ViewButton);
        await BildJMR.MenuButtons(JMRData.EditButton);
        await BildJMR.BildUnbildUnitCheckbox();
        await BildJMR.SearchButton(JMRData.AssignedToSearchButton);
        await BildJMR.AddUser(JMRData.AddAssignedToUser3);
        await BildJMR.SearchButton(JMRData.ApproverSearchButton);
        await BildJMR.AddUser(JMRData.EditApproverUser1);  //Not Working
        await BildJMR.MenuButtons(JMRData.SaveButton);
        await BildJMR.SavePopUp(JMRData.PopUpYes);
        await BildJMR.SavePopUp(JMRData.PopUpOk);
        // Again For filtering 
        await BildJMR.FilterBtn();
        await BildJMR.MenuButtons(JMRData.Refresh);
        // Assigned To
        // await BildJMR.FilterDropdownLables(JMRData.AssignedToSearchButton,JMRData.AddAssignedToUser1);
        // Approver
        await BildJMR.FilterDropdownApprover(JMRData.ApproverSearchButton, JMRData.EditApproverUser1);
        // Refresh and Save Button
        await BildJMR.MenuButtons(JMRData.Autorenew);
        // Downlode JMR Excle Sheet
        await BildJMR.MenuButtons(JMRData.DownloadButton);
        // Delete Button
        await BildJMR.MenuButtons(JMRData.DeleteButton);
        await BildJMR.SavePopUp(JMRData.PopUpYes);
        await BildJMR.SavePopUp(JMRData.PopUpOk);
        // again filter reset and search
        await BildJMR.FilterBtn();
        await BildJMR.MenuButtons(JMRData.Refresh);
        await BildJMR.SearchBtn();

        // For Bulk Update
        // await BildJMR.SelectJMRForBulkUpdate("JMRB.AA0011S");
        await BildJMR.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-1']);
        await BildJMR.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-2']);
        await BildJMR.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-3']);
        await BildJMR.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-4']);
        await BildJMR.SelectJMRForBulkUpdate(JMRData['BulkUpdateJMRCode-5']);
        // clicking on Bulk update btn
        await BildJMR.BulkUpdateBtn(JMRData.BulkUpdateButton);
        // editing the parameters which we want to update in bulk
        // Billing Month
        await BildJMR.FilterDropdownBilingMonth(JMRData.BulkUpdateBillingMonthBtn,JMRData.BillingMonthBtn1,JMRData.BillingDate);
        await BildJMR.UpdateDropdownLables(JMRData.Status, JMRData.StatusValue1);
        await BildJMR.UpdateDropdownLables(JMRData.ReadingType, JMRData['ReadingTypeValue-1'])
        await BildJMR.SearchButton(JMRData.AssignedToSearchButton);
        await BildJMR.AddUser(JMRData.BulkUpdateAssignedToUser1);
        await BildJMR.SearchButton(JMRData.ApproverSearchButton);
        await BildJMR.AddUser(JMRData.BulkUpdateAssignedToUser2);
        await BildJMR.BulkUpdateScheduleStartEndDate(JMRData.ScheduleStartButton);
        await BildJMR.SelectDate(JMRData.ScheduledStartDate);
        await BildJMR.BulkUpdateScheduleStartEndDate(JMRData.ScheduleEndButton);
        await BildJMR.SelectDate(JMRData.ScheduledEndDate);
        await BildJMR.BulkUpateRemark(JMRData.Remark);
        await BildJMR.MenuButtons(JMRData.SaveButton);
        await BildJMR.SavePopUp(JMRData.PopUpYes);
    });
});