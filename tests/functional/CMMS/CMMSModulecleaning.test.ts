import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import { testConfig } from '../../../testConfig';
import { workData } from '../../resources/CMMS/ModuleCleaningData';



function delay(time) {
  return new Promise(function(resolve) {
      setTimeout(resolve, time)
  });
}

test("Scenario 1 automation", async ({ loginPage, homePage, modulecleaningpage,cmmspage,workorderpage }) => {

  await test.step(`Login to application`, async () => {
      await loginPage.navigateToURL();
     await loginPage.loginToApplication();
  });
 
  await test.step('Create Work Order Under CMMS ', async () => {

      await homePage.NaviagetToMenu(9, "Module Cleaning Cycle");
      await delay(5000);
      //ADD
     await cmmspage.Filter();
    await modulecleaningpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
     await modulecleaningpage.ClickonCycleSearchButton();
   
      await cmmspage.ClickAddButton();
      await modulecleaningpage.AddProjectFromDropdown(workData.workorder[0].Project);
      await modulecleaningpage.AddCycleName(workData.workorder[0].CycleName);
      await modulecleaningpage.AddCycleDetails(workData.workorder[0].CycleDetails);
      await modulecleaningpage.ClickonCalenderBtn("ScheduledStartDate",workData.workorder[0].ScheduledStartDate);
      await modulecleaningpage.ClickonCalenderBtn("ScheduledEndDate",workData.workorder[0].ScheduledEndDate);
      await modulecleaningpage.ClickOnUserSearchBtn("Assigned To");
      await cmmspage.AddUsers(workData.workorder[0].AssignedTo);
      await modulecleaningpage.ClickOnUserSearchBtn("Approver");
      await cmmspage.AddUsers(workData.workorder[0].Approver);
      await modulecleaningpage.ClickOnSearchBtn("Crew",workData.workorder[0].Crew1);
      await modulecleaningpage.AddCyclePlanDetails(workData.workorder[0].AssetName,workData.workorder[0].AssetCode);
      await modulecleaningpage.CheckNoofTables("0");
      await modulecleaningpage.savebeforeplanneddate();
    
      await modulecleaningpage.Addplanned_date(workData.workorder[0].AssetName,workData.workorder[0].planned_date);
    await cmmspage.Save();

    //FILTER
    await cmmspage.Filter();
    await modulecleaningpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
    await modulecleaningpage.GiveCycleName(workData.workorder[0].CycleName);
    await modulecleaningpage.ClickonCycleSearchButton();
        
    
      await cmmspage.filterfromcolumn("AssignedToName",workData.workorder[0].AssignedTo);
     
      await modulecleaningpage.CheckModuleCleaningCycleName(workData.workorder[0].CycleName);
      await modulecleaningpage.CheckModuleCleaningCycleApprover(workData.workorder[0].Approver);
      await modulecleaningpage.ClickoniButton(workData.workorder[0].CycleName);
      await modulecleaningpage.CheckModuleCleaningCycleAsset(workData.workorder[0].rowindex,workData.workorder[0].AssetName);
       
    await cmmspage.View();


    //EDIT
    await cmmspage.Edit();
   
    await modulecleaningpage.ClickonCalenderBtn("ScheduledStartDate",workData.workorder[0].EditScheduledStartDate);
    await modulecleaningpage.ClickonCalenderBtn("ScheduledEndDate",workData.workorder[0].EditScheduledEndDate);
      await modulecleaningpage.Addplanned_date(workData.workorder[0].AssetName,workData.workorder[0].Editplanned_date);
    
    await cmmspage.Save();

    //DUPLICATE
  await cmmspage.Filter();
  await modulecleaningpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
    await modulecleaningpage.GiveCycleName(workData.workorder[0].CycleName);
  await modulecleaningpage.ClickonCycleSearchButton();
    await modulecleaningpage.ClickonDuplicateCycle();

   
    await modulecleaningpage.AddProjectFromDropdown(workData.workorder[0].Project);
    await modulecleaningpage.AddCycleName(workData.workorder[0].DuplicateCycleName);
    await modulecleaningpage.AddCycleDetails(workData.workorder[0].DuplicateCycleDetails);
    await modulecleaningpage.ClickonCalenderBtn("ScheduledStartDate",workData.workorder[0].DuplicateScheduledStartDate);
    await modulecleaningpage.ClickonCalenderBtn("ScheduledEndDate",workData.workorder[0].DuplicateScheduledEndDate);
   
    await modulecleaningpage.ClickOnUserSearchBtn("Assigned To");
      await cmmspage.AddUsers(workData.workorder[0].DuplicateAssignedTo);
      await modulecleaningpage.ClickOnUserSearchBtn("Approver");
      await cmmspage.AddUsers(workData.workorder[0].DuplicateApprover);
    
   
  
    await modulecleaningpage.Addplanned_date(workData.workorder[0].AssetName,workData.workorder[0].Duplicateplanned_date);
   
    await cmmspage.Save();

    await cmmspage.Filter();
      await modulecleaningpage.SelectfromfilterDropdown("Project",workData.workorder[0].DuplicateProject);
      await modulecleaningpage.GiveCycleName(workData.workorder[0].DuplicateCycleName);
      await modulecleaningpage.ClickonCycleSearchButton();
      await modulecleaningpage.CheckModuleCleaningCycleName(workData.workorder[0].DuplicateCycleName);
      await cmmspage.Delete();

    });
      await test.step('Sorting and columnlevel oprtns in MC Cycle  Under CMMS ', async () => {

        await cmmspage.Filter();
        await modulecleaningpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
        await modulecleaningpage.GiveCycleName(" ");
        await modulecleaningpage.ClickonCycleSearchButton();
        await cmmspage.sortandColumnlvloprtns("ProjectName","Project");
        await cmmspage.filterfromcolumn("AssignedToName",workData.workorder[0].AssignedTo);
        await cmmspage.Removefilterfromcolumn("AssignedToName");
        await cmmspage.sortColumn("ScheduledStartDate");

          });

    await test.step('Cancel Module Cleaning Cycle  Under CMMS ', async () => {
      await cmmspage.Filter();
      await modulecleaningpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
      await modulecleaningpage.GiveCycleName(workData.workorder[0].CycleName);
      await modulecleaningpage.ClickonCycleSearchButton();
      await cmmspage.Edit();
        await modulecleaningpage.AddProjectFromDropdown(workData.workorder[0].Project);
         
         await modulecleaningpage.ClickonCancel();

 });

    //EDIT IN WORKORDER PAGE

    await test.step('Edit from Work Order  Under CMMS ', async () => {
    await homePage.NaviagetToMenu(9, "Work Order");

    await workorderpage.findWorkorder("Year",workData.workorder[0].EditScheduledStartDate);
    await cmmspage.Filter();
    await workorderpage.filterProject("Project",workData.workorder[0].Project);
    await workorderpage.filterItem_dropdown("Classification","Module Cleaning");
    await workorderpage.filterItem_dropdown("State","Work not started");
    await workorderpage.FilterCrew(workData.workorder[0].Crew1);
    await workorderpage.filter_AssigneeApprover();
    await cmmspage.AddUsers(workData.workorder[0].AssignedTo);
    await workorderpage.ClickonApply();
  
   await workorderpage.ClickOnWorkorder(workData.workorder[0].FindParticularWorkorder);
    
   await cmmspage.Edit();
   await workorderpage.ChangeState("In Progress");
  
   await workorderpage.ClickAndAddButton("Cycle Plan Details");
     
     await workorderpage.Addcleanednoofmodule(workData.workorder[0].AssetName,workData.workorder[0].Plannedmodules);
     

   
 
  await modulecleaningpage.SaveWorkorder();   
}); 
 await cmmspage.Filter();
 await workorderpage.filterProject("Project",workData.workorder[0].Project);
 await workorderpage.filterItem_dropdown("Classification","Module Cleaning");
 await workorderpage.filterItem_dropdown("State","In Progress");
 await workorderpage.FilterCrew(workData.workorder[0].Crew1);
 await workorderpage.filter_AssigneeApprover();
 await cmmspage.AddUsers(workData.workorder[0].AssignedTo);
 await workorderpage.ClickonApply();
 await workorderpage.ClickOnWorkorder(workData.workorder[0].FindParticularWorkorder);

await cmmspage.Edit();
 await workorderpage.ChangeState("Completed");
 await workorderpage.ClickAndAddButton("Files");
   await modulecleaningpage.Uploadfile();
   await modulecleaningpage.savebeforeplanneddate();
   await workorderpage.AddWaterConsumption(workData.workorder[0].AddWaterConsumption);
   await workorderpage.AddCleaningMW(workData.workorder[0].AddCleaningMW);
   await workorderpage.AddReason(workData.workorder[0].AddReason);
  
 await workorderpage.ClickonRescheduleDate("Reschedule Start Date");
 await workorderpage.SelectDate(workData.workorder[0].RescheduledStartDate);
 await workorderpage.ClickonRescheduleDate("Reschedule End Date");
 await workorderpage.SelectDate(workData.workorder[0].RescheduledEndDate);
 
//    await workorderpage.ClickonTaskEditButton();
//    await workorderpage.SelectTask("Inverter 1 (Demo Site)");
//    await workorderpage.ChangeTaskStatus("Clean all modules","Completed");
//   await workorderpage.TaskStateSave();
//   await workorderpage.ClickonTaskEditButton();
//   await workorderpage.SelectTask("ASSET_1234");
//   await workorderpage.ChangeTaskStatus("Clean all modules","Completed");
//  await workorderpage.TaskStateSave();
//  await workorderpage.ClickonTaskEditButton();
//  await workorderpage.SelectTask("Test-123");
//  await workorderpage.ChangeTaskStatus("Clean all modules","Completed");
//await workorderpage.TaskStateSave();

await workorderpage.RescheduledAssignedToSearchButton();
await cmmspage.AddUsers(workData.workorder[0].RescheduledAssignedTo);
await workorderpage.RescheduledApproverSearchButton();
await cmmspage.AddUsers(workData.workorder[0].RescheduledApprover);



await modulecleaningpage.SaveWorkorder();

await workorderpage.findWorkorder("Year",workData.workorder[0].RescheduledStartDate);
await cmmspage.Filter();
await workorderpage.filterProject("Project",workData.workorder[0].Project);

await workorderpage.filterItem_dropdown("State","Work not started");
await workorderpage.FilterCrew(workData.workorder[0].Crew1);
await workorderpage.filter_AssigneeApprover();
await cmmspage.AddUsers(workData.workorder[0].RescheduledAssignedTo);
await workorderpage.ClickonApply();

await workorderpage.ClickOnWorkorder(workData.workorder[0].FindParticularWorkorder);
await workorderpage.ClickonCancel();




  });
 