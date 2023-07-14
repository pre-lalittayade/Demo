import { WebActions } from '@lib/WebActions';
import { ComboBoxActions } from '@lib_web/ComboBoxActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";
import { testConfig } from '../../../../testConfig';
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { CMMS_Object } from '@objects/SmokeSuit/SolarSmoke/CMMS_Object';

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;


export class CMMS_Page extends CMMS_Object {

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
    async Granularity(value:string){
        await webactions.waitForElementAttached(this.granularity(value));
        await webactions.clickElement(this.granularity(value));
        await webactions.delay(2000);
    }


    async Listviewbtn() {
        await webactions.clickElement(this.listviewbtn);
    }
    async WOclickOnFirstElement() {
        await webactions.waitForElementAttached(this.wo_clickonfirstelement);
        await webactions.clickElement(this.wo_clickonfirstelement);
        await webactions.delay(2000);
    }
    async WOclickOnFirstElement1() {
        await webactions.waitForElementAttached(this.wo_clickonfirstelement1);
        await webactions.clickElement(this.wo_clickonfirstelement1);
        await webactions.delay(2000);
    }
    async WOAssertion() {
        await webactions.waitForElementAttached(this.assertionworkorder);
        const locator = this.page.locator(this.assertionworkorder);
        const Locator = await this.page.innerText(this.assertionworkorder);
        expect.soft(locator).toBeVisible();
        console.log(Locator);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
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



    async ShortNameMenu() {
        await this.page.hover(this.Shortnamebox_hover)
        await this.page.waitForSelector(this.short_name_menu_btn)
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.click(this.short_name_menu_btn);
        await webactions.clickElement(this.short_name_menu_filter_btn);
        // await webactions.clickElement(this.bess);
    }
    async EnterNameFor_Filter(value: string) {
        // await webactions.enterElementText(this.enternameforfilter,value);
        // await webactions.delay(2000);
        for (let i = 0; i < 3; i++) {
            await webactions.waitForElementAttached(this.enternameforfilter);
            await webactions.clickElement(this.enternameforfilter);
            await webactions.delay(2000);
            // if () {
                await this.page.keyboard.type(value);
                await webactions.delay(2000);
                break;
            // }
            // await this.page.keyboard.type(value);
            // await webactions.delay(2000);
        }
    }
    async clickOnFirstElement(value:string) {
        await webactions.waitForElementAttached(this.clickonfirstelement(value));
        await webactions.clickElement(this.clickonfirstelement(value));
        await webactions.delay(2000);
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
    }//div[@ref="gridHeader"]//div[@aria-rowindex="1"]

    async GetColumnValues1(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//div[@ref="gridHeader"]//div[@aria-rowindex="1"]/div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }

    async Assertion() {
        await webactions.waitForElementAttached(this.assertionpmscheduler)
        const locator = this.page.locator(this.assertionpmscheduler)
        expect.soft(locator).toBeVisible();
        console.log("Hear we are checking wether page is Loading by clicking on filter button and cancle button. (Altimately we are checking Page should no go on continously loading)");
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    async Assertion1() {
        await webactions.waitForElementAttached(this.assertion2);
        const locator1 = this.page.locator(this.assertion2);
        const Locator1 = await this.page.innerText(this.assertion2);
        expect.soft(locator1).toBeVisible();
        await webactions.waitForElementAttached(this.assertion1);
        const locator = this.page.locator(this.assertion1);
        const Locator = await this.page.innerText(this.assertion1);
        expect.soft(locator).toBeVisible();
        console.log(Locator1, " :- ", Locator);

        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    async GetHiddenColumns(locator: string, totalColumns: number) {
        let colmuns = [];
        await webactions.delay(5000)
        for (let i = 0; i <= Math.round(totalColumns / 5); i++) {
            const elements = await this.page.$$(locator);
            for (const element of elements) {
                let col = await element.innerText();
                colmuns.push(col)
            }
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 1) * 5}"]`)
            if (await rowElement.isVisible()) {
                await rowElement.click();
                for (let j = 0; j < 5; j++)
                    await this.page.keyboard.press("ArrowRight")
            }
        }
        const uniqueColumns = new Set(colmuns)
        return colmuns = Array.from(uniqueColumns);
    }
    async GetHiddenColumnsJMR(locator: string, totalColumns: number) {
        let colmuns = [];
        await webactions.delay(5000)
        for (let i = 0; i <= Math.round(totalColumns / 5); i++) {
            const elements = await this.page.$$(locator);
            for (const element of elements) {
                let col = await element.innerText();
                colmuns.push(col);
            }
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 1) * 5}"]`)
            if (await rowElement.isVisible()) {
                await rowElement.click();
                for (let j = 0; j < 5; j++)
                    await this.page.keyboard.press("ArrowRight");
                // await this.page.keyboard.press("ArrowLeft");
            }
        }
        const uniqueColumns = new Set(colmuns)
        return colmuns = Array.from(uniqueColumns);
    }
    async GetHiddenColumnValuesLossCalculation(columns: Array<string>, colNum: number) {
        let columnValues = []
        await this.page.keyboard.press("Home");
        let SecondElement = '//div[@row-index="0"]//div[@col-id="WorkOrderNumber"]';
        await this.page.locator(SecondElement).click({ button: 'right' });
        await this.page.keyboard.press('Tab');
        // await this.page.locator(SecondElement).click();
        // await this.page.keyboard.press("ArrowRight")
        for (let i = 0; i < columns.length; i++) {
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 3)}"]`)
            await rowElement.click();
            for (let j = 0; j < 2; j++)
                await this.page.keyboard.press("ArrowRight")
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`
            await this.page.keyboard.press("ArrowLeft")
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }

    async GetHiddenColumnValues(columns: Array<string>, colNum: number) {
        let columnValues = []
        let SecondElement = '//div[@row-id="0"]//div[@col-id="SPVName"]'
        await this.page.locator(SecondElement).click();
        await this.page.keyboard.press("ArrowRight")
        for (let i = 0; i < columns.length; i++) {
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 3)}"]`)
            await rowElement.click();
            for (let j = 0; j < 2; j++)
                await this.page.keyboard.press("ArrowRight")
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`
            await this.page.keyboard.press("ArrowLeft")
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }

    async selectValeFromDropDown(dropdownName: string, value: string): Promise<void> {
        await comboBoxObj.SelectValue(this.project_dropdown(dropdownName), dropdownName, value);
    }

    async AssertionJMRSchedilarStartDate() {
        await webactions.waitForElementAttached(this.startdateassertion)
        const locator = await this.page.innerText(this.startdateassertion);
        expect.soft(locator).not.toEqual(" ");
        await webactions.waitForElementAttached(this.startdateassertion1)
        const locator1 = await this.page.innerText(this.startdateassertion1);
        expect.soft(locator1).not.toEqual(" ");
        console.log(locator, " :- ", locator1);
    }
    async AssertionJMRSchedilarEndDate() {
        await webactions.waitForElementAttached(this.enddateassertion)
        const locator = await this.page.innerText(this.enddateassertion);
        expect.soft(locator).not.toEqual(" ");
        await webactions.waitForElementAttached(this.enddateassertion1)
        const locator1 = await this.page.innerText(this.enddateassertion1);
        expect.soft(locator1).not.toEqual(" ");
        console.log(locator, " :- ", locator1);
    }
    async AssertionJMRSchedilarProject() {
        await webactions.waitForElementAttached(this.projectassertion)
        const locator = await this.page.innerText(this.projectassertion);
        // console.log(locator);
        expect.soft(locator).not.toEqual(" ");
        await webactions.waitForElementAttached(this.projectassertion1)
        const locator1 = await this.page.innerText(this.projectassertion1);
        expect.soft(locator1).not.toEqual(" ");
        console.log(locator, " :- ", locator1);
    }

    //contract 
    async SelectProject(name: string) {
        await webactions.waitForElementAttached(this.project);
        await webActions.clickElement(this.project);
        await webActions.waitForElementAttached(this.projectdropdownvalue(name));
        await webActions.clickElement(this.projectdropdownvalue(name));
    }

    async PopUp() {
        await webactions.waitForElementAttached(this.popup);
        await webActions.clickElement(this.popup);
    }
    async PopUp11() : Promise<boolean> {
        let p = await this.page.locator('//button[contains(text(),"Ok")]').isVisible();
        return p;
    }
    async SearchBtn() {
        await webactions.waitForElementAttached(this.searchbtn);
        await webActions.clickElement(this.searchbtn);
    }

    async EditBtn() {
        await webactions.waitForElementAttached(this.edit);
        await webActions.clickElement(this.edit);
    }
    async ClickEditAndCloseButton() {
        await webActions.waitForElementAttached(this.editbutton);
        await webActions.clickElement(this.editbutton);
        await webActions.delay(3000);
        await webActions.clickElement(this.closebutton1);
        // await webActions.delay(3000);
        await webActions.clickElement(this.popupyes);
    }
    async ClickEditAndCancleButton() {
        await webActions.waitForElementAttached(this.editbutton);
        await webActions.clickElement(this.editbutton);
        await webActions.delay(3000);
        await webActions.clickElement(this.canclebutton1);
        // await webActions.delay(3000);
        await webActions.clickElement(this.popupyes);
    }
    async ClickAddAndCloseButton() {
        await webActions.waitForElementAttached(this.addbutton);
        await webActions.clickElement(this.addbutton);
        await webActions.delay(3000);
        await webActions.clickElement(this.closebutton1);
        // await webActions.delay(3000);
        await webActions.clickElement(this.popupyes);
    }
    async Tab(value: string) {
        await webactions.waitForElementAttached(this.tabbtn(value));
        await webActions.clickElement(this.tabbtn(value));
    }
    async FiltreButton() {
        await webActions.clickElement(this.filterbutton);
        await webActions.delay(3000);
    }
    async CloseButton() {
        await webActions.clickElement(this.closebutton);
        await webActions.delay(3000);
    }
    //JMR sceduler
    async Template(name: string) {
        await webactions.waitForElementAttached(this.template);
        await webActions.clickElement(this.template);
        await webActions.waitForElementAttached(this.templatedropdownvalue(name));
        // await webActions.enterElementText(this.template,this.templatedropdownvalue(name))
        await webActions.clickElement(this.templatedropdownvalue(name));
    }
    async PopUp1(): Promise<boolean> {
        // await webActions.waitForElementAttached(this.popokbtn);
        let p = await this.page.locator('//button[contains(text(),"Ok")]').isVisible();
        return p;
    }
}
