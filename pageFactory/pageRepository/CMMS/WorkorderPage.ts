import { WorkorderPageObject } from '@objects/CMMS/WorkorderPageObjetct';
// import { CmmsMasterPageObject } from '@objects/CmmsObjects';
import { WebActions } from '@lib/WebActions'
// import {testConfig} from '../../testConfig';
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { TextBoxActions } from "@lib/web/TextBoxActions";
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let textboxObj: TextBoxActions;
let dateObj: DateActions;


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

export class WorkorderPage extends WorkorderPageObject {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        textboxObj = new TextBoxActions(this.page);

    }
    async SelectProject(dropdownName: string, value: string) {
        await this.SelectProjectFrom_dropdown(this.project_dropdown(dropdownName), dropdownName, value);

    }

    async SelectWarehouse(dropdownName: string, value: string) {
        await webactions.waitForElementAttached(this.warehouse_dropdown(dropdownName));
        await webactions.clickElement(this.warehouse_dropdown(dropdownName));
        await webactions.waitForElementAttached(this.drop_value(value));
        await webactions.clickElement(this.drop_value(value));

    }


    async SelectProjectFrom_dropdown(locator: string, dropdownName: string, dropDownValueName: string): Promise<void> {
        await webactions.waitForElementAttached(locator);
        let valueToSelect = (value: string) => `//span[contains(text(), "${value}")]`;
        let current_value = await this.GetProjectFrom_dropdown(dropdownName);
        if (current_value !== dropDownValueName) {
            await this.page.click(locator);
            await this.page.click(valueToSelect(dropDownValueName));
        }
    }

    async GetProjectFrom_dropdown(name: string): Promise<string> {
        let current_value_dropdown = (name: string) => `//div[@class="col-md-4 p-0"]//*//div[contains(@class,"ng-star-inserted")]//*[normalize-space(text())="${name}"]//parent::div//span[@class="ng-value-label ng-star-inserted"]`;
        let value = await this.page.innerText(current_value_dropdown(name));
        return value;
    }
    async SelectActivity() {
        await webactions.waitForElementAttached(this.activitySearch_btn);
        await webactions.clickElement(this.activitySearch_btn);
        await webactions.delay(10000);
    }
    async SelectClassification(dropdownName: string, value: string) {
        await webactions.waitForElementAttached(this.classification_dropdown(dropdownName));
        await webactions.clickElement(this.classification_dropdown(dropdownName));
        await webactions.clickElement(this.Classification_value(value));
        await webactions.delay(5000);

    }
    async ClickOnSubclassificationSearchButton() {
        await webactions.clickElement(this.SubclassificationSearch_btn);
    }
    async AddSubclassification(name: string) {
        await webactions.enterElementText(this.add_subclass_name_txt, name);
        await webactions.clickElement(this.subclass_search_btn);

        await webactions.delay(5000);
        await webactions.clickElement(this.subclassification_row(name));
        await webactions.delay(3000);
        await webactions.clickElement(this.subclassificationApply_btn);
        await webactions.delay(5000);
    }
    async AddActivity(value: string) {

        await webactions.waitForElementAttached(this.Activity_txtbox);
        await webactions.enterElementText(this.Activity_txtbox, value);
        await webactions.clickElement(this.Activityadd_searchbtn);
        await webactions.waitForElementAttached(this.Activity_row(value));
        await webactions.clickElement(this.Activity_row(value));
        await webactions.clickElement(this.ActivityApply_btn);
        await webactions.delay(10000);
    }
    async ClickonCheckbox() {
        let checkbox = this.page.locator("#mat-checkbox-1-input");
        await expect.soft(checkbox).toBeChecked();
    }

    async CheckTheCheckBox(check: boolean) {
        const checkboxState = await this.page.getAttribute(this.checkBoxState, "class")
        if (checkboxState.includes("mat-checkbox-checked")) {
            if (!check) {
                await webactions.clickElement(this.checkBox)
            }
        } else {
            if (check) {
                await webactions.clickElement(this.checkBox)
            }
        }
    }

    async ClickonCalender(item: string) {

        await webactions.clickElement(this.calender_btn(item));
    }
    async ClickonBrkdwnCalender(value: string) {

        await webactions.clickElement(this.breakdown_calender(value));
    }

    async ClickonRescheduleDate(value: string) {
        await webactions.clickElement(this.RescheduleDate(value));
    }


    async SelectDate(date: string) {
        let ok_btn = '//button[@class="mat-focus-indicator mat-button mat-stroked-button mat-button-base"]';
        const currentMonthYeartxt = '//div[@class="mat-calendar-header"]//span[@class="mat-button-ripple mat-ripple"]';

        const currentMonthYearArray = (await this.page.innerText(currentMonthYeartxt)).split(' ');
        const selectyearBtn = '//div[@class="mat-calendar-header"]//button';
        let dateMonthYearBtn = (value: string) => `//table[@class="mat-calendar-table"]//tr//td/div[contains(text(),"${value}")]`;
        const dateArray = date.split("-");
        if ((currentMonthYearArray[1] !== dateArray[2]) || (currentMonthYearArray[0] !== dateArray[1].toUpperCase())) {
            await webactions.clickElement(selectyearBtn);
            await webactions.clickElement(dateMonthYearBtn(dateArray[2]));
            await webactions.clickElement(dateMonthYearBtn(dateArray[1].toUpperCase()));
            await webactions.clickElement(dateMonthYearBtn(dateArray[0]));

        } else {
            await webactions.clickElement(dateMonthYearBtn(dateArray[0]));


        }
        await webactions.clickElement(ok_btn);
    }

    async SelectFromNonControllableEvent(value: string) {
        // await this.page.click (this.NonControllable_chkbox);



        //await this.page.locator(`//div[@class="col-md-12 m-b-10"]//div[@class="subClassificationText"]//input[@id="CrewTextId"]//parent::div//*[text()="search"]`).click();
        await webactions.clickElement(this.Noncontrollable_dropdown);
        await webactions.delay(5000);
        let valueToSelect = (value: string) => `//span[contains(text(), "${value}")]`;

        await webactions.clickElement(valueToSelect(value));
    }
    async ClickonCheckbox2(check: boolean) {
        await webactions.waitForElementAttached(this.NonControllable_chkbox);
        await webactions.clickElement(this.NonControllable_chkbox);
        // await webactions.waitForElementAttached(this.checkBox2);
        //   await this.page.locator(this.checkBox).nth(1).click();
        /*  const checkboxState = await this.page.getAttribute(this.checkBoxState, "class")
          if (checkboxState.includes("mat-checkbox-checked")) {
              if (!check) {
                  await webactions.clickElement(this.checkBox2)
              }
          } else {
              if (check) {
                  await webactions.clickElement(this.checkBox2)
              }
          }*/
    }
    async SelecFromControllableEvent(name: string, value: string) {
        await webactions.clickElement(this.ControllableEvent);
        await webactions.clickElement(this.drop_value(name));
        await webactions.waitForElementAttached(this.DcCapacity);
        await webactions.enterElementText(this.DcCapacity, value);
    }

    async AddBreakdownPercentage(value: string) {
        await webactions.enterElementText(this.Breakdown_percentage, value);

    }

    async SearchAssignUser() {
        // await this.page.keyboard.press("PageDown");
        //    const searchBtn =this.page.locator('//div/label[contains(text(),"Assigned To")]/parent::div//button/mat-icon');
        //       await searchBtn.scrollIntoViewIfNeeded()
        //await webactions.waitForElementAttached(`//input[@id="AssignedToId"]`);
        await this.page.locator(this.Assingnedto_searchbtn).scrollIntoViewIfNeeded();
        //await webactions.delay(2000);
        await this.page.locator(`//button[@id="SearchId2"]//*[contains(text(),"search")]`).click();
    }
    async SearchApprover() {
        await this.page.locator(this.Approver_searchbtn).scrollIntoViewIfNeeded();
        await webactions.delay(5000);

        await webactions.clickElement(this.Approver_searchbtn);
    }
    async AddUser(name: string) {

        //await this.page.locator(this.SelectUsername(name)).scrollIntoViewIfNeeded();
        await this.page.keyboard.press("PageDown");
        await webactions.delay(5000);
        await this.ScrollTOElement(this.SelectUsername(name));
        await webactions.clickElement(this.SelectUsername(name));
        await webactions.clickElement(this.ActivityApply_btn);
    }
    async ScrollTOElement(user) {
        const userEle = '//div[@role="rowgroup"]//div[@row-index="2"]'
        await webactions.clickElement(userEle);
        for (let i = 0; i < 10; i++) {
            if (!(await user.isVisible())) {
                await this.page.keyboard.press("PageDown")
            }
        }
        await user.scrollIntoViewIfNeeded({ timeout: 2000 })
    }
    async AddAnomaly(name: string) {
        await webactions.clickElement(this.Anomaly_Searchbtn);
        await webactions.waitForElementAttached(this.Anomaly_Nametxt);
        await webactions.enterElementText(this.Anomaly_Nametxt, name);
        await webactions.clickElement(this.AnomalyAdd_Searchbtn);;
        await webactions.clickElement(this.Anomaly_row(name));
        await webactions.clickElement(this.ActivityApply_btn);
    }
    async Addcrew(name: string) {
        await webactions.clickElement(this.Crew_search);
        await webactions.waitForElementAttached(this.crewName_txt);
        await webactions.enterElementText(this.crewName_txt, name);
        await webactions.clickElement(this.crewNameSearch_btn);
        await webactions.clickElement(this.crew_row(name));
        await webactions.clickElement(this.ActivityApply_btn);

    }
    async AddTechnician(user: string) {
        await webactions.clickElement(this.Technician_search);
        await webactions.delay(5000);
        let checkBoxArray = user.split(",");
        // checkBoxArray.forEach(async (element) => {
        for (let i = 0; i < (checkBoxArray.length); i++) {
            await webactions.waitForElementAttached(this.Technician_row(checkBoxArray[i]));
            await this.page.click(this.Technician_row(checkBoxArray[i]));
            await delay(5000);
        }
        await webactions.clickElement(this.ActivityApply_btn);
    }

    async AddRemarks(value: string) {
        await webactions.waitForElementAttached(this.Remarks_txtarea);
        await webactions.enterElementText(this.Remarks_txtarea, value);
    }

    async ClickAndAddButton(value: string) {
        await webactions.clickElement(this.Heading_btn(value));
    }
    async AddResource(code: string, name: string) {
        await webactions.delay(5000);
        await webactions.clickElement(this.InsideAdd_btn);
        await webactions.delay(10000);
        await webactions.waitForElementAttached(this.ResourceCode_txt(code));
        await webactions.enterElementText(this.ResourceCode_txt(code), name);

        await webactions.waitForElementAttached(this.ResourceSearch_btn);
        await webactions.clickElement(this.ResourceSearch_btn);
        await webactions.clickElement(this.Select_row(name));
        await webactions.delay(10000);
        await webactions.clickElement(this.ActivityApply_btn);
    }
    async Uploadfile() {
        let [upload] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.click(this.FileUpload_btn)
        ]);
        upload.setFiles("Asset_21112022_101642.xlsx");
        await webactions.delay(5000);
        //await this.page.locator('//button[contains(text(), "Ok")]').click();
    }
    async filterProject(value: string, project: string) {
        await webactions.waitForElementAttached(this.filterProject_dropdown);
        await webactions.clickElement(this.filterProject_dropdown);
        await webactions.clickElement(this.filterProject_Value("Select All"));
        await webactions.clickElement(this.filterProject_Value("UnSelect All"));
        await webactions.clickElement(this.select_Project);
        await webactions.clickElement(this.filterProject_dropdown);
        await webactions.delay(5000);
        let checkBoxArray = project.split(",");
        // checkBoxArray.forEach(async (element) => {
        for (let i = 0; i < (checkBoxArray.length); i++) {
            await webactions.waitForElementAttached(this.filterProject_Value(checkBoxArray[i]));
            await this.page.click(this.filterProject_Value(checkBoxArray[i]));
            await delay(5000);
        }

        await webactions.clickElement(this.select_Project);
    }
    async filterItem_dropdown(name: string, value: string) {
        await webactions.waitForElementAttached(this.filteritem(name));
        await webactions.clickElement(this.filteritem(name));
        await webactions.clickElement(this.Classification_value(value));
    }
    async filterSubclassification_search() {
        await webactions.waitForElementAttached(this.filtersubclassification_btn);
        await webactions.clickElement(this.filtersubclassification_btn);


    }
    async FilterCrew(value: string) {
        await webactions.waitForElementAttached(this.crewSearch_btn);
        await webactions.clickElement(this.crewSearch_btn);
        await webactions.enterElementText(this.crewName_txt, value);
        await webactions.clickElement(this.crewNameSearch_btn);
        await webactions.clickElement(this.crew_row(value));
        await webactions.clickElement(this.ActivityApply_btn);

    }
    async filter_AssigneeApprover() {
        await webactions.clickElement(this.filterAssignApprover);
        //await this.AddUser(name);
    }
    async ClickonApply() {
        await webactions.waitForElementAttached(this.Apply_btn);
        await webactions.clickElement(this.Apply_btn);
        await webactions.delay(5000);
    }
    async ClickOnWorkorder(name: string) {
        await webactions.waitForElementAttached(this.FindWorkorder_label(name));
        await webactions.clickElement(this.FindWorkorder_label(name));
        await webactions.delay(5000);
    }
    async ClicktoViewReport() {
        await webactions.clickElement(this.viewReport);
        await webactions.delay(5000);
    }
    async ClickonCancel() {
        await webactions.clickElement(this.Cancel);
        await webactions.delay(5000);
        await this.page.locator('//button[contains(text(), "Yes")]').click();

    }

    async Save() {
        await webactions.waitForElementAttached(this.saving_btn);
        await webactions.clickElement(this.saving_btn);
        await webactions.delay(5000);
        await this.page.locator('//button[contains(text(), "Ok")]').click();

        await this.page.locator('//button[contains(text(), "Ok")]').click();

    }

    async findWorkorder(value: string, date: string) {
        await webactions.waitForElementAttached(this.Year_btn(value));
        await webactions.clickElement(this.Year_btn(value));
        let k = await this.page.innerText(this.Yeartext);
        console.log(k);
        let DateArray = date.split("-");
        let datelabelArray = (await this.page.innerText(this.datelabel)).split(",");
        let datemonthArray = (datelabelArray[1]).split(' ');
        let month = datemonthArray[0].substring(0, 3)
        // console.log(month);
        //     if(DateArray[2]=== datelabelArray[2]){

        //      if(DateArray[1]===month){
        //         if(DateArray[0]===datemonthArray[1]){

        //         }
        //         }
        //      }

        await webactions.clickElement(this.workorderMonth(DateArray[1]));
        await webactions.clickElement(this.workorderweek(DateArray[0]));
        await webactions.clickElement(this.Year_btn("Day"));

    }

    async ChangeState(state: string) {
        await webactions.clickElement(this.State_dropdown);
        await webactions.clickElement(this.Select_state(state));
    }
    async AddWaterConsumption(value: string) {
        await webactions.enterElementText(this.waterconsumption, value);
    }
    async AddCleaningMW(value: string) {
        await webactions.enterElementText(this.cleaningMW, value);
    }
    async AddReason(name: string) {
        await webactions.clickElement(this.Reason);
        await webactions.waitForElementAttached(this.Select_state(name));
        await webactions.clickElement(this.Select_state(name))
    }

    async AddLinkedWorkorders() {
        await webactions.clickElement(this.LinkedWorkorderAdd_btn);
        await webactions.clickElement(this.Cancel);
        await this.page.locator('//button[contains(text(), "Yes")]').click();
        await webactions.delay(5000);
        await webactions.clickElement(this.Year_btn("Week"));
        await webactions.delay(5000);
    }
    async ClickOnListview() {
        await webactions.clickElement(this.Listview_btn);
        await webactions.delay(5000);
        await webactions.clickElement(this.Year_btn("Year"));
        await webactions.delay(2000);
        await webactions.clickElement(this.Year_btn("Month"));
        await webactions.delay(2000);
        await webactions.clickElement(this.Year_btn("Week"));
        await webactions.delay(2000);
        await webactions.clickElement(this.Year_btn("Day"));
        await webactions.delay(2000);
    }
    async ClickonRefresh() {
        await webactions.clickElement(this.Search_btn);
        await webactions.delay(5000);
    }
    async ClickOnCalenderview() {
        await webactions.waitForElementAttached(this.Calendar_view);
        await webactions.clickElement(this.Calendar_view);
        await webactions.delay(5000);
        await webactions.clickElement(this.Year_btn("Year"));
        await webactions.delay(2000);
        await webactions.clickElement(this.Year_btn("Week"));
        await webactions.delay(2000);
        await webactions.clickElement(this.Year_btn("Day"));
        await webactions.delay(2000);
        await webactions.clickElement(this.Year_btn("Month"));
        await webactions.delay(2000);
    }

    async ClickOnCalenderButton() {
        await webactions.clickElement(this.Calender_btn);
        await webactions.delay(5000);
    }
    async ClickOnDashboardViewButton() {
        await webactions.clickElement(this.View_Dashboard);
        await webactions.delay(5000);
    }

    async ListDownload() {
        let download = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click(this.Listdownload_btn)
        ]);
        let filename = download[0].suggestedFilename();
        await download[0].saveAs(filename);
        await webactions.delay(5000);
    }

    async CompleteDownload() {
        let download = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click(this.Completedownload_btn)
        ]);
        let filename = download[0].suggestedFilename();
        await download[0].saveAs(filename);
        await webactions.delay(5000);
    }

    async CheckTotalNoWorkorder(value: string, date1: string, date2: string) {
        let date1Array = date1.split("-");
        let date2Array = date2.split("-");
        let a = parseInt(date1Array[0]);
        let b = parseInt(date2Array[0]);
        let N = (b - a);
        await this.page.locator(this.CheckNoofWorkorder(value)).first().waitFor();
        console.log(await this.page.locator(this.CheckNoofWorkorder(value)).count());

    }
    async AddAssets(code: string, name: string) {
        await webactions.delay(5000);
        await webactions.clickElement(this.InsideAdd_btn);
        await webactions.delay(10000);
        await webactions.waitForElementAttached(this.Assettxt_box(code));
        await webactions.enterElementText(this.Assettxt_box(code), name);

        await webactions.waitForElementAttached(this.AssetSearch_btn);
        await webactions.clickElement(this.AssetSearch_btn);
        await webactions.clickElement(this.Select_row(name));
        await webactions.delay(10000);
        await webactions.clickElement(this.Assetapply_btn);
    }
    async AddAlarm(value: string, date1: string) {
        await webactions.clickElement(this.Alarm_calender(value));
        await webactions.delay(3000);
        await this.SelectDate(date1);
        await webactions.delay(3000);
    }
    async AlarmSearchButton() {
        await webactions.clickElement(this.AlarmSearch_btn);
        await webactions.delay(3000);
    }
    async alarm_adding(value: string, name: string) {
        await webactions.delay(2000);
        let row = this.page.locator(`//div[@class="ag-center-cols-viewport"]//div[@row-index="0"]//div[@col-id="ControllerName"]`);
        if ((await (row).isVisible())) {
            await this.ScrollTORight(this.AlarmPlus_btn(value));
            //await this.page.locator(this.AlarmPlus_btn(value)).scrollIntoViewIfNeeded();

            await webactions.clickElement(this.AlarmPlus_btn(value));
            await webactions.delay(2000);
            await this.page.keyboard.press("ArrowDown");
            for (let i = 0; i < 100; i++) {
                if (!(await this.page.locator(this.AlarmVerification(name)).isVisible())) {
                    await this.page.keyboard.press("ArrowDown");
                    //await this.page.keyboard.press("ArrowLeft");
                }
            }
            await this.page.locator(this.AlarmVerification(name)).scrollIntoViewIfNeeded();
            await webactions.delay(4000);
            const alm = this.page.locator(this.AlarmVerification(name));
            expect.soft(alm).toBeVisible();
        }
    }
    async ScrollTORight(user) {
        const userEle =
            `//div[@class="ag-center-cols-container"]//div[@row-index="0"]//div[@col-id="ControllerName"]`;
        await webactions.clickElement(userEle);
        for (let i = 0; i < 100; i++) {
            if (!(await this.page.locator(user).isVisible())) {
                await this.page.keyboard.press("ArrowRight");

            }
        }

        //await user.scrollIntoViewIfNeeded({timeout: 2000})
    }
    async ClickonTaskEditButton() {
        await webactions.clickElement(this.Task_Edit);

    }
    async ChangeTaskStatus(name: string, value: string) {
        await webactions.doubleClickElement(this.Task_state(name));
        await webactions.clickElement(this.Task_state(name));
        await webactions.waitForElementAttached(this.Task_statevalue(value));
        await webactions.clickElement(this.Task_statevalue(value));
    }
    async TaskStateSave() {
        await webactions.clickElement(this.Task_stateSave);
        await this.page.locator('//button[contains(text(), "Ok")]').click();

    }
    async Addcleanednoofmodule(value: string, name: string) {
        await webactions.doubleClickElement(this.Cleanedmodules(value));
        await webactions.enterElementText(this.cleanednoofmodule(value), name);
        await this.page.keyboard.press("Enter");
    }
    async SelectNonPVarea(value: string) {
        await webactions.enterElementText(this.NonPvArea, value);

    }
    async ClickonGrasscuttingReason(value: string) {
        await this.page.locator(this.grassReason).scrollIntoViewIfNeeded();
        await webactions.clickElement(this.grassReason);
        await webactions.waitForElementAttached(this.Select_state(value));
        await webactions.clickElement(this.Select_state(value));
    }
    async SelectTask(name: string) {
        await webactions.clickElement(this.taskSelection_btn);
        await webactions.clickElement(this.taskSelection_row(name));
        await webactions.clickElement(this.taskApply_btn);
    }

    async chechworkorderDeleted(name: string) {
        let dW = this.page.locator(this.FindWorkorder_label(name));
        expect(dW).not.toBeVisible();
    }
    async RescheduledAssignedToSearchButton() {
        await webactions.clickElement(this.rescheduledAssigned);

    }
    async RescheduledApproverSearchButton() {
        await webactions.clickElement(this.rescheduledApprover);

    }

    async SaveWorkorder() {
        await webactions.waitForElementAttached(this.workordersaving_btn);
        await webactions.clickElement(this.workordersaving_btn);
        await webactions.delay(5000);
        await this.page.locator('//button[contains(text(), "Ok")]').click();

        await this.page.locator('//button[contains(text(), "Ok")]').click();

    }
    async CheckStateinStateLog(state: string, value: string) {
        let state1 = this.page.locator(this.Statelog_state(value));
        expect.soft(state1).toHaveText(state);

    }

}