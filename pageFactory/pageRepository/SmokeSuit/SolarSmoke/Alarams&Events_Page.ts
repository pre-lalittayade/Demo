import { WebActions } from '@lib/WebActions';
import { ComboBoxActions } from '@lib_web/ComboBoxActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";
import { testConfig } from '../../../../testConfig';
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { AlaramsEvent_Object } from "@objects/SmokeSuit/SolarSmoke/Alarams&Events_Object";

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;


export class AlaramEvent_Page extends AlaramsEvent_Object {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);
        textBoxActionsObj = new TextBoxActions(this.page)
        buttonActionsObj = new ButtonActions(this.page)
        webActions = new WebActions(this.page);
    }

    async navigateToURL(environment: string): Promise<void> {
        // await webActions.navigateToURL(testConfig.qa);
        await webActions.navigateToURL(environment);
        await webActions.waitForElementAttached(this.email_txt);
    }

    async loginToApplication(username1: string, password1: string): Promise<void> {
        // const decipherPassword = await webActions.decipherPassword();
        // await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        // await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);
        await textBoxActionsObj.enterElementText(this.email_txt, username1);
        await textBoxActionsObj.enterElementText(this.password_txt, password1);
        await buttonActionsObj.clickElement(this.login_btn);
        await webActions.delay(10000);
        await webActions.waitForElementAttached(this.logout_btn);
    }

    async LogoutOfApplication(): Promise<void> {
        await buttonActionsObj.clickElement(this.logout_btn);
        await buttonActionsObj.clickElement(this.logout_confirm_yes_btn);
        await webActions.waitForElementAttached(this.login_btn)
    }

    async PopUp(): Promise<void> {
        await webActions.waitForElementAttached(this.popokbtn);
        await webActions.clickElement(this.popokbtn);
    }

    async PopUp1(): Promise<boolean> {
        // await webActions.waitForElementAttached(this.popokbtn);
        let p = await this.page.locator('//button[contains(text(),"Ok")]').isVisible();
        return p;
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
            }
             else {
                columnValues.push(colValue);//div[@ref="gridHeader"]//div[@aria-rowindex="1"]
            }
        }
        return columnValues;
    }
    async GetColumnValuesWAM(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            }
             else {
                columnValues.push(colValue);//div[@ref="gridHeader"]//div[@aria-rowindex="1"]
            }
        }
        return columnValues;
    }

    async GetColumnValues1(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//div[@ref="eContainer"]//div[@aria-rowindex="2"]//div[@aria-colindex=${i + colNUm}]`;
            //div[@ref="gridHeader"]//div[@aria-rowindex="1"]//div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }

    //div[@ref="gridHeader"]//div[@aria-rowindex="1"]//div[@aria-colindex="3"]
    async clickOnFirstElement() {
        await webactions.waitForElementAttached(this.clickonfirstelement);
        await webactions.clickElement(this.clickonfirstelement);
        await webactions.delay(3000);
    }
    async clickOnFirstElementEOSE() {
        await webactions.waitForElementAttached(this.clickonfirstelementEOSE);
        await webactions.clickElement(this.clickonfirstelementEOSE);
        await webactions.delay(3000);
    }
    async clickOnOkBtn() {
        await webactions.waitForElementAttached(this.clickonokbtn);
        await webactions.clickElement(this.clickonokbtn);
        await webactions.delay(2000);
    }

    async clickOnElement(value: string) {
        await webactions.waitForElementAttached(this.clickonelement);
        await webactions.clickElement(this.clickonelement);
        await webactions.delay(10000);
    }
    async NameMenu() {
        await this.page.hover(this.namebox_hover)
        // await this.page.waitForSelector(this.name_menu_btn)
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.locator(this.name_menu_btn).click({force:true});
        await webActions.delay(3000);
        await webactions.clickElement(this.name_menu_filter_btn);
        // await webactions.clickElement(this.bess);
    }

    async EnterNameFor_Filter(value: string) {
        // await webactions.enterElementText(this.enternameforfilter,value);
        // await webactions.delay(2000);
        await webactions.waitForElementAttached(this.enternameforfilter);
        await webactions.clickElement(this.enternameforfilter);
        await webactions.delay(2000);
        await this.page.keyboard.type(value);
        await webactions.delay(2000);
    }
    async Wind_Btn() {
        await webactions.clickElement(this.wind_button);
        await webactions.delay(5000);
    }

    async ShortNameMenu() {
        await this.page.hover(this.Shortnamebox_hover)
        await this.page.waitForSelector(this.short_name_menu_btn)
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.click(this.short_name_menu_btn);
        await webactions.clickElement(this.short_name_menu_filter_btn);
        // await webactions.clickElement(this.bess);
    }
    async ClickOnCostumAlertsButton() {
        await webactions.waitForElementAttached(this.costumalertsbutton);
        await webactions.clickElement(this.costumalertsbutton);
        await webactions.delay(10000);
    }

    async Assertion() {
        await webactions.waitForElementAttached(this.assertion)
        const locator = await this.page.innerText(this.assertion);
        // console.log(locator);
        expect.soft(locator).not.toEqual(" ");
        const locator1 = await this.page.innerText(this.assertionAN);
        console.log(locator," :- ",locator1);
        expect.soft(locator1).not.toEqual(" ");
    }
    async AssertionCA() {
        await webactions.waitForElementAttached(this.assertion)
        const locator = await this.page.innerText(this.assertion);
        const locator1 = await this.page.innerText(this.assertion1);

        console.log(locator);
        console.log(locator," :- ",locator1);
        expect.soft(locator).not.toEqual(" ");
        expect.soft(locator1).not.toEqual(" ");
    }

    async AssertionCN() {
        await webactions.waitForElementAttached(this.assertion)
        const locator = await this.page.innerText(this.assertion);
        const locator1 = await this.page.innerText(this.assertion2);

        console.log(locator);
        console.log(locator1);
        expect.soft(locator).not.toEqual(" ");
        expect.soft(locator1).not.toEqual(" ");
    }

    async EventStatusButton(value: string) {
        await webactions.waitForElementAttached(this.statusbutton(value));
        await webactions.clickElement(this.statusbutton(value));
        await webactions.delay(1000);

        const PopUpIsPresent: boolean = await this.PopUp1();
        if (PopUpIsPresent) {
            await webactions.clickElement(this.clickonokbtn);
            await webactions.delay(1000);
            console.log("DATA NOT AVAILABLE");

        } else {
            await this.Assertion();
        }
    }

    async CustomAlertsStatusButton(value: string) {
        await webactions.waitForElementAttached(this.statusbutton(value));
        await webactions.clickElement(this.statusbutton(value));
        await webactions.delay(3000);
        const PopUpIsPresent: boolean = await this.PopUp1();
        if (PopUpIsPresent) {
            await webactions.clickElement(this.clickonokbtn);
            await webactions.delay(10000);
            console.log("DATA NOT AVAILABLE");

        } else {
            await this.AssertionCA();
        }
        // await webactions.delay(3000);
        // const PopUpIsPresent: boolean = await this.PopUp1();
        // if (PopUpIsPresent) {
        //     await webactions.clickElement(this.clickonokbtn);
        //     await webactions.delay(10000);
        //     await this.Assertion();
        // } else {
        //     await this.Assertion();
        // }
    }
    async AlarmStatusButtonLive(value: string) {
        await webactions.waitForElementAttached(this.statusbutton(value));
        await webactions.clickElement(this.statusbutton(value));
        await webActions.clickElement(this.refreshbutton);
        await webactions.delay(3000);
        // await this.AssertionCN();
        const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
        const columns: Array<string> = await this.GetColumns(locator);
        // search
        let i = 0;
        const columnValues: Array<string> = await this.GetColumnValues1(columns, 4);
        // console.log(columns[0]);
        // console.log(columnValues[0]);
        const validationcolumn = columns[0];
        expect.soft(validationcolumn).not.toBe("");
        const validationvalue = columnValues[0];
        expect.soft(validationvalue).not.toBe("");
        console.log(columns[0]," :- ",columnValues[0]);
        await webactions.delay(3000);
    }
    async AlarmStatusButton(value: string) {
        await webactions.waitForElementAttached(this.statusbutton(value));
        await webactions.clickElement(this.statusbutton(value));
        await webActions.clickElement(this.refreshbutton);
        await webactions.delay(3000);
        // await this.AssertionCN();
        const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
        const columns: Array<string> = await this.GetColumns(locator);
        // search
        let i = 0;
        const columnValues: Array<string> = await this.GetColumnValues1(columns, 3);
        // console.log(columns[0]);
        // console.log(columnValues[0]);
        const validationcolumn = columns[0];
        expect.soft(validationcolumn).not.toBe("");
        const validationvalue = columnValues[0];
        expect.soft(validationvalue).not.toBe("");
        console.log(columns[0]," :- ",columnValues[0]);
        await webactions.delay(1000);
    }

    async EventStatusButtonLive(value: string) {
        await webactions.waitForElementAttached(this.statusbutton(value));
        await webactions.clickElement(this.statusbutton(value));
        await webActions.clickElement(this.eventrefreshbutton);
        await webactions.delay(3000);
        // await this.AssertionCN();
        const locator = '//div[@ref="gridHeader"]//div[@ref="eCenterContainer"]//div[@role="columnheader"]//span[@class="ag-header-cell-text"]';
        const columns: Array<string> = await this.GetColumns(locator);
        // search
        let i = 0;
        const columnValues: Array<string> = await this.GetColumnValues(columns, 1);
        // console.log(columns[1]);
        // console.log(columnValues[1]);
        const validationvalue = columns[1];
        expect.soft(validationvalue).not.toBe("")
        const validationvalue1 = columnValues[1];
        expect.soft(validationvalue1).not.toBe("")
        console.log(columns[1]," :- ",columnValues[1]);
        await webactions.delay(2000);
    }



















    //EOSE 



    async ClickOnEOSEButton() {
        await webactions.waitForElementAttached(this.EoseBtn);
        await webactions.clickElement(this.EoseBtn);

    }

    async ChecktheRowforAccount(name: string) {
        let acrow = this.page.locator(this.rowcheck);
        await webactions.delay(2000);
        expect.soft(acrow).toContainText(name);
        await webactions.clickElement(this.rowcheck);
        await webactions.delay(2000);
    }

    async filterfromcolumn(idname: string, name: string) {


        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.buttonsforsorting("filter"));
        //await webactions.delay(4000);
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await this.page.fill(searchtxt, name);
        //await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
    }


    async GotoDetails() {
        await webactions.waitForElementAttached('//div[@class="ag-center-cols-container"]//div[@role="row"]//span//a[normalize-space(text())="EOSE Pilot"]');

        await webactions.clickElement('//div[@class="ag-center-cols-container"]//div[@role="row"]//span//a[normalize-space(text())="EOSE Pilot"]');
        await webactions.delay(3000);
    }
    async CheckResolvedTime() {
        await webactions.delay(2000);
        const locator ='//div[@ref="eBodyViewport"]//div[@row-index="0"]//div[@col-id="ResolvedTimeMomentFormat"]';
        if(await this.page.locator(locator).isVisible()){
        let column = await this.page.innerText(locator);
        console.log("Resolved Time :- ", column);
        expect.soft(column).not.toBeNull();
    }
    else{
        await this.checktheTableHeader();
    }

    }
    async GetColumnsEOSE(locator: string) {
        const arrayOfLocators = await this.page.locator(locator);
        const elementsCount = await arrayOfLocators.count();
        //console.log("number of column=", elementsCount);
        // let elements = await this.page.locator(locator);
        let colmuns = [];
        for (let i = 0; i < elementsCount; i++) {

            let col = await arrayOfLocators.nth(i).innerText();
            colmuns.push(col)
        }
       // console.log(colmuns);
        return colmuns;
    }
    async GetColumnValuesEOSE(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 1; i <= columns.length; i++) {
            // if(i==7){
            //     i=i+1;
            // }
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex="${i}"]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);//div[@ref="gridHeader"]//div[@aria-rowindex="1"]
            }
        }
        //console.log(columnValues);
        return columnValues;
    }

    async GetColumnValuesdetails(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 1; i <= columns.length; i++) {
            if (i == colNUm) {
                i = i + 1;
            }
            let locator = `//div[@ref="eBodyViewport"]//div[@row-index="0"]/div[@aria-colindex=${i}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);//div[@ref="gridHeader"]//div[@aria-rowindex="1"]
            }
        }
        return columnValues;
    }
    async ChecktheTable() {
        await webactions.waitForElementAttached(this.checktableload);
        let tabld = this.page.locator(this.checktableload);
        await webactions.delay(2000);
        expect.soft(tabld).toBeVisible();
    }
    async AddPlant() {
        await webactions.waitForElementAttached(this.DetailsPlant);
        await webactions.clickElement(this.DetailsPlant);
    }
    async AddFromMultiselectDropdown(name: string) {
        await webactions.clickElement(this.multiselectDropdown(name))
    }
    async ClickOnResetFilter() {
        await webactions.clickElement(this.ResetFilter);

    }
    async SelectDropdownvalue(name: string) {
        await webactions.waitForElementAttached(this.dropdown(name));
        await webactions.clickElement(this.dropdown(name));
    }

    async CheckDetailTable() {
        await webactions.waitForElementAttached(this.checkDetailtableload);
        let Dtabld = this.page.locator(this.checkDetailtableload);
        await webactions.delay(2000);
        expect.soft(Dtabld).toBeVisible();
    }
    async ClickonCustomAlertButton() {
        await webactions.waitForElementAttached(this.customAlerts);
        await webactions.clickElement(this.customAlerts);
    }

    async CheckThepopup() {
       let k=0;
       
       let okdialogbox=await this.page.locator(`//mat-dialog-container[@role="dialog"]//div[@class="force-content"]//h3[text()="Data not found for selected option."]`);
       
      // const Locators = this.page.locator(okdialogbox);
       let locCount = await okdialogbox.count();
        
       if (locCount!== 0) {
           
           await this.page.locator(this.okpopup).click();
           await webactions.delay(5000);
            k=1;
            console.log("ok clicked");
          
        }
        return k;
        
    }

async chechthepopupNew(): Promise<boolean> {
    // await webActions.waitForElementAttached(this.popokbtn);
    let p = await this.page.locator('//button[contains(text(),"Ok")]').isVisible();
    return p;

    // let k=0;
    // if(await this.page.locator(`//div//button[normalize-space(text())="Ok"]`).isVisible()){
    // k=1;
}async clickonok(){
    await this.page.locator(`//div//button[normalize-space(text())="Ok"]`).click();
    console.log("ok clicked new");
    }
   



    async checktheTableHeader() {
        await webactions.delay(2000);
        let customtable = this.page.locator(this.custalrtTable);
        expect(customtable).toBeVisible();

    }

    async ClickontimspanDayWeekMonth(name: string) {
        await webactions.delay(2000);
        await webactions.clickElement(this.timespan(name));
        await webactions.delay(2000);
    }
    async CheckOvalButtonsValue(locator: string) {
        await webactions.waitForElementAttached(locator);
        let ovalbt = await this.page.innerText(locator);
        return parseInt(ovalbt);
    }
    async OvalStatebutton() {
        const stbtn = await this.CheckOvalButtonsValue(this.Statebutton);
        console.log("State :- ", stbtn);
        expect.soft(stbtn).toBeGreaterThanOrEqual(0);

    }
    async OvalFaultbutton() {
        const stbtn = await this.CheckOvalButtonsValue(this.Faultsbutton);
        console.log("Fault :- ", stbtn);
        expect.soft(stbtn).toBeGreaterThanOrEqual(0);

    }
    async OvalAlarmbutton() {
        const stbtn = await this.CheckOvalButtonsValue(this.Alarmbutton);
        console.log("Alarm :- ", stbtn);
        expect.soft(stbtn).toBeGreaterThanOrEqual(0);

    }
    async OvalWarningbutton() {
        const stbtn = await this.CheckOvalButtonsValue(this.Warningbutton);
        console.log("Warning :- ", stbtn);
        expect.soft(stbtn).toBeGreaterThanOrEqual(0);

    }
    async OvalCriticalbutton() {
        const stbtn = await this.CheckOvalButtonsValue(this.Criticalbutton);
        console.log("Critical :- ", stbtn);
        expect.soft(stbtn).toBeGreaterThanOrEqual(0);

    }
    async OvalHighbutton() {
        const stbtn = await this.CheckOvalButtonsValue(this.Highbutton);
        console.log("High :- ", stbtn);
        expect.soft(stbtn).toBeGreaterThanOrEqual(0);

    }
    async OvalMediumbutton() {
        const stbtn = await this.CheckOvalButtonsValue(this.Mediumbutton);
        console.log("Medium :- ", stbtn);
        expect.soft(stbtn).toBeGreaterThanOrEqual(0);

    }
    async OvalLowbutton() {
        const stbtn = await this.CheckOvalButtonsValue(this.Lowbutton);
        console.log("Low :- ", stbtn);
        expect.soft(stbtn).toBeGreaterThanOrEqual(0);

    }
}