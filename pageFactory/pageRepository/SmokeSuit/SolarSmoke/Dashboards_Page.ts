import { Dashboards_Object } from "@objects/SmokeSuit/SolarSmoke/Dashboards_Object";
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


export class Dashboards_Page extends Dashboards_Object {

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
    async TechnicalShortNameMenu() {
        await this.page.hover(this.technicalnamebutton)
        await this.page.waitForSelector(this.technical_name_menu_btn)
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.click(this.technical_name_menu_btn);
        await webactions.clickElement(this.technical_name_menu_filter_btn);
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
    async TechnicalclickOnFirstElement() {
        await webactions.waitForElementAttached(this.tecnicalclickonfirstelement);
        await webactions.clickElement(this.tecnicalclickonfirstelement);
        await webactions.delay(2000);
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
        let SecondElement = '//div[@class="ag-pinned-left-cols-container"]/div[@row-index="0"]'   // here we change x path 
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

    async Assertion(value: string) {
        await webactions.waitForElementAttached(this.assertiontilesobj(value))
        const firstValue = await this.page.innerText(this.assertiontilesobj(value))
        parseInt(firstValue);
        console.log(value," :- ", firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    async TechnicalAssertion() {

        await webactions.waitForElementAttached(this.objTPR);
        const Value6 = await this.page.innerText(this.objTPR);
        //  expect.soft(Value6).toBeGreaterThan(0.0);
        console.log("PR :- ", Value6);
        expect.soft(Value6).not.toEqual(" ");


        await webactions.waitForElementAttached(this.objTDE);
        const Value7 = await this.page.innerText(this.objTDE);
        console.log("Daily Energy :- ", Value7);
        expect.soft(Value7).not.toEqual(" ");

        await webactions.waitForElementAttached(this.inverterPRtile1);
        const ValueIPR = await this.page.innerText(this.inverterPRtile1);
        console.log("Inverter PR :- ", ValueIPR);
        expect.soft(ValueIPR).not.toEqual(" ");
    }

    async WindTechnicalAssertion() {

        await webactions.waitForElementAttached(this.objTPR);
        const Value6 = await this.page.innerText(this.objTPR);
        //  expect.soft(Value6).toBeGreaterThan(0.0);
        console.log("PLF :- ", Value6);
        expect.soft(Value6).not.toEqual(" ");


        await webactions.waitForElementAttached(this.objTDE);
        const Value7 = await this.page.innerText(this.objTDE);
        console.log("Generation Today :- ", Value7);
        expect.soft(Value7).not.toEqual(" ");

        // await webactions.waitForElementAttached(this.inverterPRtile1)
        // const ValueIPR = await this.page.innerText(this.inverterPRtile1)
        // expect.soft(ValueIPR).not.toEqual(" ");
    }

    async TestOverviewAssertion() {
        await webActions.waitForElementAttached(this.testPR);
        const value1 = await this.page.innerText(this.testPR);
        expect.soft(value1).not.toEqual(" ");

        await webActions.waitForElementAttached(this.testDE);
        const value2 = await this.page.innerText(this.testDE);
        expect.soft(value2).not.toEqual(" ");
    }
    async checkPageisCorrectorNot(name: string) {
        await webactions.delay(2000);
        // let pgname = (await this.page.innerText(this.checkpagename)).split("/");
        let pgname = (await this.page.textContent(this.checkpagename)).split("/");

        console.log("Current Page Name Is  :- ",pgname[2]);
        expect(pgname[2]).toContain(name);
    }
    async HomePageButton() {
        await webActions.waitForElementAttached(this.homebutton);
        await webActions.clickElement(this.homebutton);
        await webActions.delay(2000);
    }
    async TestPanjabCluster() {
        await webActions.waitForElementAttached(this.testPR);
        const value1 = await this.page.innerText(this.testPR);
        expect.soft(value1).not.toEqual(" ");
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

    async AssertionDailyEnergy(value: string) {
        await webactions.waitForElementAttached(this.assertiondailyenergy(value));
        const firstValue = await this.page.innerText(this.assertiondailyenergy(value));
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(value," :- ",firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    async AssertionTotalEnergy(value: string) {
        await webactions.waitForElementAttached(this.assertiontotalenergy(value));
        const firstValue = await this.page.innerText(this.assertiontotalenergy(value));
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(value," :- ",firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    async AssertionHeatMapGraph() {
        await webactions.waitForElementAttached(this.assertionheatmap);
        const firstValue = await this.page.innerText(this.assertionheatmap);
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(firstValue);

        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    async AssertionGuage(value: string) {
        await webactions.waitForElementAttached(this.assertionGuage(value));
        const firstValue = await this.page.innerText(this.assertionGuage(value));
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(value," :- ",firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    async AssertionDidimaTurbineStatus() {
        await webactions.waitForElementAttached(this.assertiondidimaturbinestatus);
        const firstValue = await this.page.innerText(this.assertiondidimaturbinestatus);
        parseInt(firstValue);
        console.log(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    /*/
    async GetColumns1(locator: string) {
        const elements = await this.page.$$(locator);
        let colmuns1 = [];
        for (const element of elements) {
            let col = await element.innerText();
            colmuns1.push(col)
        }
        return colmuns1;
    }
 
    async GetColumnValues1(columns: Array<string>) {
        let columnValues1 = []
            let locator1 = `//div[@class="highcharts-label highcharts-data-label highcharts-data-label-color-undefined highcharts-tracker"]//span//span[2]`;
            let colValue1 = await this.page.$eval(locator1, (ele) => ele.textContent);
            // if (colValue1.match('\n')) {
            //     columnValues1.push(' ');
            // } else {
            //     columnValues1.push(colValue1);
            // }
        return columnValues1;
    }
     /*/






    // Dashboard page for EOSE

    async ClickOnEOSEButton() {
        await webactions.waitForElementAttached(this.EoseBtn);
        await webactions.clickElement(this.EoseBtn);

    }

    async SelectDashboard() {
        await webactions.waitForElementAttached(this.dashboard);
        await webactions.clickElement(this.dashboard);
    }
    async ClickOnSearchButton() {
        await webactions.waitForElementAttached(this.search);
        await webactions.clickElement(this.search);
    }
    async SelectDropdownvalue(name: string) {
        await webactions.waitForElementAttached(this.dropdownnames(name));
        await webactions.clickElement(this.dropdownnames(name));
    }

    async CumulativeEnergyTile() {
        await webactions.waitForElementAttached(this.tilecumulativeenergy);
        let th1 = this.page.locator(this.tilecumulativeenergy);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.cumulativeenergyValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.cumulativeenergyValue);
        expect.soft(tv2).not.toBe(" ");
        console.log("Cumulative Charge Energy :- ",tv2);
    }

    async StoredEnergyTile() {
        await webactions.waitForElementAttached(this.TileStoredenergy);
        let th1 = this.page.locator(this.TileStoredenergy);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.StoredenergyValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.StoredenergyValue);
        expect.soft(tv2).not.toBe(" ");
        console.log("Stored Energy :- ",tv2);
    }
    async Guang(guang: string) {
        await webactions.waitForElementAttached(this.Guage);
        let th1 = await this.page.innerText(this.Guage);
        await webactions.delay(2000);
        expect.soft(th1).toContain(guang);
        let tv1 = this.page.locator(this.GuageValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.GuageValue);
        expect.soft(tv2).not.toBe(" ");
        console.log(guang," :- ",tv2);
    }
    async EnergyRatingGraph(graphname: string) {
        await webactions.waitForElementAttached(this.Energyrating);
        let th1 = await this.page.innerText(this.Energyrating);
        await webactions.delay(2000);
        expect.soft(th1).toContain(graphname);
        let tv1 = this.page.locator(this.energyRatingValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.energyRatingValue);
        expect.soft(tv2).not.toBe(" ");
        console.log(graphname," :- ",tv2);
    }

    async TurbineStatusGraph(graphname: string) {
        await webactions.waitForElementAttached(this.generationToday);
        let th1 = await this.page.innerText(this.generationToday);
        await webactions.delay(2000);
        expect.soft(th1).toContain(graphname);

    }




}