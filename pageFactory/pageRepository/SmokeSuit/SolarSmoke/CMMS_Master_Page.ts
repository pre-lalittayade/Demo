import { CMMS_Master_Object } from "@objects/SmokeSuit/SolarSmoke/CMMS_Master_Object";
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


export class CMMS_Master_Page extends CMMS_Master_Object {

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

    async GetPageResponseTime() {
        const largestContentfulPaint: any = await this.page.evaluate(() => {
            return new Promise((resolve) => {
                new PerformanceObserver((l) => {
                    const entries = l.getEntries()
                    // the last entry is the largest contentful paint
                    const largestPaintEntry = entries.at(-1)
                    resolve(largestPaintEntry.startTime)
                }).observe({
                    type: 'largest-contentful-paint',
                    buffered: true
                })
            })
        })

        return parseFloat(largestContentfulPaint)
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
        await webactions.waitForElementAttached(this.enternameforfilter);
        await webactions.clickElement(this.enternameforfilter);
        await webactions.delay(2000);
        await this.page.keyboard.type(value);
        await webactions.delay(2000);
    }
    async clickOnFirstElement() {
        await webactions.waitForElementAttached(this.clickonfirstelement);
        await webactions.clickElement(this.clickonfirstelement);
        await webactions.delay(2000);
    }

    async WFEA(){
        // await webActions.waitForElementAttached(`//div[@ref="centerContainer"]//div[@row-index="0"]//div[@col-id="ProjectName"]`);
    await webActions.waitForPageload();
    
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
        let SecondElement = '//div[@class="ag-pinned-left-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]'
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
        await webactions.waitForElementAttached(this.vendoesassertion)
        const firstValue = await this.page.innerText(this.vendoesassertion)
        expect.soft(firstValue).not.toEqual(" ");
        console.log(firstValue);
    }

    async Dashboard(name: string) {
        await webactions.waitForElementAttached(this.dashboard);
        await webActions.clickElement(this.dashboard);
        await webActions.waitForElementAttached(this.dashboarddropdownvalue(name));
        await webActions.clickElement(this.dashboarddropdownvalue(name));
    }

    async SearchButton() {
        await webactions.waitForElementAttached(this.searchbtn);
        await webActions.clickElement(this.searchbtn);
    }
    async AddProject(name: string) {
        await webactions.waitForElementAttached(this.ProjectDropdown);
        await webactions.clickElement(this.ProjectDropdown);
        await webactions.clickElement(this.Dropdownvalues(name));
        await webactions.delay(2000);
    }
    async ClickOnSearchButton() {
        await webactions.delay(2000);
        await webactions.clickElement(this.SearchBTN);
    }

}