import { AvailabilityManagementObject } from "@objects/AvailabilityManagementObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";
import { testConfig } from "../../testConfig"
// import { test,expect } from "@playwright/test";

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;

export class AvailabilityManagementPage extends AvailabilityManagementObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);

    }

    async selectValeFromDropDown(dropdownName: string, value: string): Promise<void> {
        await comboBoxObj.SelectValue(this.project_dropdown(dropdownName), dropdownName, value);
    }

    async SelectAlarmButton(buttonName: string): Promise<void> {
        await webactions.clickElement(this.alarms_btn(buttonName));
    }

    async SelectDateRange(fromDate: string, toDate: string): Promise<void> {
        await dateObj.SelectDateRange(fromDate, toDate);
        await webactions.clickElement(this.search_btn);
    }

    async EnterValueInGrid(colName: string, value: string) {
        // await webactions.delay(2000)
        let colArray: string[], valueArray: string[];
        let length = 1;
        if (colName.includes(":")) {
            colArray = colName.split(":")
            valueArray = value.split(":")
            length = colArray.length;
        }
        await webactions.waitForElementAttached(this.row_count);
        const rowIndex = (await this.page.$$(this.row_count)).length.toString();
        await webactions.clickElement(this.actions_btn((parseInt(rowIndex) - 1).toString()));
        await webactions.clickElement(this.add_delete_btn("add"));
        // await webactions.clickElement(this.add_delete_btn("delete"));

        if (length > 1) {
            for (let i = 0; i < length; i++) {
                await this.enterRowColValue(colArray[i], valueArray[i]);
            }
        }
        else {
            await this.enterRowColValue(colName, value)
        }

    }

    //Delete Rows

    async Delete() {
        await webactions.waitForElementAttached(this.row_count);
        console.log("row count " + this.row_count);
        const rowIndex = (await this.page.$$(this.row_count)).length.toString();
        const k = parseInt(rowIndex);
        console.log(rowIndex);

        //   const lastRow = await this.page.locator('//*[@id="ag-944-row-count"]').textContent();
        //   const l = parseInt(lastRow);



        // await webactions.waitForElementAttached(this.LastRow);
        //  console.log("row count "+this.LastRow)
        //       const lastRow = (await this.page.$$(this.LastRow)).length.toString();
        //       const l = parseInt(lastRow);
        //       console.log(lastRow);


        let i: number;
        for (i = (k - 1); i > 0; i--) {
            await webactions.delay(2000)
            // Click button:has-text("...") >> nth=0
            await this.page.locator('button:has-text("...")').nth(0).click();//first()

            // Click text=delete Delete
            await this.page.locator('text=delete Delete').click();
            // Click text=Yes
            await this.page.locator('text=Yes').click();
        }
        // console.log("here");

        // const lastRow = await this.page.locator('id=ag-779-row-count');
        // console.log(lastRow);


    }

    // Delete Last



    async DeleteFromGrid() {


        // await this.page.locator('button:has-text("...")').nth(-1).click();//first()
        // await this.page.locator('text=delete Delete').click();
        // await this.page.locator('text=Yes').click();

        await webactions.waitForElementAttached(this.row_count);
        const rowIndex = (await this.page.$$(this.row_count)).length.toString();
        await webactions.clickElement(this.actions_btn((parseInt(rowIndex) - 1).toString()));
        await webactions.clickElement(this.add_delete_btn("delete"));
        // await this.page.locator('//button[contains(text(), "Yes")]').click();
        // await this.page.locator('//button[contains(text(), "Yes")]').click();
        await this.page.locator('text=Yes').click();

    }

    //  // this.page.on("dialog",async(alert)=>{
    //     await alert.accept();
    // });




    async enterRowColValue(colName: string, value: string) {
        const colIndex = await this.GetGridColumnIndex(colName);
        const rowIndex = (await this.page.$$(this.row_count)).length.toString();
        await webactions.doubleClickElement(this.grid_cell((parseInt(rowIndex) - 2).toString(), colIndex));
        await this.page.keyboard.type(value);
    }

    async GetGridColumnIndex(columnName: string): Promise<string> {
        return await this.page.$eval(this.grid_Col_text(columnName), ele => ele.getAttribute("aria-colindex"));
    }

    // Pop-up button

    // async Pop_UpDelete(){
    //     await this.page.locator('text=Yes').click();
    // }

    // save
    async SaveAndPublish(): Promise<void> {
        //await webactions.clickElement(this.save_btn);
        await this.page.locator('//button[@mattooltip="Save"]').click();
        await this.Pop_UpSave();
        await this.SavePopUpOK();
        // await this.Publish();


        let last_saved = this.page.locator('//div[@class="save-publish-log-statement ng-star-inserted"]//span[text()=" Last saved by "]');
        await expect.soft(last_saved).toHaveText("Last saved by");
        await this.timeStamp();

    }

    async Pop_UpSave() {
        await this.page.locator('//button[contains(text(), "Yes")]').click();
    }

    async SavePopUpOK() {
        await this.page.locator('//button[contains(text(), "Ok")]').click();
    }

    //    async Publish(){
    //     await webactions.clickElement(this.publish_btn);
    //    }

    // Publish Button & last seen Assertion

    // async Pop_UpSave(){
    //     await this.page.locator('//button[contains(text(), "Yes")]').click();
    // }
    // async SavePopUpOK(){
    //     await this.page.locator('//button[contains(text(), "Ok")]').click();
    // }
    async timeStamp() {
        // let last_saved=this.page.locator('//div[@class="save-publish-log-statement ng-star-inserted"]//span[text()=" Last saved by "]');
        // await expect(last_saved).toHaveText("Last saved by");
        let last_saved_name = this.page.locator('//div[@class="save-publish-log-statement ng-star-inserted"]//span[2]');
        await expect.soft(last_saved_name).toHaveText(testConfig.User);
        let last_saved_date = this.page.locator('//div[@class="save-publish-log-statement ng-star-inserted"]//span[4]');
        var datetime: any;
        var date = new Date().toString();
        let p: string[];
        p = date.split(" ");
        console.log(p);
        datetime = p[4].split(":");
        var h = parseInt(datetime[0]);
        var m = parseInt(datetime[1]);
        var s = parseInt(datetime[2]);
        //for(let t=1;t<5;t++){
        if (h > 12) {
            datetime[0] = (datetime[0] - 12).toString();
        }
        console.log(datetime[0]);
        console.log(datetime[1]);
        console.log(datetime[2]);
        await expect(last_saved_date).toContainText(p[1]);
        await expect.soft(last_saved_date).toContainText(p[2]);
        await expect(last_saved_date).toContainText(p[3]);
        await expect(last_saved_date).toContainText(datetime[0]);
        await expect.soft(last_saved_date).toContainText(datetime[1]);
        await expect.soft(last_saved_date).toContainText(datetime[2]);
    }
    async Publish() {
        await webactions.clickElement(this.publish_btn);
        await webactions.clickElement(this.publish_popup_yes);
        await webactions.clickElement(this.publish_popup_ok);
        let last_published = this.page.locator('//div[@class="save-publish-log-statement ng-star-inserted"]//span[1]');
        await expect.soft(last_published).toHaveText("Last published by");
        await this.timeStamp();
    }





    /** Assertion Code **/

    async CheckWtg() {

        //code for finding delete last row count
        // let lastrowcount = this.page.locator("//body[1]/app-root[1]/app-shell[1]/div[1]/div[2]/app-availability-management[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/mat-tab-group[1]/div[1]/mat-tab-body[1]/div[1]/div[1]/div[5]/app-ag-grid-table[1]/ag-grid-angular[1]/div[1]/div[4]/span[1]/span[5]") ;
        // console.log(lastrowcount);
        // await expect(lastrowcount).toHaveText('4');


        let WTGA = this.page.locator("//body[1]/app-root[1]/app-shell[1]/div[1]/div[2]/app-availability-management[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/app-circularsolidguage[1]/div[1]/highcharts-chart[1]/div[3]/div[2]/div[1]/span[1]/div[1]/span[1]");
        let CA = this.page.locator("//body[1]/app-root[1]/app-shell[1]/div[1]/div[2]/app-availability-management[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/app-circularsolidguage[1]/div[1]/highcharts-chart[1]/div[3]/div[2]/div[1]/span[1]/div[1]/span[1]");
        let GA = this.page.locator("//body[1]/app-root[1]/app-shell[1]/div[1]/div[2]/app-availability-management[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/app-circularsolidguage[1]/div[1]/highcharts-chart[1]/div[3]/div[2]/div[1]/span[1]/div[1]/span[1]");
        let RA = this.page.locator("//body[1]/app-root[1]/app-shell[1]/div[1]/div[2]/app-availability-management[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[4]/app-circularsolidguage[1]/div[1]/highcharts-chart[1]/div[3]/div[2]/div[1]/span[1]/div[1]/span[1]");
        await webactions.delay(1000);
        console.log(WTGA);
        await expect.soft(WTGA).toHaveText('49.9 %');
        console.log(CA);
        await expect.soft(CA).toHaveText('49.9 %');
        console.log(GA);
        await expect.soft(GA).toHaveText('100.0 %');
        console.log(RA);
        await expect.soft(RA).toHaveText('100.0 %');


        // await expect(this.page.locator(`#username`)).toHaveAttribute('placeholder','E-mail');
        //     await expect(this.page.locator(`//input[@id="username"]`)).toHaveAttribute('placeholder','E-mail');
        //     await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        //     await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);

    }


    
}