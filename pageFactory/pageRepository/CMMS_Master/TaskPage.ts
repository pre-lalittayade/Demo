import { TaskObject } from "@objects/CMMS_Master/TaskObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions"

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;

export class TaskPage extends TaskObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);

    }

    async Button(value) {
        await webactions.clickElement(this.button(value));
        await webactions.delay(2000);
    }

    // async Account(Name: string): Promise<void> {
    //     await webactions.clickElement(this.acc(Name));
    // }
    // async Account(dropdownName: string, value: string): Promise<void> {
    //     await comboBoxObj.GetDropDOwnValueCMMS(value);
    // }




    // async SelectValueFromPanelDropDown(dropdownName: string, value: string): Promise<void> {
    //     await comboBoxObj.SelectValueFromPanel(this.panel_dropdown(dropdownName), dropdownName, value);
    //     await webactions.delay(2000);
    // }

    // async SelectValueFromFilterPanelDropDown( value: string): Promise<void> {
    //     await webactions.clickElement(this.filter_Account);
    //     await webactions.clickElement(this.filterdropdown_value(value));
    //     await webactions.delay(2000);
    // }





    async SelectValueFromPanelDropDown(dropdownName: string, value: string, filter: boolean = false): Promise<void>{
        if(filter){
            await comboBoxObj.SelectValueFromPanel(this.panel_filter_dropdown(dropdownName), dropdownName, value, filter);
        } else{
            await comboBoxObj.SelectValueFromPanel(this.panel_dropdown(dropdownName), dropdownName, value);
        }
    }


    // async Name(name: string, value: string){
    //     await webactions.clickElement(this.namebox);
    //     await this.page.keyboard.type(value);
    // }

    async Name(value: string) {
        await webactions.waitForElementAttached(this.name);
        // await webactions.clickElement();
        await this.page.fill(this.name, value);
        await webactions.delay(2000);
    }

    async RefranceCode(value: string) {
        await webactions.waitForElementAttached(this.name);
        // await webactions.clickElement();
        await this.page.fill(this.refrance_code, value);
        await webactions.delay(2000);
    }

    async SearchButton() {
        await webactions.clickElement(this.Search_btn);
        await webactions.delay(2000);
    }

    async Sub_Classification_Name(value: string) {
        await webactions.waitForElementAttached(this.subName);
        // await webactions.clickElement();
        await this.page.fill(this.subName, value);
        await webactions.delay(2000);
    }

    async Sub_Search_Button() {
        await webactions.clickElement(this.subSearchButton);
        await webactions.delay(2000);
    }

    async ClickOnElement(value:string): Promise<void> {
        await webactions.clickElement(this.click_element(value));
        // await this.click_element(value).click();
        // await webactions.clickElement(this.click_element);
        await webactions.delay(2000);
    }

    async Submit_Btn() {
        await webactions.clickElement(this.submit_btn);
        await webactions.delay(2000);
    }

    async Save_Button() {
        await webactions.clickElement(this.save_btn);
        await webactions.delay(2000);
    }

    async SavePopUp_Yes() {
        await webactions.clickElement(this.save_popup_yes);
        await webactions.delay(1000);
    }

    async SaveSuccessfull_Ok(){
        await webactions.clickElement(this.save_successfull_ok);
        await webactions.delay(1000);
    }

    async Filter_Button() {
        await webactions.clickElement(this.filter_btn);
        await webactions.delay(1000);
    }

    async FilterSearch_Button() {
        await webactions.clickElement(this.filterSearch_btn);
        await webactions.delay(1000);
    }

    // async SelectValueFromFilter_PanelDropDown(dropdownName: string, value: string): Promise<void> {
    //     await comboBoxObj.SelectValueFromPanel(this.filterPanel_dropdown(dropdownName), dropdownName, value);
    //     await webactions.delay(2000);
    // }

    async FilterBtn_Name(value: string) {
        await webactions.waitForElementAttached(this.filterBtn_name);
        // await webactions.clickElement();
        await this.page.fill(this.filterBtn_name, value);
        await webactions.delay(2000);
    }

    async FilterBtn_RefranceCode(value: string) {
        await webactions.waitForElementAttached(this.filterBtn_refrance_code);
        // await webactions.clickElement();
        await this.page.fill(this.filterBtn_refrance_code, value);
        await webactions.delay(2000);
    }

    async Filter_SearchButton() {
        await webactions.clickElement(this.filter_Search_btn);
        await webactions.delay(2000);
    }

    async Filter_RefreshButton(){
        await webactions.clickElement(this.filter_refresh_btn);
        await webactions.delay(2000);
    }
// Assertion
    async Assertion_filter_name (value:string){
        let filter_name = this.page.locator(`//div[@class="ag-center-cols-container"]//div[@row-index="0"]//div[@col-id="TaskName"]`);
        await webactions.delay(1000);
        await expect.soft(filter_name).toHaveText(value);
    }

    async Visibility_Button(){
        await webactions.clickElement(this.visible_btn);
        await webactions.delay(4000);
    }

    async Edit_Function () {
        await webactions.clickElement(this.edit_button);
    }

    async Delete_Function() {
        await webactions.clickElement(this.delete_button);
    }


}