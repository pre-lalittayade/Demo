import { RegTaskObject } from "@objects/Regration/CMMS Master/TaskObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";
import { chromium, ChromiumBrowser } from "@playwright/test";
import * as excel from 'exceljs';


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let downfile:string;

export class RegTaskPage extends RegTaskObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);

    }
    async GetColumns(locator: string) {
        const elements = await this.page.$$(locator);
        let colmuns = [];
        for (const element of elements) {
            let col = await element.innerText();
            colmuns.push(col)
        }
        return colmuns;
    }

    async GetColumnValues(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }
    //Functionality Buttons
    async Button(value) {
        await webactions.clickElement(this.button(value));
        await webactions.delay(2000);
    }

    //Uplode Downlode button
    async Uploadfile(value: string) {
        let [upload] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.click(this.button(value))
        ]);
        upload.setFiles( downfile);
        
        //await this.page.locator('//button[contains(text(), "Ok")]').click();
    }
    async Downloadfile(value: string) {
        let download = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click(this.button(value))
        ]);
        let filename = download[0].suggestedFilename();
        await download[0].saveAs(filename);
        await webactions.delay(5000);
        downfile=filename;
    }

    // Excel read
    async openBrowser(): Promise<ChromiumBrowser> {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('C:/Users/Prescinto/.vscode/Test case 1/playwright/playwright/EHS_09062023_163407.xlsx');
        return browser;
    }

    async readExcel(): Promise<void> {
        console.log("open");
        var Excel = require('exceljs');
        var workbook = new Excel.Workbook();

        workbook.xlsx.readFile('C:/Users/Prescinto/.vscode/Test case 1/playwright/playwright/EHS_09062023_163407.xlsx')
            .then(function () {
                var worksheet = workbook.getWorksheet(1);
                var row = worksheet.getRow(5);
                row.getCell(1).value = 12; // A5's value set to 5
                row.commit();
                console.log("close");
                worksheet.eachRow((row, rowNumber) => {
                    row.eachCell((cell, colNumber) => {
                        const value = cell.value;
                        console.log(`Cell(${rowNumber}, ${colNumber}): ${value}`);
                    });
                });
                return workbook.xlsx.writeFile('C:/Users/Prescinto/.vscode/Test case 1/playwright/playwright/tests/resources/DEMO/Excel.json');
            })
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


    async SelectValueFromPanelDropDown(dropdownName: string, value: string, filter: boolean = false): Promise<void> {
        if (filter) {
            await comboBoxObj.SelectValueFromPanel(this.panel_filter_dropdown(dropdownName), dropdownName, value, filter);
        } else {
            await comboBoxObj.SelectValueFromPanel(this.panel_dropdown(dropdownName), dropdownName, value);
        }
    }
    //Edit
    async TaskDetails(value: string, entervalue: string) {
        await webactions.waitForElementAttached(this.taskdetails(value));
        // await webactions.clickElement();
        await this.page.fill(this.taskdetails(value), entervalue);
        await webactions.delay(2000);
    }
    //Filter
    async Search(value: string, entervalue: string) {
        await webactions.waitForElementAttached(this.search(value));
        // await webactions.clickElement();
        await this.page.fill(this.search(value), entervalue);
        await webactions.delay(2000);
    }

    // async RefranceCode(value: string, refrance:string) {
    //     await webactions.waitForElementAttached(this.taskdetails(value));
    //     // await webactions.clickElement();
    //     await this.page.fill(this.taskdetails(value), refrance);
    //     await webactions.delay(2000);
    // }

    async SearchButton() {
        await webactions.clickElement(this.Search_btn);
        await webactions.delay(2000);
    }
    async SubClassificationName(value: string) {
        await this.page.fill(this.subclassification_txt_box, value);
        await webactions.delay(2000);
        await webactions.clickElement(this.SearchRefresh_btn);
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.classification_row(value));
        await webactions.clickElement(this.classification_row(value));
        await webactions.delay(3000);
        await webactions.clickElement(this.subclassapply_btn);
        await webactions.delay(1000);
    }
    async AddFromDropdown(locator: string) {
        await webactions.waitForElementAttached(locator);
        await webactions.clickElement(locator);

    }
    // async SubClassificationName() {
    //     await this.AddFromDropdown(this.ProjectDropdown);
    // }
    async SelectFromdropdown(name: string) {
        await webactions.waitForElementAttached(this.Dropdownvalues(name));
        await webactions.clickElement(this.Dropdownvalues(name));
        await webactions.delay(2000);

    }

    async Sub_Classification_Name(value: string) {
        await webactions.waitForElementAttached(this.subclassification_txt_box);
        // await webactions.clickElement();
        await this.page.fill(this.subclassification_txt_box, value);
        await webactions.delay(2000);
    }

    async Sub_Search_Button() {
        await webactions.clickElement(this.subSearchButton);
        await webactions.delay(2000);
    }

    async ClickOnElement(value: string): Promise<void> {
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

    async SaveSuccessfull_Ok() {
        await webactions.clickElement(this.save_successfull_ok);
        await webactions.delay(1000);
    }

    async Filter_Button() {
        await webactions.clickElement(this.filter_btn);
        await webactions.delay(1000);
    }

    async Filter_Cancel() {
        await webactions.clickElement(this.filter_cancel);
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

    async Filter_RefreshButton() {
        await webactions.clickElement(this.filter_refresh_btn);
        await webactions.delay(2000);
    }
    // Assertion
    async Assertion_filter_name(value: string) {
        let filter_name = this.page.locator(`//div[@class="ag-center-cols-container"]//div[@row-index="0"]//div[@col-id="TaskName"]`);
        await webactions.delay(1000);
        await expect.soft(filter_name).toHaveText(value);
    }

    async Visibility_Button() {
        await webactions.clickElement(this.visible_btn);
        await webactions.delay(4000);
    }

    async Pop_Up(){
        await webactions.clickElement(this.save_popup_yes);
        await webactions.clickElement(this.save_successfull_ok);
    }

    async Edit_Function() {
        await webactions.clickElement(this.edit_button);
    }

    async Delete_Function() {
        await webactions.clickElement(this.delete_button);
    }
    async SubclassificationSearch(){
        await webactions.clickElement(this.SearchSubClassification)
    }
    async clickOnFirstElement(columnid:string) {
        await webactions.waitForElementAttached(this.clickonfirstelement(columnid));
        await webactions.clickElement(this.clickonfirstelement(columnid));
        await webactions.delay(3000);
    }
    async EnterNameFor_Filter(value: string) {
        // await webactions.enterElementText(this.enternameforfilter,value);
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.enternameforfilter);
        await webactions.doubleClickElement(this.enternameforfilter);
        await webactions.delay(2000);
        await this.page.keyboard.type(value);
        // await this.page.click(this.short_name_menu_btn(menubutton));
        await webactions.delay(2000);
    }
    async ShortNameMenu(menuname:string, menubutton:string) {
        await this.page.hover(this.Shortnamebox_hover(menuname))
        await this.page.waitForSelector(this.short_name_menu_btn(menubutton))
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.click(this.short_name_menu_btn(menubutton));
        await webactions.clickElement(this.short_name_menu_filter_btn);
        // await webactions.clickElement(this.bess);
    }
    async CheckResetFuncationality(name:string,refcode:string,subclass:string) {
        console.log(" ");
        await console.log(" --- Checking Wether Reset Button Is Working For Filter --- ");
        console.log(" ");
        await webactions.delay(3000);
        let filtername = await this.page.innerText(this.search(name));
        console.log("Name After Reset :- ", filtername);
        expect.soft(filtername).toContain("");
        // await webactions.delay(2000);

        let refid = await this.page.innerText(this.search(refcode));
        console.log("Refrence Code After Reset :- ", refid);
        expect.soft(refid).toContain("");

        let subclassfilter = await this.page.innerText(this.search(subclass));
        console.log("Sub-Classification After Reset :- ", subclassfilter);
        expect.soft(subclassfilter).toContain("");
    }

    async CheckingFields(name:string,namevalue:string, refcode:string,refrencecode:string, subclass:string,subclassification:string) {
        
        await webactions.delay(5000);
        let filtername = await this.page.inputValue(this.edit(name));
        console.log("Name :- ", filtername);
        expect.soft(filtername).toContain (namevalue);
        // await webactions.delay(2000);

        let refid = await this.page.inputValue(this.edit(refcode));
        console.log("Refrence Code :- ", refid);
        expect.soft(refid).toContain(refrencecode);

        let subclassfilter = await this.page.inputValue(this.edit(subclass));
        console.log("Sub-Classification :- ", subclassfilter);
        expect.soft(subclassfilter).toContain(subclassification);
    }

    async sortandColumnlvloprtns(idname: string, name: string) {

        //await this.page.locator(this.sortingfromcolumn(idname)).scrollIntoViewIfNeeded();
        await webactions.clickElement(this.sortingfromcolumn(idname));
        //await webactions.clickElement(this.buttonsforsorting("general"));
        await webactions.waitForElementAttached(this.pincolumn("Pin Column"));
        await this.page.hover(this.pincolumn("Pin Column"));
        await webactions.clickElement(this.pinvalues("Pin Right"));
        await webactions.delay(2000);
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.pincolumn("Pin Column"));
        await webactions.clickElement(this.pinvalues("No Pin"));
        await webactions.delay(2000);

        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.pincolumn("Autosize This Column"));
        await webactions.clickElement(this.pincolumn("Autosize This Column"));
        await webactions.delay(2000);
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.waitForElementAttached(this.pincolumn("Reset Columns"));
        await webactions.clickElement(this.pincolumn("Reset Columns"));
        await webactions.delay(2000);

        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.pincolumn("Autosize All Columns"));
        await webactions.clickElement(this.pincolumn("Autosize All Columns"));
        await webactions.delay(2000);
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.waitForElementAttached(this.pincolumn("Reset Columns"));
        await webactions.clickElement(this.pincolumn("Reset Columns"));
        await webactions.delay(2000);

        await webactions.clickElement(this.sortingfromcolumn(idname));

        await webactions.clickElement(this.buttonsforsorting("columns"));
        await webactions.clickElement(this.selectallcheckbx);
        await webactions.delay(4000);
        await webactions.clickElement(this.selectallcheckbx);
        await webactions.clickElement(this.columnchkbx(name));
        await webactions.delay(4000);
        await webactions.clickElement(this.columnchkbx(name));
    }
    async sortColumn(name: string) {
        await webactions.waitForElementAttached(this.columntosort(name));
        await webactions.clickElement(this.columntosort(name));
        await webactions.delay(2000);
        await webactions.clickElement(this.AscendingSort(name));
        await webactions.delay(2000);
        await webactions.clickElement(this.DescendingSort(name));
        await webactions.delay(2000);
       
    }

    

}