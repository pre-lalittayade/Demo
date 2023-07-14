import test from '@lib/BaseTest';
// import *  as data from  "../resources/formdata.json"
import * as data from "../resources/Data.json"

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
    await test.step('Enter data in time lapse page', async () => {
        await homePage.NaviagetToMenu(6, "Time Lapse");
        await timeLapse.selectValeFromDropDown("Project", data.TimeLapse.project);
        await timeLapse.SelectAlarmButton(data.TimeLapse.selectalarmbutton);
        await timeLapse.SelectDateRange(data.TimeLapse.fromdate, data.TimeLapse.todate);
        await timeLapse.NavigateToMenuTree(data.TimeLapse.project, data.TimeLapse.navigatetomenutree);
        await timeLapse.DragAndDropElements(data.TimeLapse['draganddropelements-1']);
        // await timeLapse.DragAndDropElements(data1.TimeLapse['draganddropelements-2']);

        // For selecting Day, Week, Month And Year
        await timeLapse.SelectAlarmButton(data.TimeLapse.dayalarambutton);
        // For selecting value of Granuarity
        //// await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton1);
        ////await delay(7000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        ////await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton2);
        ////await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        ////await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton3);
        ////await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton4);
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton5);
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton6);
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(4000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000); 
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton7);
        await delay(5000);
        await timeLapse.GridView();
        await delay(1000);
        await timeLapse.SettingButton();
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await timeLapse.DisplayChart(data.TimeLapse.displaychart);
        await delay(7000);
        // Assertion
        await timeLapse.Assertion();
        await delay(2000);

        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton8);
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);

        // await timeLapse.DisplayChart(data.TimeLapse.displaychart);
        // await delay(10000);

        // Assertion
        await timeLapse.Assertion();
        await delay(2000);



        
        // For selecting Day Week And Year
        await timeLapse.SelectAlarmButton(data.TimeLapse.weekalarambutton);
        // For selecting value of Granuarity
        // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton1);
        // await delay(12000);
        // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton2);
        // await delay(5000);
        // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton3);
        // await delay(5000);
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton4);
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton5);
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton6);
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton7);
        await delay(5000);
        await timeLapse.GridView();
        await delay(1000);
        await timeLapse.SettingButton();
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton8);
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        
        await trendPage.DisplayChart(data.TimeLapse.displaychart);
        await delay(7000);


         // For selecting Day, Week, Month And Year
         await timeLapse.SelectAlarmButton(data.TimeLapse.monthalarambutton);
         // For selecting value of Granuarity
         // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton1);
         // await delay(12000);
         // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton2);
         // await delay(5000);
         // await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton3);
         // await delay(5000);
         await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton4);
         await delay(5000);
        //  await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
         await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton5);
         await delay(5000);
        //  await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
         await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton6);
         await delay(5000);
        //  await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
         await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton7);
         await delay(5000);
         await timeLapse.GridView();
        await delay(1000);
        await timeLapse.SettingButton();
        await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
         await timeLapse.SelectGranularity(data.TimeLapse.selectgranularitybutton8);
         await delay(5000);
        //  await timeLapse.GridView();
        // await delay(1000);
        // await timeLapse.SettingButton();
        // await delay(5000);
        // await timeLapse.GridView();
        // await delay(1000);
        await trendPage.DisplayChart(data.TimeLapse.displaychart);
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