import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
import { Data } from "../../../resources/Regration/CMMS Master/TaskData";
import { expect } from '@playwright/test';

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

let columnValues1:Array<string>;
let columnValues2:Array<string>;

test("@ Task Page", async ({ loginPage, homePage, Task, CommonMethods, page }) => {

    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        // await CommonMethods.loginToApplication("rushikesh.sunil@prescinto.ai", "Rushi000@");
        await CommonMethods.loginToApplication("automation@prescinto.ai", "Automation@01");
    });

    await test.step('Enter data in CMMS - Task page', async () => {
        await homePage.NaviagetToMenu("CMMS Master", Data.nevigate_to);
    }); 

    await test.step('Checking Sorting Is Working', async () => {
        // Checking Sorting is working fine or not
        await delay(10000);
        const table = page.locator(`//div[@class="ag-root ag-unselectable ag-layout-normal"]`); //table x path
        
        const desserts = table.locator(`//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="TaskName"]`); // xpath for column heading
        
        // const shortType = await desserts.getAttribute(`//span[contains(text(),"Name")]//parent::div//span[@ref="eSortNone"]`);  // not working check xpath properly which contain all 3 orders ass, dess, none. xpath for parent os ass, dess,and none
        
        const dessertsRow =  page.locator(`//div[contains(@aria-label,"Press SPACE ")]//div[@col-id="TaskName"]`);  //xpath for all rows from table
        const originalData =  await dessertsRow.allTextContents();
        // const ManualSortingdesc = await originalData.sort((a,b) => b.localeCompare(a)); //array.sort((a, b) => b.localeCompare(a));
        // const ManualSortingasc = await originalData.sort((a,b) => a.localeCompare(b));
        // console.log("Original :", + originalData);

        console.log(" --- Ascending --- ");
        await sortTable();
        console.log(" --- Descending --- ");
        await sortTable();
        
        async function sortTable() {
            await desserts.click();
            await delay(5000);
            const sort = desserts.getAttribute("aria-sort");
            if (await sort === `descending`){
                // console.log("Expecting des :- " +sort);
                const SortingByFunctionality = await dessertsRow.allTextContents();
                const ManualSorting = await SortingByFunctionality.sort((a,b) => b.localeCompare(a));
                // console.log("Functional",SortingByFunctionality);
                // console.log("Manual",ManualSorting);
                // const Assertion =  await expect.soft(SortingByFunctionality).toEqual(ManualSorting);
                if(SortingByFunctionality == ManualSorting){
                    await expect.soft(SortingByFunctionality).toEqual(ManualSorting);
                    console.log("Assertion Pass");
                    // console.log(" --- Sorting Functionality Is Working Properly ---");
                    // console.log("And The List In Descending Order Is As Below ");
                    console.log(" ");
                    console.log("List In Descending Order :- " + SortingByFunctionality);
                    console.log(" ");
                }else{
                    console.log(" --- Sorting is not working --- ");
                }
            }
            if (await sort === "ascending"){
                // console.log("Expecting Asc :- " +sort);
                const SortingByFunctionality = await dessertsRow.allTextContents();
                const ManualSorting = await SortingByFunctionality.sort((a,b) => a.localeCompare(b));
                // console.log("Functional",SortingByFunctionality);
                // console.log("Manual",ManualSorting);
                // const Assertion =  await expect.soft(SortingByFunctionality).toEqual(ManualSorting);
                if(SortingByFunctionality == ManualSorting){
                    await expect.soft(SortingByFunctionality).toEqual(ManualSorting);
                    console.log("Assertion Pass");
                    // console.log(" --- Sorting Functionality Is Working Properly ---");
                    // console.log("And The List In Ascending Order Is As Below ");
                    console.log(" ");
                    console.log("List In Ascending Order :- " + SortingByFunctionality);
                    console.log(" ");
                }else{
                    console.log(" --- Sorting is not working --- ");
                }
                
                // console.log("Exp Asc :- " + await dessertsRow.allTextContents());
            }
            else {
                console.log(" --- None --- ");
                console.log(" ");
                console.log("List Without Sorting :- " + await dessertsRow.allTextContents());
        
            }
        }
    });

    await test.step('Other Functionalitys ', async () => {
            // })
            // Uplode And Download
            // await Task.Downloadfile(Data.Download);
            // await Task.Uploadfile(Data.Upload,Data.UplodeFile);
            // Add Button Starts
            await Task.Button(Data.Add);
            // For selecting value of Project
            // await Task.SelectValueFromPanelDropDown(Data.dropdownName, Data.value);
            // For selecting Name
            await Task.TaskDetails(Data.Name, Data.NameValue);
            // For selecting Refrance code
            await Task.TaskDetails(Data.AddRefrance, Data.RefranceCode);
            // For clicking on search button
            await Task.Button(Data.Search);

            // Sub-Classification Page Start
            // For entering Name in Sub-Claassificaation Box
            await Task.SubClassificationName(Data.SubClassificationName);


            // For clicking on save button
            await Task.Save_Button();
            // For clicking on Save Pop-Ups
            await Task.SavePopUp_Yes();
            await Task.SaveSuccessfull_Ok();
            // Add Button End...
            //  Shorting And Column Level Operations
            await Task.sortandColumnlvloprtns("TaskName", "Sub Classification");
            await Task.sortColumn("TaskName");

            // Filter Button Starts.
            // For clicking on Filter Button
            await Task.Filter_Button();
            await Task.Search(Data.Name, Data.NameValue);
            await Task.Search(Data.SearchRefrance, Data.RefranceCode);
            await Task.SubclassificationSearch();
            await Task.SubClassificationName(Data.SubClassificationName);
            await Task.Filter_RefreshButton();
            //checking reset functionality
            await Task.CheckResetFuncationality(Data.Name, Data.SearchRefrance, Data.subClassification);

            // await Task.Filter_Button();
            await Task.Search(Data.Name, Data.NameValue);
            await Task.Search(Data.SearchRefrance, Data.RefranceCode);
            await Task.SubclassificationSearch();
            await Task.SubClassificationName(Data.SubClassificationName);
            await Task.Filter_SearchButton();
            await Task.ShortNameMenu(Data.colName, Data.colID);
            await Task.EnterNameFor_Filter(Data.NameFilter);
            await Task.clickOnFirstElement(Data.colID);

            // visibility 
            await Task.Visibility_Button();
            // For clicking on Edit
            await Task.Edit_Function();
            //checking all fields before edit
            console.log(" ");
            await console.log(" --- Checking the fields before Edit --- ");
            console.log(" ");
            await Task.CheckingFields(Data.Name, Data.NameValue, Data.AddRefrance, Data.RefranceCode, Data.editsubclassificatin, Data.SubClassificationName)

            //Editing
            await Task.TaskDetails(Data.Name, Data.EditNameValue);
            await Task.TaskDetails(Data.AddRefrance, Data.EditRefranceCode);
            await Task.Button(Data.Save);
            await Task.Pop_Up();

            //Again Filtering After Edit
            await Task.Filter_Button();
            await Task.Search(Data.Name, Data.EditNameValue);
            await Task.Search(Data.SearchRefrance, Data.EditRefranceCode);
            await Task.SubclassificationSearch();
            await Task.SubClassificationName(Data.SubClassificationName);
            await Task.Filter_SearchButton();
        

            // visibility 
            await Task.Visibility_Button();
            // For clicking on Edit
            await Task.Edit_Function();
            //checking all fields After edit
            console.log(" ");
            await console.log(" --- Checking the fields after Edit --- ");
            console.log(" ");
            await Task.CheckingFields(Data.Name, Data.EditNameValue, Data.AddRefrance, Data.EditRefranceCode, Data.editsubclassificatin, Data.SubClassificationName)
            // cancle button
            await Task.Button(Data.Cancel);
            await Task.SavePopUp_Yes();

            //Filter again for checking uplodes and downlodes
            await Task.Filter_Button();
            await Task.Search(Data.Name, Data.EditNameValue);
            await Task.Search(Data.SearchRefrance, Data.EditRefranceCode);
            await Task.SubclassificationSearch();
            await Task.SubClassificationName(Data.SubClassificationName);
            await Task.Filter_SearchButton();
            //checking the grides value before download
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Task.GetColumns(locator);
                // search
                let i = 0;
                columnValues1 = await Task.GetColumnValues(columns, 1);
            });
            
            // click on downlode
            await Task.Downloadfile(Data.Download);

            // Delete Button
            await Task.Button(Data.Delete);
            await Task.SavePopUp_Yes();
            await Task.SaveSuccessfull_Ok();
       
            //uploding file
            await Task.Uploadfile(Data.Upload);
            await Task.Button(Data.Save);
            await Task.Pop_Up();
            //filter again and checking gride values are sameafter uploding
            await Task.Filter_Button();
            await Task.Search(Data.Name, Data.EditNameValue);
            await Task.Search(Data.SearchRefrance, Data.EditRefranceCode);
            await Task.SubclassificationSearch();
            await Task.SubClassificationName(Data.SubClassificationName);
            await Task.Filter_SearchButton();
            await test.step('test validation', async () => {
                const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
                const columns: Array<string> = await Task.GetColumns(locator);
                // search
                let i = 0;
                columnValues2 = await Task.GetColumnValues(columns, 1);
            });
            await expect.soft(columnValues2).toEqual(columnValues1);

        //Delete Button
            await Task.Button(Data.Delete);
            await Task.SavePopUp_Yes();
            await Task.SaveSuccessfull_Ok();
    });

    await test.step(`Shorting and column level operation`, async () => {
        await Task.Filter_Button();
        await Task.Filter_RefreshButton();
        await Task.Filter_SearchButton();

        await CommonMethods.LogoutOfApplication();

    });

});


// test("Web table sorting", async ( {page} ) => {

//     const table = page.locator(`//div[@class="ag-root ag-unselectable ag-layout-normal"]`); //table x path

//     const desserts = table.locator(`//span[contains(text(),"Name")]`); // xpath for column heading

//     const shortType = await desserts.getAttribute(`//span[contains(text(),"Name")]//parent::div//span[@ref="eSortNone"]`);  // not working check xpath properly which contain all 3 orders ass, dess, none. xpath for parent os ass, dess,and none

//     const dessertsRow =  page.locator(`//div[@aria-label="Press SPACE to select this row."]//div[@col-id="TaskName"]`);  //xpath for all rows from table
//     const originalData =  await dessertsRow.allTextContents();
//     console.log("Original :", + originalData);

//     console.log("Ascending :- ");
//     await sortTable();
//     console.log("Descending :- ");
//     await sortTable();

//     async function sortTable() {
//         await desserts.click();
//         const sort = desserts.getAttribute(`//span[contains(text(),"Name")]//parent::div//span[@ref="eSortNone"]`);
//         if (await sort === "eSortDesc"){
//             console.log("Expecting des :- " +sort);
//             originalData.sort((a,b) => b.localeCompare(a));
//             console.log("Exp Des :- " + await dessertsRow.allTextContents());
//         }
//         if (await sort === "eSortAsc"){
//             console.log("Expecting Asc :- " +sort);
//             originalData.sort();
//             console.log("Exp Asc :- " + await dessertsRow.allTextContents());
//         }
//         else {
//             console.log("Exp None :- " + await dessertsRow.allTextContents());

//         }
//     }
// })











 // //For clicking search button of sub-classification box
        // await Task.Sub_Search_Button();
        // // For clicking on the element which comes after search (X-path is working only for Inverter not for default)
        // await Task.ClickOnElement(Data.SubClassificationName);
        // // for clicking on Wright Button of Sub-Classification page
        // await Task.Submit_Btn();
        // //  Sub-Classification Page End
               // // For clicking search button of sub-classification box
        // await Task.Sub_Search_Button();
        // // For clicking on the element which comes after search (X-path is working only for Inverter not for default)
        // await Task.ClickOnElement(Data.SubClassificationName);
        // // for clicking on Wright Button of Sub-Classification page.
        // await Task.Submit_Btn();
        // //  Sub-Classification Page End
        // await Task.SelectValueFromFilterPanelDropDown("Prescinto");
        // await Task.SelectValueFromPanelDropDown(Data.dropdownName, Data.value,true);
        // For selecting Name
                // For clicking on save button
                // await Task.Filter_RefreshButton();

                // // Assertion
                // await Task.Assertion_filter_name(Data.Name);
        
                // // visibility 
                // await Task.Visibility_Button();
        
                // // For clicking on Edit
                // await Task.Edit_Function();
                // // for editing in name
                // // await Task.Name(Data.EditName);
                // await Task.Save_Button();
                // // For clicking on Save Pop-Ups
                // await Task.SavePopUp_Yes();
                // await Task.SaveSuccessfull_Ok();
        
                // //  Again Filter Button Starts.
                // // For clicking on Filter Button
                // await Task.Filter_Button();
                // await Task.SelectValueFromPanelDropDown(Data.dropdownName, Data.value, true);
                // // await Task.SelectValueFromFilterPanelDropDown("Prescinto");
                // // For selecting Name
                // await Task.FilterBtn_Name(Data.EditName);
                // // For selecting Refrance code
                // await Task.FilterBtn_RefranceCode(Data.RefranceCode);
                // // For clicking on search button
                // // await Task.Filter_SearchButton();
        
                // // // Sub-Classification Page Start
                // // // For entering Name in Sub-Claassificaation Box
                // // await Task.Sub_Classification_Name("Inverters");
                // // // For clicking search button of sub-classification box
                // // await Task.Sub_Search_Button();
                // // // For clicking on the element which comes after search (X-path is working only for Inverter not for default)
                // // await Task.ClickOnElement("Inverters");
                // // // for clicking on Wright Button of Sub-Classification page
                // // await Task.Submit_Btn();
                // // //  Sub-Classification Page End
        
                // // For clicking on save button
                // await Task.Filter_RefreshButton();
        
                // // Assertion
                // await Task.Assertion_filter_name(Data.EditName);
        