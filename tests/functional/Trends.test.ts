import test from '@lib/BaseTest';
// import *  as data from  "../resources/formdata.json"
// import * as data from "../resources/Data.json"
import * as data from "../resources/Trends.json"

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage, availabilityManagementPage, trendPage, timeLapse }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
    }); 
    await test.step('Enter data in availability trends page', async () => {
        await homePage.NaviagetToMenu(6, "Trends");
        await trendPage.selectValeFromDropDown("Project", data.project);
        await trendPage.SelectAlarmButton(data.selectalarmbutton);
        await trendPage.SelectDateRange(data.fromdate, data.todate);
        await trendPage.NavigateToMenuTree(data.project, data.navigatetomenutree);
        await trendPage.DragAndDropElements(data['draganddropelements-1']);
        await trendPage.DragAndDropElements(data['draganddropelements-2']);
        await trendPage.DragAndDropElements(data['draganddropelements-3']);
        await trendPage.DragAndDropElements(data['draganddropelements-4']);
        await trendPage.DragAndDropElements(data['draganddropelements-5']);
        await trendPage.DragAndDropElements(data['draganddropelements-6']);

         // For selecting Day, Week, Month And Year
         await trendPage.SelectAlarmButton(data.dayalarambutton);
         // For selecting value of Granuarity
         await trendPage.SelectGranularity(data.selectgranularitybutton1);
         await delay(7000);

         await trendPage.SelectGranularity(data.selectgranularitybutton2);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton3);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton4);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton5);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton6);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton7);
         await delay(5000);
         await trendPage.GridView();
         await delay(1000);
         await trendPage.SettingButton();
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton8);
         await delay(5000);
 
         await trendPage.DisplayChart(data.displaychart);
         await delay(7000);
 
         // For selecting Day Week And Year
         await trendPage.SelectAlarmButton(data.weekalarambutton);
         await delay(5000);

         await trendPage.SelectGranularity(data.selectgranularitybutton4);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton5);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton6);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton7);
         await delay(5000);
         await trendPage.GridView();
         await delay(1000);
         await trendPage.SettingButton();
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton8);
         await delay(5000);
         
         await trendPage.DisplayChart(data.displaychart);
         await delay(7000);
 
 
          // For selecting Day, Week, Month And Year
         await trendPage.SelectAlarmButton(data.monthalarambutton);
         await delay(5000);

         await trendPage.SelectGranularity(data.selectgranularitybutton4);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton5);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton6);
         await delay(5000);
         
         await trendPage.SelectGranularity(data.selectgranularitybutton7);
         await delay(5000);
         await trendPage.GridView();
         await delay(1000);
         await trendPage.SettingButton();
         await delay(5000);

         await trendPage.SelectGranularity(data.selectgranularitybutton8);
         await delay(5000);

         await trendPage.DisplayChart(data.displaychart);
         await delay(7000);
 
         //  // For selecting Day, Week, Month And Year
         //  await timeLapse.SelectAlarmButton(data.TimeLapse.yearalarambutton);
         //  // For selecting value of Granuarity
         //  // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton1);
         //  // await delay(12000);
         //  // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton2);
         //  // await delay(5000);
         //  // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton3);
         //  // await delay(5000);
         // //  await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton4);
         // //  await delay(5000);
         // //  await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton5);
         // //  await delay(5000);
         // //  await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton6);
         // //  await delay(5000);
         // //  await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton7);
         // //  await delay(5000);
         // //  await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton9);
         // //  await delay(5000);
          
         //  await trendPage.DisplayChart(data.TimeLapse.displaychart);
         //  await delay(12000);
    })
    });