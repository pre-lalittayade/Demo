import test from '@lib/BaseTest';
// import { TaskPage } from '@pages/CMMS_Master/TaskPage';
import {Data} from "../../resources/CMMSMaster/TaskData";

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 test(" Scenario 1 automation", async ({ loginPage, homePage,cmmsTask }) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
    });

    await test.step('Enter data in CMMS - Task page', async () => {
        await homePage.NaviagetToMenu("CMMS", Data.nevigate_to);
        // After nevigeting to task page we click on ADD Button
        // Add Button Starts
        await cmmsTask.Button("add");
        // For selecting value of Project
        await cmmsTask.SelectValueFromPanelDropDown(Data.dropdownName, Data.value);
        // For selecting Name
        await cmmsTask.Name(Data.Name);
        // For selecting Refrance code
        await cmmsTask.RefranceCode(Data.RefranceCode);
        // For clicking on search button
        await cmmsTask.SearchButton();

        // Sub-Classification Page Start
        // For entering Name in Sub-Claassificaation Box
        await cmmsTask.Sub_Classification_Name(Data.SubClassificationName);
        // For clicking search button of sub-classification box
        await cmmsTask.Sub_Search_Button();
        // For clicking on the element which comes after search (X-path is working only for Inverter not for default)
        await cmmsTask.ClickOnElement(Data.SubClassificationName);
        // for clicking on Wright Button of Sub-Classification page
        await cmmsTask.Submit_Btn();
        //  Sub-Classification Page End

        // For clicking on save button
        await cmmsTask.Save_Button();
        // For clicking on Save Pop-Ups
        await cmmsTask.SavePopUp_Yes();
        await cmmsTask.SaveSuccessfull_Ok();
        // Add Button End...

        // Filter Button Starts.
        // For clicking on Filter Button
        await cmmsTask.Filter_Button();
        // await cmmsTask.SelectValueFromFilterPanelDropDown("Prescinto");
        await cmmsTask.SelectValueFromPanelDropDown(Data.dropdownName, Data.value,true);
        // For selecting Name
        await cmmsTask.FilterBtn_Name(Data.Name);
        // For selecting Refrance code
        await cmmsTask.FilterBtn_RefranceCode(Data.RefranceCode);
        // For clicking on search button
        await cmmsTask.Filter_SearchButton();

        // Sub-Classification Page Start
        // For entering Name in Sub-Claassificaation Box
        await cmmsTask.Sub_Classification_Name(Data.SubClassificationName);
        // For clicking search button of sub-classification box
        await cmmsTask.Sub_Search_Button();
        // For clicking on the element which comes after search (X-path is working only for Inverter not for default)
        await cmmsTask.ClickOnElement(Data.SubClassificationName);
        // for clicking on Wright Button of Sub-Classification page
        await cmmsTask.Submit_Btn();
        //  Sub-Classification Page End

        // For clicking on save button
        await cmmsTask.Filter_RefreshButton();

        // Assertion
        await cmmsTask.Assertion_filter_name(Data.Name);

        // visibility 
        await cmmsTask.Visibility_Button();

        // For clicking on Edit
        await cmmsTask.Edit_Function();
        // for editing in name
        await cmmsTask.Name(Data.EditName);
        await cmmsTask.Save_Button();
        // For clicking on Save Pop-Ups
        await cmmsTask.SavePopUp_Yes();
        await cmmsTask.SaveSuccessfull_Ok();

        //  Again Filter Button Starts.
        // For clicking on Filter Button
        await cmmsTask.Filter_Button();
        await cmmsTask.SelectValueFromPanelDropDown(Data.dropdownName, Data.value,true);
        // await cmmsTask.SelectValueFromFilterPanelDropDown("Prescinto");
        // For selecting Name
        await cmmsTask.FilterBtn_Name(Data.EditName);
        // For selecting Refrance code
        await cmmsTask.FilterBtn_RefranceCode(Data.RefranceCode);
        // For clicking on search button
        // await cmmsTask.Filter_SearchButton();

        // // Sub-Classification Page Start
        // // For entering Name in Sub-Claassificaation Box
        // await cmmsTask.Sub_Classification_Name("Inverters");
        // // For clicking search button of sub-classification box
        // await cmmsTask.Sub_Search_Button();
        // // For clicking on the element which comes after search (X-path is working only for Inverter not for default)
        // await cmmsTask.ClickOnElement("Inverters");
        // // for clicking on Wright Button of Sub-Classification page
        // await cmmsTask.Submit_Btn();
        // //  Sub-Classification Page End

        // For clicking on save button
        await cmmsTask.Filter_RefreshButton();

        // Assertion
        await cmmsTask.Assertion_filter_name(Data.EditName);

        // Delete Button
        await cmmsTask.Delete_Function();
        await cmmsTask.SavePopUp_Yes();
        await cmmsTask.SaveSuccessfull_Ok();


    })

    
});