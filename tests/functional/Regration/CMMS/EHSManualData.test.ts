import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import { EHSMDPage } from '@pages/Regration/CMMS/EHSManualDataPage';
import { testConfig } from '../../../../testConfig';
import { testData } from '../../../resources/Regration/CMMS/EHSMData';



function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" EHS Manual Data Page", async ({ loginPage, homePage, EHSManualData, CommonMethods }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await CommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
    });

    await test.step('Sorting in EHSMdata Under CMMS ', async () => {
        await delay(2000);

        await homePage.NaviagetToMenu("CMMS", "EHS Manual Data");
        await delay(5000);

        // await EHSManualData.sortandColumnlvloprtns("EHSMonth", "Project");
        // await EHSManualData.sortColumn("EHSMonth");


    });
    await test.step('Create EHS Manual Data Under CMMS ', async () => {

        await CommonMethods.ClickAddButton();
        await EHSManualData.AddProject();
        await EHSManualData.SelectFromdropdown(testData.EHSMdata[0].Project);
        await EHSManualData.SelectObservationMonth(testData.EHSMdata[0].ObservtnMonth);
        await EHSManualData.NoofLostTimeInjuries(testData.EHSMdata[0].LostTimeInjrs);
        await EHSManualData.AVGNoofWorkers(testData.EHSMdata[0].Avgnoworkers);
        await EHSManualData.AvgNoofPersonsWorkPerDay(testData.EHSMdata[0].AvgNoofPerson);
        await EHSManualData.TotalManHours(testData.EHSMdata[0].Manhours);

        await EHSManualData.TotalSafeManHours(testData.EHSMdata[0].Ttlsafemanhrs);
        await EHSManualData.LostWorkDay(testData.EHSMdata[0].Lostworkday);
        await EHSManualData.HSEMeetinTraining(testData.EHSMdata[0].HSEmeeting);
        await EHSManualData.InductionTrainingManHours(testData.EHSMdata[0].InductionTraining);
        await CommonMethods.Save();

    });
    await test.step('Filter in EHSMdata Under CMMS ', async () => {
        await delay(2000);
        await CommonMethods.Filter();
        await EHSManualData.FilterfromProject(testData.EHSMdata[0].Project);

        await EHSManualData.clickonSearchbtn();
        //await CommonMethods.filterfromcolumn("EHSMonth",testData.EHSMdata[0].ObservtnMonth);
        await EHSManualData.filterfromcolumn("AvgNoOfWorkers", testData.EHSMdata[0].Avgnoworkers);
        await EHSManualData.filterfromcolumnSecond("ManHoursWorked", testData.EHSMdata[0].Manhours);
        await EHSManualData.filterfromcolumnSecond("LostWorkDay", testData.EHSMdata[0].Lostworkday);

        await EHSManualData.CheckEHSManualData(testData.EHSMdata[0].Avgnoworkers);

    });
    await test.step('View and Edit in EHSMdata Under CMMS ', async () => {
        await delay(2000);
        await CommonMethods.View();
        await CommonMethods.Edit();
        console.log(" ");
        await console.log(" --- Checking the fields before Edit --- ");
        console.log(" ");
        await EHSManualData.checkingeditproject(testData.EHSMdata[0].Project);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_LostTimeInjrs, testData.EHSMdata[0].LostTimeInjrs, testData.EHSMdata[0].parameterLTI);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_Avgnoworkers, testData.EHSMdata[0].Avgnoworkers, testData.EHSMdata[0].parameterANW);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_AvgNoofPerson, testData.EHSMdata[0].AvgNoofPerson, testData.EHSMdata[0].parameterANP);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_Manhours, testData.EHSMdata[0].Manhours, testData.EHSMdata[0].parameterMH);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_Ttlsafemanhrs, testData.EHSMdata[0].Ttlsafemanhrs, testData.EHSMdata[0].parameterTSMH);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_LostTimeInjrs, testData.EHSMdata[0].LostTimeInjrs, testData.EHSMdata[0].parameterLTI);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_HSEmeeting, testData.EHSMdata[0].HSEmeeting, testData.EHSMdata[0].parameterHSEM);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_InductionTraining, testData.EHSMdata[0].InductionTraining, testData.EHSMdata[0].parameterIT);

        // Editing
        await delay(2000);
        await EHSManualData.NoofLostTimeInjuries(testData.EHSMdata[0].EditLostTimeInjrs);
        await EHSManualData.AVGNoofWorkers(testData.EHSMdata[0].EditAvgnoworkers);
        await EHSManualData.AvgNoofPersonsWorkPerDay(testData.EHSMdata[0].EditAvgNoofPerson);
        await EHSManualData.TotalManHours(testData.EHSMdata[0].EditManhours);
        await EHSManualData.TotalSafeManHours(testData.EHSMdata[0].EditTtlsafemanhrs);
        await EHSManualData.LostWorkDay(testData.EHSMdata[0].EditLostworkday);
        await EHSManualData.HSEMeetinTraining(testData.EHSMdata[0].EditHSEmeeting);
        await EHSManualData.InductionTrainingManHours(testData.EHSMdata[0].EditInductionTraining);        
        await CommonMethods.Save();
        await delay(2000);

    });
    await test.step('Filter and Delete in EHSMdata Under CMMS ', async () => {
        await delay(2000);
        await CommonMethods.Filter();
        await EHSManualData.FilterfromProject(testData.EHSMdata[0].Project);

        await EHSManualData.clickonSearchbtn();
        //await CommonMethods.filterfromcolumn("EHSMonth",testData.EHSMdata[0].ObservtnMonth);
        await EHSManualData.filterfromcolumnSecond("AvgNoOfWorkers", testData.EHSMdata[0].EditAvgnoworkers);
        await EHSManualData.filterfromcolumnSecond("ManHoursWorked", testData.EHSMdata[0].EditManhours);
        await EHSManualData.filterfromcolumnSecond("LostWorkDay", testData.EHSMdata[0].EditLostworkday);
        await EHSManualData.CheckEHSManualData(testData.EHSMdata[0].EditAvgnoworkers);
        await CommonMethods.View();
        await CommonMethods.Edit();
        console.log(" ");
        await console.log(" --- Checking the fields After Edit --- ");
        console.log(" ");
        await EHSManualData.checkingeditproject(testData.EHSMdata[0].Project);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_LostTimeInjrs, testData.EHSMdata[0].EditLostTimeInjrs, testData.EHSMdata[0].parameterLTI);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_Avgnoworkers, testData.EHSMdata[0].EditAvgnoworkers, testData.EHSMdata[0].parameterANW);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_AvgNoofPerson, testData.EHSMdata[0].EditAvgNoofPerson, testData.EHSMdata[0].parameterANP);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_Manhours, testData.EHSMdata[0].EditManhours, testData.EHSMdata[0].parameterMH);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_Ttlsafemanhrs, testData.EHSMdata[0].EditTtlsafemanhrs, testData.EHSMdata[0].parameterTSMH);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_LostTimeInjrs, testData.EHSMdata[0].EditLostTimeInjrs, testData.EHSMdata[0].parameterLTI);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_HSEmeeting, testData.EHSMdata[0].EditHSEmeeting, testData.EHSMdata[0].parameterHSEM);
        await EHSManualData.checkingedit(testData.EHSMdata[0].Edit_InductionTraining, testData.EHSMdata[0].EditInductionTraining, testData.EHSMdata[0].parameterIT);
        await CommonMethods.ClickCancelButton();
        //checking reset , filtercancel button & Filtering for delete
        await delay(2000);
        await CommonMethods.Filter();
        console.log(" ");
        await console.log(" --- Checking Before Reset --- ");
        console.log(" ");
        await EHSManualData.checkingresetforfilter(testData.EHSMdata[0].Project);
        await EHSManualData.clickOnFilterResetBtn();
        console.log(" ");
        await console.log(" --- Checking After Reset --- ");
        console.log(" ");
        await EHSManualData.checkingresetforfilter(testData.EHSMdata[0].FilterresetProject);
        await CommonMethods.FilterCloseButton();
        await CommonMethods.Filter();
        await EHSManualData.FilterfromProject(testData.EHSMdata[0].Project);
        await EHSManualData.clickonSearchbtn();
        //await CommonMethods.filterfromcolumn("EHSMonth",testData.EHSMdata[0].ObservtnMonth);
        await EHSManualData.filterfromcolumnSecond("AvgNoOfWorkers", testData.EHSMdata[0].EditAvgnoworkers);
        await EHSManualData.filterfromcolumnSecond("ManHoursWorked", testData.EHSMdata[0].EditManhours);
        await EHSManualData.filterfromcolumnSecond("LostWorkDay", testData.EHSMdata[0].EditLostworkday);
        await EHSManualData.CheckEHSManualData(testData.EHSMdata[0].EditAvgnoworkers);
        await CommonMethods.Delete();

    });

    await test.step('Cancel in EHSMdata Under CMMS ', async () => {
        await delay(2000);

        await CommonMethods.ClickAddButton();
        await EHSManualData.AddProject();
        await EHSManualData.SelectFromdropdown(testData.EHSMdata[0].Project);
        await delay(2000);
        await CommonMethods.ClickCancelButton();
        await delay(2000);

    });
});