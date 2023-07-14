import test from '@lib/BaseTest';
import { WebActions } from '@lib/WebActions';
import { testConfig } from '../../../testConfig';
import{ workData } from '../../resources/CMMS/WorkorderData';
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }
 test("Scenario 1 automation", async ({ loginPage, homePage, workorderpage}) => {
    await test.step(`Login to application`, async () => {
        await loginPage.navigateToURL();
       await loginPage.loginToApplication();
    });
    await test.step('Create Work Order Under CMMS ', async () => {
        // let index = 0
        // if (testConfig.workorderClassification !== '') {
        //     for (let i = 0; i < workData.workorder.length; i++) {
        //         if (workData.workorder[i].Classification === testConfig.workorderClassification) {
        //             index = i;
        //             break;
        //         }
        //     }
        // }
        // for (let i = 0; i < workData.workorder.length; i++) {
        await homePage.NaviagetToMenu(9, "Work Order");
        await delay(5000);
        // if (testConfig.workorderClassification !== '')
        // i = index;
          await workorderpage.ClickAddButton();
          
    //    await workorderpage.SelectProject("Project",workData.workorder[i].Project);
       await workorderpage.SearchAssignUser();
       await workorderpage.AddUser("Atchaya C")
    //    / }

    });
});