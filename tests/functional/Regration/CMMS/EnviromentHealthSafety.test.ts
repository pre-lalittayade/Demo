import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import { EHSPage } from '@pages/Regration/CMMS/EHSPage';
import { testConfig } from '../../../../testConfig';
import { testData } from '../../../resources/Regration/CMMS/EHSData';
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
test("@Tes Enviroment Health Safety Page", async ({ loginPage, homePage, EnviromentHealthSafety, CommonMethods, page }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await CommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
    });

    await test.step('Download EHS Under CMMS ', async () => {
        await delay(2000);
        await homePage.NaviagetToMenu("CMMS", "Environment Health Safety");
        //sorting
    });
    await test.step('Checking Sorting Is Working', async () => {
        // Checking Sorting is working fine or not
        await CommonMethods.SortingAssertion("UAUCType");
    });
    await test.step(`Verify Excel`, async () => {

        // await delay(1000);
        await EnviromentHealthSafety.Downloadfile();
        await delay(2000);
        //    await EnviromentHealthSafety.openBrowser();
        await EnviromentHealthSafety.readExcel();
    });
    await test.step('Add EHS Under CMMS ', async () => {
        await CommonMethods.ClickAddButton();
        await EnviromentHealthSafety.AddProject();
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Project);
        await EnviromentHealthSafety.SelectObservationDate(testData.EHS[0].ObservationDate);
        await EnviromentHealthSafety.AddTypeofObservation();
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].TypeofObservation);
        await EnviromentHealthSafety.AddLocation();
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Location);
        await EnviromentHealthSafety.AddDescrption(testData.EHS[0].Description);
        await EnviromentHealthSafety.AddSeverity();
        await EnviromentHealthSafety.AddFromSeverityDropdown(testData.EHS[0].Severity);
        await EnviromentHealthSafety.Uploadfile(testData.EHS[0].Uploadfile);
        await CommonMethods.Save();
        await loginPage.LogoutOfApplication();
    });
    await test.step(`Login Again as Site incharge`, async () => {
        await loginPage.navigateToURL();
        await CommonMethods.loginToApplication("siteinchargeautomation@prescinto.ai", "SiteAuto@123");
        await delay(1000);
    });
    await test.step('site incharge account for facility audit', async () => {
        await homePage.NaviagetToMenu("CMMS", "Environment Health Safety");
        await delay(3000);
    });
    await test.step('Seprate Validations Of Filter Parameters', async () => {
        //seprate validations of filter parameters
        // Project Assertion
        await CommonMethods.Filter();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await EnviromentHealthSafety.ProjectAssertion(testData.EHS[0].Project);


        // Observation From Assertion
        await CommonMethods.Filter();
        await CommonMethods.Reset();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterObservationfromDate(testData.EHS[0].ObservationFrom);
        await EnviromentHealthSafety.filterObservationToDate(testData.EHS[0].ObservationTo);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await EnviromentHealthSafety.ObservationFromAssertion(testData.EHS[0].ObservationFrom, testData.EHS[0].ObservationTo);

        // Status From Assertion
        await CommonMethods.Filter();
        await CommonMethods.Reset();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterFromStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status1);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await EnviromentHealthSafety.scrollforstatus();
        await EnviromentHealthSafety.StatusAssertion(testData.EHS[0].Status1);
        await delay(2000);
        await CommonMethods.Filter();
        await CommonMethods.Reset();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterFromStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status2);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await EnviromentHealthSafety.StatusAssertion(testData.EHS[0].Status2);
        await delay(2000);
        await CommonMethods.Filter();
        await CommonMethods.Reset();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterFromStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status3);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await EnviromentHealthSafety.StatusAssertion(testData.EHS[0].Status3);
        await delay(2000);
        await CommonMethods.Filter();
        await CommonMethods.Reset();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterFromStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status4);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await EnviromentHealthSafety.StatusAssertion(testData.EHS[0].Status4);
    });

    await test.step('Checking Reset Button Is Working For Filter', async () => {
        //checking wether reset button is working or not
        await CommonMethods.Filter();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterObservationfromDate(testData.EHS[0].ObservationDate);
        await EnviromentHealthSafety.filterObservationToDate(testData.EHS[0].Targetdate);
        await EnviromentHealthSafety.filterFromStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status1);
        await CommonMethods.Reset();
        await EnviromentHealthSafety.CheckResetFuncationality("Automation Testing Plant");


    });

    await test.step(' Filter Parameters', async () => {

        // Filtering
        // await CommonMethods.Filter();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterObservationfromDate("1-Feb-2023");
        await EnviromentHealthSafety.filterObservationToDate("15-Feb-2023");
        await EnviromentHealthSafety.filterFromStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status1);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        // await CommonMethods.filterfromcolumn("ObserveUserName", testData.EHS[0].ObservedUsername);
        // await EnviromentHealthSafety.filterfromcolumn("Description", testData.EHS[0].Description);

        await EnviromentHealthSafety.ClickonEHSRow(testData.EHS[0].Description, testData.EHS[0].Status1);
        await delay(2000);
    });
    await test.step(' Checking Before Edit', async () => {
        // await CommonMethods.View();
        // await EnviromentHealthSafety.checkingedit(testData.EHS[0].Project, testData.EHS[0].TypeofObservation, testData.EHS[0].Location, testData.EHS[0].Description, testData.EHS[0].ObservedBy, testData.EHS[0].Severity, testData.EHS[0].Uploadfile);
        await CommonMethods.Edit();
        console.log(" ");
        await console.log(" --- Checking the fields before Edit --- ");
        console.log(" ");
        await EnviromentHealthSafety.checkingedit(testData.EHS[0].Project, testData.EHS[0].TypeofObservation, testData.EHS[0].Location, testData.EHS[0].Description, testData.EHS[0].ObservedBy, testData.EHS[0].Severity, testData.EHS[0].Uploadfile);
    });
    await test.step('Editing the Entered fields ', async () => {
        await delay(5000);
        await EnviromentHealthSafety.SelectObservationDate(testData.EHS[0].editObservationDate);
        await EnviromentHealthSafety.AddTypeofObservation();
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].editTypeofObservation);
        await EnviromentHealthSafety.AddLocation();
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].editLocation);
        await EnviromentHealthSafety.AddDescrption(testData.EHS[0].editDescription);
        await EnviromentHealthSafety.AddSeverity();
        await EnviromentHealthSafety.AddFromSeverityDropdown(testData.EHS[0].editSeverity);
        await EnviromentHealthSafety.EdittheStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status2);
        await EnviromentHealthSafety.AddTargetDate(testData.EHS[0].Targetdate);
        await EnviromentHealthSafety.AddCloseDate(testData.EHS[0].Closedate);
        await EnviromentHealthSafety.AddRepeat()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Repeat);
        await EnviromentHealthSafety.AddPrevention(testData.EHS[0].Prevention);
        await CommonMethods.Save();
    });


    // await CommonMethods.Filter();
    // await EnviromentHealthSafety.filterFromProject();
    // await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
    // await EnviromentHealthSafety.filterFromProject();
    // await EnviromentHealthSafety.ClickOnFilterSearchButton();
    // await EnviromentHealthSafety.ProjectAssertion(testData.EHS[0].Project);



    await test.step(' Filtering with edeted fields ', async () => {
        await CommonMethods.Filter();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterObservationfromDate(testData.EHS[0].savedObservationFrom);
        await EnviromentHealthSafety.filterObservationToDate(testData.EHS[0].savedObservationTo);
        await EnviromentHealthSafety.filterFromStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status2);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await delay(2000);
        await CommonMethods.View();
    });
    // check all edeted fields are comming correct or not
    await test.step(' Checking After Edit', async () => {
        // await CommonMethods.View();
        await CommonMethods.Edit();
        console.log(" ");
        await console.log(" --- Checking the fields after Edit --- ");
        console.log(" ");
        await EnviromentHealthSafety.checkingedit(testData.EHS[0].Project, testData.EHS[0].editTypeofObservation, testData.EHS[0].editLocation, testData.EHS[0].editDescription, testData.EHS[0].ObservedBy, testData.EHS[0].editSeverity, testData.EHS[0].Uploadfile);
    });
    await test.step(' Editing for changing status to close', async () => {
        // await CommonMethods.Edit();
        await EnviromentHealthSafety.EdittheStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status3);
        await EnviromentHealthSafety.UploadafterImage(testData.EHS[0].Afterimage);
        await CommonMethods.Save();
        await loginPage.LogoutOfApplication();
    });

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await CommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
    });

    await test.step('Sorting and columnlevel oprtns in People  Under CMMS Master ', async () => {
        await homePage.NaviagetToMenu("CMMS", "Environment Health Safety");
        // await delay(5000);
        await delay(3000);
        await CommonMethods.Filter();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await EnviromentHealthSafety.sortandColumnlvloprtns("ObserveUserName", "Responsibility");
        await CommonMethods.filterfromcolumn("ObserveUserName", testData.EHS[0].ObservedUserName);
        await EnviromentHealthSafety.sortColumn("ObserveUserName");
    });

    await test.step('Checking Fild is read only ', async () => {
        await CommonMethods.Edit();
        await EnviromentHealthSafety.CheckingValueIsReadOnly("Project");
        await EnviromentHealthSafety.CheckingValueIsReadOnly("ObserveUser");
        await EnviromentHealthSafety.CheckingValueIsReadOnly("Status");
        await EnviromentHealthSafety.CheckingValueIsReadOnly("Approver");
        await EnviromentHealthSafety.CheckingValueIsReadOnly("Responsibility");
        //Project, ObserveUser, Status, Approver, Responsibility, Repeat,
        await EnviromentHealthSafety.CheckingValueIsReadOnly1("TargetDate");
        await EnviromentHealthSafety.CheckingValueIsReadOnly1("CloseDate");
        //TargetDate, CloseDate
        await EnviromentHealthSafety.CheckingValueIsReadOnly2("ActionTaken");
        await EnviromentHealthSafety.CheckingValueIsReadOnly("Repeat");
        await EnviromentHealthSafety.CheckingValueIsReadOnly2("Prevention");
        //ActionTaken, Prevention, 
        await CommonMethods.ClickCancelButton();
    });
    await test.step('uplode downlode assertion ', async () => {

        await CommonMethods.Filter();
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterProjectValue(testData.EHS[0].Project);
        await EnviromentHealthSafety.filterFromProject();
        await EnviromentHealthSafety.filterObservationfromDate(testData.EHS[0].savedObservationFrom);
        await EnviromentHealthSafety.filterObservationToDate(testData.EHS[0].savedObservationTo);
        await EnviromentHealthSafety.filterFromStatus()
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Status3);
        await EnviromentHealthSafety.ClickOnFilterSearchButton();
        await EnviromentHealthSafety.filterfromcolumn("Description", testData.EHS[0].editDescription);
        await EnviromentHealthSafety.ClickonEHSRow(testData.EHS[0].editDescription, testData.EHS[0].Status3);
        await EnviromentHealthSafety.Downloadfile();
    });
    await test.step('Delete EHS Under CMMS ', async () => {
        await CommonMethods.Delete();
    });

    await test.step('Cancel EHS Under CMMS ', async () => {
        await CommonMethods.ClickAddButton();
        await EnviromentHealthSafety.AddProject();
        await EnviromentHealthSafety.SelectFromdropdown(testData.EHS[0].Project);
        await CommonMethods.ClickCancelButton();
        await CommonMethods.LogoutOfApplication();
    });

});
