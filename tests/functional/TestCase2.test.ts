// import test from '@lib/BaseTest';
// import *  as data from  "../resources/formdata.json"

// function delay(time) {
//     return new Promise(function(resolve) { 
//         setTimeout(resolve, time)
//     });
//  }

// test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, availabilityManagementPage, trendPage }) => {
//     await test.step(`Login to application`, async () => {
//         await loginPage.navigateToURL();
//         await loginPage.loginToApplication();
//     });

    


//     // Rajkote

//      await test.step('Enter data in availability managerment page', async () => {
//         await homePage.NaviagetToMenu(6, "Availability Management");
//         await availabilityManagementPage.selectValeFromDropDown("Project", data.Rajkot.projectAM);
//         await availabilityManagementPage.selectValeFromDropDown("Customers", data.Rajkot.customers);
//         await availabilityManagementPage.selectValeFromDropDown("Turbines", data.Rajkot.turbines);
//         await availabilityManagementPage.SelectAlarmButton(data.Rajkot.selectalarmbuttonAM);
//         await availabilityManagementPage.SelectDateRange(data.Rajkot.fromdateAM, data.Rajkot.todateAM);
//         // await availabilityManagementPage.EnterValueInGrid("End Time", data.Jaora.endtime)
//         await delay(7000);
//         // await availabilityManagementPage.Delete();

//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.Rajkot.EnterValueInGrid1);
//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.Rajkot.EnterValueInGrid2);
//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.Rajkot.EnterValueInGrid3);
//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.Rajkot.EnterValueInGrid4);

//         await availabilityManagementPage.DeleteFromGrid();
//         // await availabilityManagementPage.Pop_UpDelete();
//         await availabilityManagementPage.SaveAndPublish();
//         await availabilityManagementPage.Pop_UpSave();
//         await availabilityManagementPage.SavePopUpOK();
//         await delay(7000);
//         // to do save and publish
//      })

//     await test.step('Enter data in availability trends page', async () => {
//         await homePage.NaviagetToMenu(6, "Trends");
//         await trendPage.selectValeFromDropDown("Project", data.Rajkot.projecttrends);
//         await trendPage.SelectAlarmButton(data.Rajkot.selectalarmbuttontrends);
//         await trendPage.SelectDateRange(data.Rajkot.fromdatetrends, data.Rajkot.todatetrends);
//         await trendPage.NavigateToMenuTree(data.Rajkot.projecttrends, data.Rajkot.navigatetomenutree);
//         await trendPage.DragAndDropElements(data.Rajkot['draganddropelements-1']);
//         await trendPage.DragAndDropElements(data.Rajkot['draganddropelements-2']);
//         await trendPage.DragAndDropElements(data.Rajkot['draganddropelements-3']);
//         await trendPage.DragAndDropElements(data.Rajkot['draganddropelements-4']);
//         await trendPage.DragAndDropElements(data.Rajkot['draganddropelements-5']);
//         await trendPage.DragAndDropElements(data.Rajkot['draganddropelements-6']);

//         await trendPage.DisplayChart(data.Sadla.displaychart);
//         // await delay(12000);

//     })


// });