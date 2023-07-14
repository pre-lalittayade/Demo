import test from '@lib/BaseTest';
import { testConfig } from '../../testConfig'
import { Data } from "../resources/AvailsbilityData"
// import * as data1 from "../resources/Data.json"

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

test(" Scenario 1 automation", async ({ loginPage, homePage, availabilityManagementPage, trendPage, timeLapse }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
    });
    await test.step('Enter data in availability managerment page', async () => {
        let index = 0
        if (testConfig.project !== '') {
            for (let i = 0; i < Data.project.length; i++) {
                if (Data.project[i].projectAM === testConfig.project) {
                    index = i;
                    break;
                }
            }
        }
        for (let i = 0; i < Data.project.length; i++) {


            // await test.step('Enter data in availability managerment page', async () => {
            await homePage.NaviagetToMenu(6, "Availability Management");

            if (testConfig.project !== '')
                i = index;

            await availabilityManagementPage.selectValeFromDropDown("Project", Data.project[i].projectAM);
            await availabilityManagementPage.selectValeFromDropDown("Customers", Data.project[i].customers);
            await availabilityManagementPage.selectValeFromDropDown("Turbines", Data.project[i].turbines);
            await availabilityManagementPage.SelectAlarmButton(Data.project[i].selectalarmbuttonAM);
            await availabilityManagementPage.SelectDateRange(Data.project[i].fromdateAM, Data.project[i].todateAM);
            // await availabilityManagementPage.EnterValueInGrid("End Time", data.Rajkot.endtime)

            // Delete Rows
            await delay(4000);
            await availabilityManagementPage.Delete();
            await delay(4000);


            await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", Data.project[i].EnterValueInGrid1);
            await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", Data.project[i].EnterValueInGrid2);
            await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", Data.project[i].EnterValueInGrid3);
            await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", Data.project[i].EnterValueInGrid4);
            await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", Data.project[i].EnterValueInGrid5);
            await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", Data.project[i].EnterValueInGrid6);
            await delay(4000);
            //Deleting Last row
            await availabilityManagementPage.DeleteFromGrid();

            // await availabilityManagementPage.Pop_UpDelete();
            await availabilityManagementPage.SaveAndPublish();
            // await availabilityManagementPage.Pop_UpSave();
            // await availabilityManagementPage.SavePopUpOK();
            await delay(1000);
            await availabilityManagementPage.CheckWtg();
            await delay(1000);
            await availabilityManagementPage.Publish();



            // to do save and publish
            // })

            // console.log("test");

            // await test.step('Enter data in availability trends page', async () => {
            await homePage.NaviagetToMenu(6, "Trends");
            await trendPage.selectValeFromDropDown("Project", Data.project[i].projecttrends);
            await trendPage.SelectAlarmButton(Data.project[i].selectalarmbuttontrends);
            await trendPage.SelectDateRange(Data.project[i].fromdatetrends, Data.project[i].todatetrends);
            await trendPage.NavigateToMenuTree(Data.project[i].projecttrends, Data.project[i].navigatetomenutree);
            await trendPage.DragAndDropElements(Data.project[i]['draganddropelements-1']);
            await trendPage.DragAndDropElements(Data.project[i]['draganddropelements-2']);
            await trendPage.DragAndDropElements(Data.project[i]['draganddropelements-3']);
            await trendPage.DragAndDropElements(Data.project[i]['draganddropelements-4']);
            await trendPage.DragAndDropElements(Data.project[i]['draganddropelements-5']);
            await trendPage.DragAndDropElements(Data.project[i]['draganddropelements-6']);

            await trendPage.DisplayChart(Data.project[i].displaychart);
            await delay(12000);

            if (testConfig.project !== '')
                break;
        }

    });

    // await test.step('Enter data in time lapse page', async () => {
    //     await homePage.NaviagetToMenu(6, "Time Lapse");
    //     await timeLapse.selectValeFromDropDown("Project", data1.TimeLapse.project);
    //     await timeLapse.SelectAlarmButton(data1.TimeLapse.selectalarmbutton);
    //     await timeLapse.SelectDateRange(data1.TimeLapse.fromdate, data1.TimeLapse.todate);
    //     await timeLapse.NavigateToMenuTree(data1.TimeLapse.project, data1.TimeLapse.navigatetomenutree);
    //     await timeLapse.DragAndDropElements(data1.TimeLapse['draganddropelements-1']);
    //     // await timeLapse.DragAndDropElements(data1.TimeLapse['draganddropelements-2']);
    //     await timeLapse.SelectGranularity(data1.TimeLapse.selectgranularitybutton);

    //     await trendPage.DisplayChart(data1.TimeLapse.displaychart);
    //     await delay(12000);

    // })



    /*// Jaora
 */


});