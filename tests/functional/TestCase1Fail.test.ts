// import test from '@lib/BaseTest';
// import *  as data from  "../resources/Data.json"

// function delay(time) {
//     return new Promise(function(resolve) { 
//         setTimeout(resolve, time)
//     });
// }

//  test("@Smoke Scenario 1 automation", async ({ loginPage, homePage, availabilityManagementPage, trendPage }) => {
//     await test.step(`Login to application`, async () => {
//         await loginPage.navigateToURL();
//         await loginPage.loginToApplication();
//     });

// for(var j=2;j<=2;j++){
//     await test.step('Enter data in availability managerment page', async () => {
//         await homePage.NaviagetToMenu(6, "Availability Management");
       
        

        
//         await availabilityManagementPage.selectValeFromDropDown("Project", data.array[j].projectAM);
//         await availabilityManagementPage.selectValeFromDropDown("Customers", data.array[j].customers);
//         await availabilityManagementPage.selectValeFromDropDown("Turbines", data.array[j].turbines);
//         // await availabilityManagementPage.SelectAlarmButton(data.array[j].selectalarmbuttonAM);
//         // await availabilityManagementPage.SelectDateRange(data.array[j].fromdateAM, data.array[j].todateAM);
//         // await availabilityManagementPage.EnterValueInGrid("End Time", data.Sadla.endtime)

//         // Delete Rows
//         await delay(7000);
//         await availabilityManagementPage.Delete();
//         await delay(7000);


//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.array[j].EnterValueInGrid1);
//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.array[j].EnterValueInGrid2);
//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.array[j].EnterValueInGrid3);
//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.array[j].EnterValueInGrid4);
//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.array[j].EnterValueInGrid5);
//         await availabilityManagementPage.EnterValueInGrid("End Time:State:BD Code", data.array[j].EnterValueInGrid6);

//         //Deleting Last row
//         await availabilityManagementPage.DeleteFromGrid();
        
//         // await availabilityManagementPage.Pop_UpDelete();
//         await availabilityManagementPage.SaveAndPublish();
//         // await availabilityManagementPage.Pop_UpSave();
//         // await availabilityManagementPage.SavePopUpOK();
//         // await delay(7000);
//         // await availabilityManagementPage.CheckWtg();
//         await delay(7000);

//         // to do save and publish
//     })

//     await test.step('Enter data in availability trends page', async () => {
//         await homePage.NaviagetToMenu(6, "Trends");
//         await trendPage.selectValeFromDropDown("Project", data.array[j].projecttrends);
//         // await trendPage.SelectAlarmButton(data.array[j].selectalarmbuttontrends);
//         // await trendPage.SelectDateRange(data.array[j].fromdatetrends, data.array[j].todatetrends);
//         await trendPage.NavigateToMenuTree(data.array[j].projecttrends, data.array[j].navigatetomenutree);
//         await trendPage.DragAndDropElements(data.array[j]['draganddropelements-1']);
//         await trendPage.DragAndDropElements(data.array[j]['draganddropelements-2']);
//         await trendPage.DragAndDropElements(data.array[j]['draganddropelements-3']);
//         await trendPage.DragAndDropElements(data.array[j]['draganddropelements-4']);
//         await trendPage.DragAndDropElements(data.array[j]['draganddropelements-5']);
//         await trendPage.DragAndDropElements(data.array[j]['draganddropelements-6']);

//         await trendPage.DisplayChart(data.array[j].displaychart);
//         await delay(12000);

//     })



//     /*// Jaora
//  */

// }
// // });
// async loginToApplication(): Promise<void> {
//         // const decipherPassword = await webActions.decipherPassword();
//         // await expect(this.page.locator(`#username`)).toHaveAttribute('placeholder','E-mail');
//         await expect(this.page.locator(`//input[@id="username"]`)).toHaveAttribute('placeholder','E-mail');
//         await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
//         await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);