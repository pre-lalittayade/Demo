import { WebActions } from '@lib/WebActions';
import { ComboBoxActions } from '@lib_web/ComboBoxActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";
import { testConfig } from '../../../../testConfig';
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { Reporting_Object } from '@objects/SmokeSuit/SolarSmoke/Reporting_Object';

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;


export class Reporting_Page extends Reporting_Object {

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

    async PopUp1(): Promise<boolean> {
        // await webActions.waitForElementAttached(this.popokbtn);
        let p = await this.page.locator('//button[contains(text(),"Ok")]').isVisible();
        return p;
    }
    
    async ClickPopUp1() {
        await webActions.delay(2000);
        await webActions.clickElement('//button[contains(text(),"Ok")]');
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
            let locator = `//ag-grid-angular[@id="daily-performance-grid1"]//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }
    async GetColumnValuesID(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//ag-grid-angular[@class="ag-theme-alpine"]//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }

    async GetColumnValuesSchedular(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
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
        await webactions.waitForElementAttached(this.assertion)
        const locator = this.page.locator(this.assertion)
        expect.soft(locator).toBeVisible();
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    async PPAAssertion() {
        await webactions.waitForElementAttached(this.ppacapacity)
        const firstValue = await this.page.innerText(this.ppacapacity)
        console.log(firstValue);
        expect(firstValue).not.toEqual("");
    }

    async DCAssertion() {
        await webactions.waitForElementAttached(this.dccapacity)
        const firstValue = await this.page.innerText(this.dccapacity)
        console.log(firstValue);
        expect(firstValue).not.toEqual("");
    }
    async Template(name: string) {
        await webactions.waitForElementAttached(this.template);
        await webActions.clickElement(this.template);
        await webActions.waitForElementAttached(this.templatedropdownvalue(name));
        await webActions.clickElement(this.templatedropdownvalue(name));
        await webActions.clickElement(this.search);
    }
    async AssertionGrid1() {
        await webactions.waitForElementAttached(this.gird1column);
        const firstValue = await this.page.innerText(this.gird1column);
        // console.log(firstValue);
        expect(firstValue).not.toEqual("");
        await webactions.waitForElementAttached(this.grid1columnvalue);
        const firstValue1 = await this.page.innerText(this.grid1columnvalue);
        console.log(firstValue," :- ",firstValue1);
        expect(firstValue1).not.toEqual("");
    }
    async AssertionGrid2() {
        await webactions.waitForElementAttached(this.gird2column);
        const firstValue = await this.page.innerText(this.gird2column);
        // console.log(firstValue);
        expect(firstValue).not.toEqual("");
        await webactions.waitForElementAttached(this.grid2columnvalue);
        const firstValue1 = await this.page.innerText(this.grid2columnvalue);
        // console.log(firstValue1);
        expect(firstValue1).not.toEqual("");
        console.log(firstValue," :- ",firstValue1);
    }

    async AddButton() {
        await webActions.clickElement(this.addbutton);
        await webActions.delay(3000);
    }
    async CancleButton() {
        await webActions.clickElement(this.canclebutton);
        await webActions.delay(3000);
    }
    async PopupButton() {
        await webActions.clickElement(this.popup);
        await webActions.delay(3000);
    }
    async FiltreButton() {
        await webActions.clickElement(this.filterbutton);
        await webActions.delay(3000);
    }
    async CloseButton() {
        await webActions.clickElement(this.closebutton);
        await webActions.delay(3000);
    }
}