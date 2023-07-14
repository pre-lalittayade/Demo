import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import { testConfig } from '../../../testConfig';
import { workData } from '../../resources/CMMS/GrasscuttingData';



function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }
  
 test("Scenario 1 automation", async ({ loginPage, homePage, grasscuttingpage,cmmspage,workorderpage }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
       await loginPage.loginToApplication();
    });
   
    await test.step('Create Grass Cutting Cycle  Under CMMS ', async () => {

        await homePage.NaviagetToMenu(9, "Grass Cutting Cycle");
        await delay(5000);

        
       
   
     await cmmspage.Filter();
      await grasscuttingpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
      await grasscuttingpage.ClickonCycleSearchButton();
        await cmmspage.ClickAddButton();
        await grasscuttingpage.AddProjectFromDropdown(workData.workorder[0].Project);
        await grasscuttingpage.AddCycleName(workData.workorder[0].CycleName);
        await grasscuttingpage.AddCycleDetails(workData.workorder[0].CycleDetails);
        await grasscuttingpage.ClickonCalenderBtn("ScheduledStartDate",workData.workorder[0].ScheduledStartDate);
        await grasscuttingpage.ClickonCalenderBtn("ScheduledEndDate",workData.workorder[0].ScheduledEndDate);
        await grasscuttingpage.ClickOnSearchBtn("Assigned To");
        await cmmspage.AddUsers(workData.workorder[0].AssignedTo);
        await grasscuttingpage.ClickOnSearchBtn("Approver");
        await cmmspage.AddUsers(workData.workorder[0].Approver);
        await grasscuttingpage.ClickOnCrewSearchBtn("Crew",workData.workorder[0].Crew);
        await grasscuttingpage.AddCyclePlanDetails(workData.workorder[0].AssetName,workData.workorder[0].AssetCode);
        await grasscuttingpage.CheckNoofTables("0");
        await grasscuttingpage.savebeforeplanneddate();
      
        await grasscuttingpage.Addplanned_date(workData.workorder[0].AssetName,workData.workorder[0].planned_date);
      await cmmspage.Save();
      });
    await test.step('Filter and Edit Grass Cutting Cycle  Under CMMS ', async () => {
         await cmmspage.Filter();
        await grasscuttingpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
        await grasscuttingpage.GiveCycleName(workData.workorder[0].CycleName);
        await grasscuttingpage.ClickonCycleSearchButton();
       
        //await cmmspage.sortColumn("ScheduledStartDate");
        await cmmspage.filterfromcolumn("AssignedToName",workData.workorder[0].AssignedTo);
       
        await grasscuttingpage.CheckGrasscuttingCycleName(workData.workorder[0].CycleName);
        await grasscuttingpage.CheckGrasscuttingCycleApprover(workData.workorder[0].Approver);
        await grasscuttingpage.ClickoniButton(workData.workorder[0].CycleName);
        await grasscuttingpage.CheckGrasscuttingCycleAsset(workData.workorder[0].rowindex,workData.workorder[0].AssetName);
         
        await cmmspage.View();
        await cmmspage.Edit();
        await grasscuttingpage.AddCycleName(workData.workorder[0].EditCycleName);
        await grasscuttingpage.ClickonCalenderBtn("ScheduledStartDate",workData.workorder[0].EditScheduledStartDate);
        await grasscuttingpage.ClickonCalenderBtn("ScheduledEndDate",workData.workorder[0].EditScheduledEndDate);
        await grasscuttingpage.Addplanned_date(workData.workorder[0].AssetName,workData.workorder[0].Editplanned_date);
 
        await cmmspage.Save();
     });
    await test.step('Create Duplicate and Delete GC Cycle  Under CMMS ', async () => {
      await cmmspage.Filter();
      await grasscuttingpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
      await grasscuttingpage.GiveCycleName(workData.workorder[0].EditCycleName);
      await grasscuttingpage.ClickonCycleSearchButton();
        await grasscuttingpage.ClickonDuplicateCycle();

       
        await grasscuttingpage.AddProjectFromDropdown(workData.workorder[0].DuplicateProject);
        await grasscuttingpage.AddCycleName(workData.workorder[0].DuplicateCycleName);
        await grasscuttingpage.AddCycleDetails(workData.workorder[0].DuplicateCycleDetails);
        await grasscuttingpage.ClickonCalenderBtn("ScheduledStartDate",workData.workorder[0].DuplicateScheduledStartDate);
        await grasscuttingpage.ClickonCalenderBtn("ScheduledEndDate",workData.workorder[0].DuplicateScheduledEndDate);
        await grasscuttingpage.ClickOnSearchBtn("Assigned To");
        await cmmspage.AddUsers(workData.workorder[0].DuplicateAssignedTo);
        await grasscuttingpage.ClickOnSearchBtn("Approver");
        await cmmspage.AddUsers(workData.workorder[0].DuplicateApprover);
        await grasscuttingpage.ClickOnCrewSearchBtn("Crew",workData.workorder[0].DuplicateCrew);
       // await grasscuttingpage.AddCyclePlanDetails("Test-123","IN.PRES.DEMO.AB1244E");
        await grasscuttingpage.Addplanned_date(workData.workorder[0].DuplicateAssetName,workData.workorder[0].Duplicateplanned_date);
        //await grasscuttingpage.Addplanned_date("Test-123","22-Nov-2023");
        await cmmspage.Save();
        
        //filter duplicate///
        await cmmspage.Filter();
        await grasscuttingpage.SelectfromfilterDropdown("Project",workData.workorder[0].DuplicateProject);
        await grasscuttingpage.GiveCycleName(workData.workorder[0].DuplicateCycleName);
        await grasscuttingpage.ClickonCycleSearchButton();
        await grasscuttingpage.CheckGrasscuttingCycleName(workData.workorder[0].DuplicateCycleName);
        await cmmspage.Delete();
         });
   await test.step('Sorting and columnlevel oprtns in GC Cycle  Under CMMS ', async () => {

        await cmmspage.Filter();
        await grasscuttingpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
        await grasscuttingpage.GiveCycleName(" ");
        await grasscuttingpage.ClickonCycleSearchButton();
        await cmmspage.sortandColumnlvloprtns("ProjectName","Project");
        await cmmspage.filterfromcolumn("AssignedToName",workData.workorder[0].AssignedTo);
        await cmmspage.Removefilterfromcolumn("AssignedToName");
        await cmmspage.sortColumn("ScheduledStartDate");

    });

    await test.step('Cancel Grass Cutting Cycle  Under CMMS ', async () => {
      await cmmspage.Filter();
      await grasscuttingpage.SelectfromfilterDropdown("Project",workData.workorder[0].Project);
      await grasscuttingpage.GiveCycleName(workData.workorder[0].EditCycleName);
      await grasscuttingpage.ClickonCycleSearchButton();
      await cmmspage.Edit();
        await grasscuttingpage.AddProjectFromDropdown(workData.workorder[0].Project);
        await grasscuttingpage.AddCycleName(workData.workorder[0].EditCycleName);

         await grasscuttingpage.ClickonCancel();

  });
    await test.step('Check and complete GC cycle in Workorder Under CMMS ', async () => {
        await homePage.NaviagetToMenu(9, "Work Order");
  
         await workorderpage.findWorkorder("Year",workData.workorder[0].EditScheduledStartDate);
       await cmmspage.Filter();
        await workorderpage.filterProject("Project",workData.workorder[0].Project);
        
        await workorderpage.filterItem_dropdown("State","Work not started");
        await workorderpage.FilterCrew(workData.workorder[0].Crew);
        await workorderpage.filter_AssigneeApprover();
        await cmmspage.AddUsers(workData.workorder[0].AssignedTo);
        await workorderpage.ClickonApply();
      
       await workorderpage.ClickOnWorkorder(workData.workorder[0].FindParticularWorkorder);

       
        
       await cmmspage.Edit();
       await workorderpage.ChangeState("In Progress");
       await workorderpage.ClickAndAddButton("Cycle Plan Details");
       //await workorderpage.Addcleanednoofmodule("Test-123","2");
       await workorderpage.Addcleanednoofmodule(workData.workorder[0].AssetName,workData.workorder[0].Plannedmodules);
       
     await grasscuttingpage.SaveWorkorder();  
      
    await cmmspage.Filter();
     await workorderpage.filterProject("Project",workData.workorder[0].Project);
     
     await workorderpage.filterItem_dropdown("State","In Progress");
     await workorderpage.FilterCrew(workData.workorder[0].Crew);
     await workorderpage.filter_AssigneeApprover()
     await cmmspage.AddUsers(workData.workorder[0].AssignedTo);
     await workorderpage.ClickonApply();
     await workorderpage.ClickOnWorkorder(workData.workorder[0].FindParticularWorkorder);
     await cmmspage.Edit();
     await workorderpage.ChangeState("Completed");

     await workorderpage.ClickAndAddButton("Files");
       await grasscuttingpage.Uploadfile();
       await grasscuttingpage.savebeforeplanneddate();
       await workorderpage.SelectNonPVarea(workData.workorder[0].NonPVarea);
       await workorderpage.ClickonGrasscuttingReason(workData.workorder[0].Reason);
     await workorderpage.ClickonRescheduleDate("Reschedule Start Date");
     await workorderpage.SelectDate(workData.workorder[0].RescheduleStartDate);
     await workorderpage.ClickonRescheduleDate("Reschedule End Date");
     await workorderpage.SelectDate(workData.workorder[0].RescheduleEndDate);

     await workorderpage.RescheduledAssignedToSearchButton();
  await cmmspage.AddUsers(workData.workorder[0].RescheduledAssignedTo);
  await workorderpage.RescheduledApproverSearchButton();
  await cmmspage.AddUsers(workData.workorder[0].RescheduledApprover);
     await grasscuttingpage.SaveWorkorder();
     
     //find Rescheduled Workorder//
     await workorderpage.findWorkorder("Year",workData.workorder[0].RescheduleStartDate);
     await cmmspage.Filter();
     await workorderpage.filterProject("Project",workData.workorder[0].Project);
     
     await workorderpage.filterItem_dropdown("State","Work not started");
     await workorderpage.FilterCrew(workData.workorder[0].Crew);
     await workorderpage.filter_AssigneeApprover();
     await cmmspage.AddUsers(workData.workorder[0].RescheduledAssignedTo);
     await workorderpage.ClickonApply();
   
    await workorderpage.ClickOnWorkorder(workData.workorder[0].FindParticularWorkorder);
    await workorderpage.ClickonCancel();
    
    //  await workorderpage.ClickonTaskEditButton();
    //  await workorderpage.ChangeTaskStatus("Clean all modules","Completed");
   // await workorderpage.TaskStateSave();
     
   
   
  
   

    

    });
   
 });