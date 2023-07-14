import { WebActions } from '@lib/WebActions';
import { ComboBoxActions } from '@lib_web/ComboBoxActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";
import { testConfig } from '../../../../testConfig';
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { Diagnostics_Object } from '@objects/SmokeSuit/SolarSmoke/Diagnostics_Object';

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;


export class Diagnostics_Page extends Diagnostics_Object {

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
    // async navigateToURL(): Promise<void> {
    //     await webActions.navigateToURL(testConfig.qa);
    //     await webActions.waitForElementAttached(this.email_txt);
    // }

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

    async selectValeFromDropDown(dropdownName: string, value: string): Promise<void> {
        await comboBoxObj.SelectValue(this.project_dropdown(dropdownName), dropdownName, value);
    }
    async SelectAlarmButton(buttonName: string): Promise<void> {
        await webactions.clickElement(this.alarms_btn(buttonName));
    }
    async SelectDateRange(fromDate: string, toDate: string): Promise<void> {
        await dateObj.SelectDateRange(fromDate, toDate);
    }
    async NavigateToMenuTree(parentNode: string, nodes: string): Promise<void> {
        await menuObj.smokenavigateMenuTree(parentNode, nodes);
    }
    async DragAndDropElements(source: string): Promise<void> {
        await webactions.dragAndDrop(this.source_location(source), this.drop_textBox);
    }
    async Refreshbtn() {
        await webActions.clickElement(this.refreshbtn)
    }
    async RefreshbtnDC() {
        await webActions.clickElement(this.refreshbtnDC)
    }
    async Close() {
        await webActions.clickElement(this.closebtn)
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
    async Assertion() {
        await webactions.waitForElementAttached(this.assertion)
        const locator = this.page.locator(this.assertion)
        expect.soft(locator).toBeVisible();
        console.log(locator);
    }
    async AssertionHistory() {
        await webactions.waitForElementAttached(this.assertion);
        const locator = this.page.locator(this.assertion);
        const Locat = await this.page.innerText(this.assertion);
        // console.log(Locat);
        expect.soft(locator).toBeVisible();
        await webactions.waitForElementAttached(this.assertion1);
        const locator1 = this.page.locator(this.assertion1);
        const Locat1 = await this.page.innerText(this.assertion1);
        expect.soft(locator1).toBeVisible();
        console.log(Locat," :- ",Locat1);

    }
    // async ScrollTOElement(user: Locator){
    //     const userEle =
    //     '//div[@class="modal-body p-0 layout-control parent-modal modal-search userModal"]//div[@class="ag-root ag-unselectable ag-layout-normal"]//div[text()="Abhilasha"]';
    //     await webactions.clickElement(userEle);
    //     for(let i = 0; i < 100; i++){
    //         if(!(await user.isVisible())){
    //             await this.page.keyboard.press("PageDown")
    //         }
    //     }
    //     await user.scrollIntoViewIfNeeded({timeout: 2000})
    // }

    //   async GetColumnValuesHistory( colNUm: number) {s
    //     let columnValues = []
    //     for (let i = 0; i < 2; i++) {
    //         let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
    //         let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
    //         if (colValue.match('\n')) {
    //             columnValues.push(' ');
    //         } else {
    //             columnValues.push(colValue);
    //         }
    //     }
    //     return columnValues;
    // }




}