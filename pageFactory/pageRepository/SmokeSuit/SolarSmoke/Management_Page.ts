import { Management_Object } from "@objects/SmokeSuit/SolarSmoke/Management_Object";
import { WebActions } from '@lib/WebActions';
import { ComboBoxActions } from '@lib_web/ComboBoxActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";
import { testConfig } from '../../../../testConfig';
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;


export class Managemet_Page extends Management_Object {

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
    async GetColumns(locator: string){
        const elements = await this.page.$$(locator);
        let colmuns=[];
        for(const element of elements){
            let col =  await element.innerText();
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


    async GetHiddenColumnValues(columns: Array<string>, colNum: number) {
        let columnValues = []
        let SecondElement = '//div[@row-index="0"]//div[@col-id="MenuID"]'   // here we change x path 
        await this.page.locator(SecondElement).click();
        await this.page.keyboard.press("ArrowRight")
        for (let i = 0; i < columns.length; i++) {
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 3)}"]`)
            await rowElement.click();
            for (let j = 0; j < 2; j++)
                await this.page.keyboard.press("ArrowRight")
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`

            let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }

    async Assertion() {
        await webactions.waitForElementAttached(this.column);
        await webactions.waitForElementAttached(this.columnvalue);
        const locator = await this.page.innerText(this.column);
        const locator1 = await this.page.innerText(this.columnvalue);
        // console.log(locator);
        // console.log(locator1);
        expect.soft(locator).not.toEqual(" ");
        expect.soft(locator1).not.toEqual(" ");
        console.log(locator," :- ",locator1);

    }


}